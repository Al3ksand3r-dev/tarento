import { createStore } from "vuex";

export default createStore({
  state: {
    loading: false,
  },
  mutations: {
    SET_LOADING: (state) => (state.loading = !state.loading),
  },
  actions: {},
});
