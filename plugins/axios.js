import { AUTH_INIT, AUTH_REFRESH, LOG_OUT } from '~/store/user/consts';
// import server from '../.nuxt/server';
import { BANNED_USER_RESPONSE_CODE } from '~/utils/constants';

// temp
if (process.browser) {
  EventBus.$on('SERVER_ERROR', (err) => {
    console.warn(`[Server error]: ${err.data.msg}`);
  });
}

export default function ({
  $axios, store, redirect, app,
}) {
  $axios.onRequest((config) => {
    if (store.getters['user/isAuth']) {
      if (config.url.split('/').pop() === 'refresh-token') {
        config.headers.authorization = `Bearer ${store.getters['user/refreshToken']}`;
      } else {
        config.headers.authorization = `Bearer ${store.getters['user/accessToken']}`;
      }
    }
  });

  $axios.onError(async (error) => {
    const originalRequest = error.config;
    let i;
    let errmsg = '';
    if (app.$cookies.get('refresh')) {
      console.log('refresh');
      if ((error.response.status === 401 && originalRequest.url.split('/').pop() === 'refresh-token')) {
        store.dispatch(`user/${LOG_OUT}`);
        redirect('/sign-in');
        throw error;
      }

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        await store.dispatch(`user/${AUTH_REFRESH}`);
        return $axios(originalRequest);
      }
    }

    if (!originalRequest._retry) {
      if (process.client && error.response.data && error.response.data.msg !== 'Totp required') {
        for (i = 0; i < error.response.data.data.length; i++) {
          // errmsg = error.response.data.data[i];
          console.log('eachmsg', errmsg);
          if (error.response.data.data[i].field === 'firstName') {
            if (error.response.data.data[i].reason === 'string.min') {
              errmsg += 'First name must be at least two letters. ';
            } else if (error.response.data.data[i].reason === 'string.max') {
              errmsg += 'First name must be shorter than 30 letters. ';
            }
          }
          if (error.response.data.data[i].field === 'lastName') {
            if (error.response.data.data[i].reason === 'string.min') {
              errmsg += 'Last name must be at least two letters. ';
            } else if (error.response.data.data[i].reason === 'string.max') {
              errmsg += 'Last name must be shorter than 30 letters. ';
            }
          }
          if (error.response.data.data[i].field === 'username') {
            if (error.response.data.data[i].reason === 'string.min') {
              errmsg += 'Nickname must be at least 5 letters. ';
            } else if (error.response.data.data[i].reason === 'string.max') {
              errmsg += 'Nickname must be shorter than 40 letters.';
            }
          }
        }
        app.$notify({
          type: 'error',
          text: `${error.response.data.msg} : ${errmsg}`,
          closeOnClick: true,
        });
      }
    }

    if (error.response.data.code === BANNED_USER_RESPONSE_CODE) {
      const { data } = error.response.data;
      await store.dispatch(`user/${LOG_OUT}`);

      const query = { reason: data.banReason };

      if (data.unbanTimestamp) {
        query.unbanTimestamp = data.unbanTimestamp;
      }

      redirect({ path: '/ban', query });
    }

    throw error;
  });

  const access = app.$cookies.get('access');
  const refresh = app.$cookies.get('refresh');
  const status = app.$cookies.get('status');

  if (access && refresh) {
    store.commit('user/setOldTokens', { access, refresh, status });
  }

  if (store.getters['user/accessToken']) {
    store.dispatch(`user/${AUTH_INIT}`);
  }
}
