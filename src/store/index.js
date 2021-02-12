import { createStore } from "vuex";
import { registerUser } from "@/Services/UserServices";

export default createStore({
  state: {
    loading: false,
    user: null,
  },
  mutations: {
    SET_LOADING: (state) => (state.loading = !state.loading),
    SET_USER_DATA(state, userData) {
      state.user = userData;
      console.log(state.user);
    },
  },
  actions: {
    registerUser({ commit }, credentials) {
      return registerUser(credentials).then(({ data }) => {
        commit("SET_USER_DATA", data);
      });
    },
  },
});
