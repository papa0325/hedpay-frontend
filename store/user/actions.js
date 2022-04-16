import {
  SIGN_UP_REQUEST,
  SIGN_UP_VALIDATE,
  SIGN_IN_REQUEST,
  GET_USER,
  GET_WALLETS,
  CHANGE_PROFILE,
  AUTH_INIT,
  AUTH_REFRESH,
  GET_2FA_STATUS,
  GET_RATES,
  GET_REFERAL_LINK,
  SEND_REFERAL_INVITE,
  GET_NOTIFICATIONS,
  STACKING_TO_WALLET,
  STACKING_TO_STAKE,
  POST_DOC,
  GET_DOC,
  DEL_DOC,
  GET_BONUSES,
  GET_COUNTRIES,
  MODIFY_USERDATA_TO_SEND,
  MODIFY_USERDATA_TO_GET,
  REMOVE_UNNECESSARY_FIELDS,
  TRANSFORM_DATE,
  GET_MESSAGES,
  PROCESS_MESSAGE,
  SEND_MESSAGE,
  SUBSCRIBE_CHAT,
  HANDLE_MESSAGE_UPDATE,
  FETCH_FILE,
  LOG_OUT,
} from './consts';

function getUTCDate(pickerDate) {
  const date = new Date(pickerDate);
  const timestamp = date.getTime();
  const offsetMinutes = date.getTimezoneOffset();
  const offsetMilliseconds = offsetMinutes * 60 * 1000;
  const newTimestamp = timestamp - offsetMilliseconds;
  const newDate = new Date(newTimestamp);

  return newDate.toISOString();
}

