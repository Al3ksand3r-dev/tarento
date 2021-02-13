import { createStore } from "vuex";
import { registerUser, loginUser } from "@/Services/UserServices";
import axios from "axios";

export default createStore({
  state: {
    loading: false,
    user: null,
  },
  mutations: {
    SET_LOADING: (state) => (state.loading = !state.loading),
    SET_USER_DATA(state, userData) {
      state.user = userData;
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.token}`;
      localStorage.setItem("__user__", JSON.stringify(userData));
    },
  },
  actions: {
    registerUser({ commit }, credentials) {
      return registerUser(credentials).then(({ data }) => {
        commit("SET_USER_DATA", data);
      });
    },
    loginUser({ commit }, credentials) {
      return loginUser(credentials).then(({ data }) => {
        commit("SET_USER_DATA", data);
      });
    },
  },
});
