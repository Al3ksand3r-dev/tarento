import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/main.scss";
import { setLoading } from "@/Services/UserServices";

createApp(App)
  .use(store)
  .use(router)
  .use(setLoading)
  .mount("#app");