export default {
  async [AUTH_INIT]({ dispatch, commit, getters }) {
    // await dispatch(GET_USER);

    // if (state.status) {
    //   await dispatch(GET_2FA_STATUS);
    //   await dispatch(GET_REFERAL_LINK);
    //   // ---
    // }
    console.log('root-');
    // this.$connection.connect(getters.accessToken);
    commit('setTest');
  },
  async [SIGN_UP_REQUEST]({ commit }, user) {
    const resp = await this.$axios.$post('/auth/register', user);
    commit('setNewTokens', resp.result);
  },
  async [SIGN_UP_VALIDATE]({ dispatch }, code) {
    await this.$axios.$post('/auth/validate-email', code);
    await dispatch(AUTH_INIT);
  },
  async [SIGN_IN_REQUEST]({ context, commit }, user) {
    const resp = await this.$axios.$post('/auth/login', user);
    commit('setNewTokens', resp.result);
    return resp.result;
  },
  async [GET_USER]({ commit, dispatch }) {
    const resp = await this.$axios.$get('/profile/me');
    commit('setUserStatus', resp.result?.status);
    commit('setUserInfo', resp.result);
    await dispatch(MODIFY_USERDATA_TO_GET, resp.result);
    await dispatch(GET_COUNTRIES, resp.result.availableCountries);
  },
  async [MODIFY_USERDATA_TO_GET]({ commit, dispatch }, userData) {
    const verificationdata = userData.profileIdentityVerification;
    const profile = {
      country: userData?.profileIdentityVerification?.country,
      // shipping address
      shippingProvince: userData?.profileIdentityVerification?.location?.province,
      shippingState: userData?.profileIdentityVerification?.location?.state,
      shippingCity: userData?.profileIdentityVerification?.location?.city,
      shippingStreetType:
        userData?.profileIdentityVerification?.location?.streetType,
      shippingStreetName:
        userData?.profileIdentityVerification?.location?.streetName,
      shippingBuildingNum:
        userData?.profileIdentityVerification?.location?.buildingNum,
      shippingUnitNumber:
        userData?.profileIdentityVerification?.location?.unitNumber,
      shippingZip: userData?.profileIdentityVerification?.location?.zipCode,
      // document
      identityDocument: userData?.profileIdentityVerification?.document?.type,
      identityDocumentNumber:
        userData?.profileIdentityVerification?.document?.number,
      identityDocumentRelDate: userData?.profileIdentityVerification?.document
        ?.issueDate
        ? await dispatch(
          TRANSFORM_DATE,
          new Date(userData?.profileIdentityVerification?.document?.issueDate),
        )
        : '',
      identityDocumentExpDate: userData?.profileIdentityVerification?.document
        ?.expireDate
        ? await dispatch(
          TRANSFORM_DATE,
          new Date(
            userData?.profileIdentityVerification?.document?.expireDate,
          ),
        )
        : '',
      // person
      birthDate: userData?.profileIdentityVerification?.person?.birthDate
        ? await dispatch(
          TRANSFORM_DATE,
          new Date(userData?.profileIdentityVerification?.person?.birthDate),
        )
        : '',
      birthPlace: userData?.profileIdentityVerification?.person?.birthPlace,
      firstName:
        userData?.profileIdentityVerification?.person?.firstName
        || userData?.firstName,
      lastName:
        userData?.profileIdentityVerification?.person?.lastName
        || userData?.lastName,
      middleName: userData?.profileIdentityVerification?.person?.middleName,
      gender: userData?.profileIdentityVerification?.person?.gender,
      username: userData?.username,
      avatar: userData?.avatar,
      // comminication
      phone:
        userData?.profileIdentityVerification?.communication?.phone
        || userData?.phone,
    };
    commit('setUserProfile', profile);
  },
  [GET_COUNTRIES]({ commit }, countries) {
    const countryCodes = [];
    Object.keys(countries).forEach((country) => {
      countryCodes.push({
        code: country,
        fullName: countries[country],
      });
    });
    commit('setAvailableCountries', countryCodes);
  },
  async [GET_WALLETS]({ commit }) {
    const resp = await this.$axios.$get('/profile/me/wallets');
    commit('setWallets', resp.result);
  },
  async [GET_2FA_STATUS]({ commit }) {
    const resp = await this.$axios.$get('/auth/totp/enabled');
    commit('change2faStatus', resp.result.enabled);
  },
  async [AUTH_REFRESH]({ commit }) {
    const resp = await this.$axios.$post('/auth/refresh-token');
    commit('setNewTokens', resp.result);
  },
  async [CHANGE_PROFILE]({ dispatch }, user) {
    const data = await dispatch(MODIFY_USERDATA_TO_SEND, user);
    const country = data?.country;
    // if (!country) {
    //   return { ok: false, message: "Please select a country" };
    // }
    // const fieldsResponse = await this.$axios
    //   .$get(`/profile/me/fields/${country}`)
    //   .catch(err => {
    //     console.log(err);
    //     return null;
    //   });
    // if (!fieldsResponse) {
    //   return { ok: false, message: "Sorry there's no data about your country" };
    // }
    const cleanData = await dispatch(
      REMOVE_UNNECESSARY_FIELDS,
      data,
    ).catch(() => ({}));
    cleanData.country = country;
    cleanData.communication = {
      phone: user?.phone,
    };
    const objectToSend = {
      profileIdentityVerification: { ...cleanData },
      firstName: user?.firstName,
      lastName: user?.lastName,
      avatar: user?.avatar,
    };
    // console.log(objectToSend);
    const res = await this.$axios
      .$put('/profile/me', objectToSend)
      .catch((err) => err.response.data);
    dispatch(GET_USER);
    return res && res.ok
      ? { ok: true, message: 'All data saved' }
      : {
        ok: false,
        message: "Some fields haven't been filled",
        errorField:
            res && res.data && res.data[0] && res.data[0]?.field
              ? `Please check field ${res.data[0].field}`
              : null,
      };
  },
  async [REMOVE_UNNECESSARY_FIELDS]({ dispatch }, object) {
    for (const topField in object) {
      if (
        typeof object[topField] === 'object'
        && Object.keys(object[topField]).length === 0
        && object[topField].constructor === Object
      ) {
        delete object[topField];
      } else if (!object[topField]) {
        delete object[topField];
      } else if (typeof object[topField] === 'object') {
        object[topField] = await dispatch(
          REMOVE_UNNECESSARY_FIELDS,
          object[topField],
        );
      }
    }
    for (const topField in object) {
      if (
        typeof object[topField] === 'object'
        && Object.keys(object[topField]).length === 0
      ) {
        delete object[topField];
      }
    }
    return object;
  },
  async [MODIFY_USERDATA_TO_SEND]({}, userData) {
    // necessary to send correct data to backend

    const person = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      middleName: userData.middleName,
      birthDate: userData.birthDate
        ? getUTCDate(userData.birthDate)
        : undefined,
      gender: userData.gender,
    };
    const document = {
      number: userData.identityDocumentNumber?.toString(),
    };
    const communication = {
      email: userData.email,
      ipAddress: userData.ipAddress,
      phone: userData.telephone || undefined,
      cellphone: userData.cellphone,
    };
    const location = {
      state: userData.shippingState,
      // state: "PA",
      city: userData.shippingCity,
      province: userData.shippingProvince,
      streetName: userData.shippingStreetName,
      buildingNum: userData.shippingBuildingNum?.toString(),
      zipCode: userData.shippingZip?.toString(),
    };
    const country = userData.country;
    const result = {
      person, document, communication, location, country,
    };
    return result;
  },
  async [GET_RATES]({ commit }) {
    const resp = await this.$axios.get('/currencies');
    const currencies = await resp.data.result;
    commit('setRates', currencies);
  },
  async [GET_REFERAL_LINK]({ commit }) {
    const resp = await this.$axios.$get('/referral');
    commit('setRefLinkData', resp);
  },
  async [SEND_REFERAL_INVITE]({ commit }, data) {
    const resp = await this.$axios.$post('/referral/send-mail', data);
    return resp;
  },
  async [GET_NOTIFICATIONS]({ commit }) {
    const resp = await this.$axios.$get('/notifications');
    commit('setNotifications', resp);
  },
  async [STACKING_TO_WALLET]({ commit }, data) {
    const resp = await this.$axios.$post('/staking/reward/to-wallet', data);
    return resp;
  },
  async [STACKING_TO_STAKE]({ commit }, data) {
    const resp = await this.$axios.$post('/staking/reward/to-stake', data);
    return resp;
  },
  async [POST_DOC]({ dispatch }, payload) {
    const resp = await this.$axios.$post('/profile/me/documents', payload);
    console.log(resp);
    // if (resp.ok
    //   && resp.result.notifyList
    //   && resp.result.notifyList.length !== 0) {
    //   resp.result.notifyList.forEach(item => {
    //     commit('user/delNotification', item);
    //   })
    // }
    // dispatch(GET_STAKING_DATA);
  },
  async [GET_DOC]({ commit }) {
    const resp = await this.$axios.$get('/profile/me/documents');
    if (resp.ok) {
      commit('setDocs', resp.result);
    }
  },
  async [DEL_DOC]({}, payload) {
    await this.$axios.$delete(
      `/profile/me/documents?id=${payload}`,
    );
  },
  async [GET_BONUSES]({ commit }, payload) {
    const resp = await this.$axios.$get('/profile/me/txs/bonuses');
    if (resp.ok) {
      commit('setReferalBonuses', resp.result.txs);
    }
  },
  async [TRANSFORM_DATE](ctx, date) {
    return date.toLocaleDateString('en', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
  },
  async [GET_MESSAGES]({ commit, dispatch }) {
    const resp = await this.$axios.$get('/user/chats');
    const rawMessages = resp.result.data;
    commit('setChatId', resp.result.chatID);
    const messages = await Promise.all(rawMessages.map((message) => dispatch(PROCESS_MESSAGE, message)));
    commit('setMessages', messages);
  },
  [PROCESS_MESSAGE](ctx, message) {
    return message;
  },
  async [SEND_MESSAGE](ctx, payload) {
    return this.$axios.$post('/user/chats', payload);
  },
  async [SUBSCRIBE_CHAT]({ getters, dispatch }) {
    const chatId = getters.getChatId;
    this.$connection.subscribe(`/user/chat/${chatId}`, (message) => { dispatch(HANDLE_MESSAGE_UPDATE, message); });
  },
  async [HANDLE_MESSAGE_UPDATE]({ commit, dispatch }, message) {
    const processedMessage = await dispatch(PROCESS_MESSAGE, message);
    commit('appendMessage', processedMessage);
  },
  async [FETCH_FILE]({ getters }, fileName) {
    const chatId = getters.getChatId;
    return this.$axios.$get(`/chat-file/${chatId}/${fileName}`, { responseType: 'blob' });
  },
  async [LOG_OUT]({ commit }) {
    commit('logOut');
    await this.$connection.disconnect();
  },

};
