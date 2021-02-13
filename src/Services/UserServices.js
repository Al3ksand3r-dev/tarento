import axios from "axios";
import store from "@/store";

const client = axios.create();

// Intercept request/response
export const setLoading = () => {
  axios.interceptors.request.use((req) => {
    store.commit("SET_LOADING");
    return req;
  });

  axios.interceptors.response.use((res) => {
    store.commit("SET_LOADING");
    return res;
  });
};

export const registerUser = (credentials) => {
  return client.post("/api/users", credentials);
};

export const loginUser = (credentials) => {
  return client.post("/api/login", credentials);
};
