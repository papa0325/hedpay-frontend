import { Client } from '@hapi/nes/lib/client';

export default function ({ store }, inject) {
  class Connection extends Client {
    connect(token) {
      return super.connect({
        auth: {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      });
    }
  }
  const connection = new Connection(process.env.BASE_WSS_URL);
  connection.onConnect = () => {
    store.commit('setConnectionStatus', true);
  };
  connection.onDisconnect = () => {
    store.commit('setConnectionStatus', false);
  };
  connection.onError = () => {
    store.commit('setConnectionStatus', false);
  };
  if (store.getters['user/accessToken']) {
    connection.connect(store.getters['user/getAccessToken']);
  }
  inject('connection', connection);
}
