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
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = JSON.parse(localStorage.getItem("__user__"));
  if (to.matched.some((route) => route.meta.requiresAuth && !loggedIn)) {
    next("/");
  } else {
    next();
  }
});

export default router;
