import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("@/views/pages/Signup.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/pages/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/pages/Dashboard.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
