
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import VuexPersistence from 'vuex-persist';
import { RootState } from './types';
import { mockDataModule } from './modules/mockData';
import { clientsModule } from './modules/clients';
import { auth } from './modules/user';

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['auth'],
});

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0', // a simple property
  },
  modules: {
    auth,
    mockDataModule,
    clientsModule,
  },
  plugins: [vuexLocal.plugin],
};

export default new Vuex.Store<RootState>(store);
