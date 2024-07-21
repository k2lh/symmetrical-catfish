import { createStore } from "vuex";

// pondering, ignore

if (window.location.href.includes('local')) {
  prefix = '';
} else if (window.location.href.includes('app-ionos')) {
  prefix = 'staging';
} else {
  prefix = '';
}

export default createStore({
  state: {
    environment: environment
  },
  mutations: {
    setEnvironment: (state, page) => {
      state.environment = page;
    }
  },
  getters: {
    environment: state => state.environment
  },
  modules: {},
  actions: []
});
