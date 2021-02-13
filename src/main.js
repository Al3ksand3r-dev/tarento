import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/main.scss";
import { setLoading } from "@/Services/UserServices";

const handleRefresh = () => {
  const user = JSON.parse(localStorage.getItem("__user__"));
  if (user) store.commit("SET_USER_DATA", user);
};

createApp(App)
  .use(store)
  .use(router)
  .use(setLoading)
  .use(handleRefresh)
  .mount("#app");
