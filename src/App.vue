<template>
  <div>
    <app-navbar />
    <router-view />
    <graphic-waves />
  </div>
</template>

<script>
import AppNavbar from "./components/layout/AppNavbar.vue";
import GraphicWaves from "./components/ui/GraphicWaves.vue";

export default {
  components: { GraphicWaves, AppNavbar },
  name: "App",
};
</script>
