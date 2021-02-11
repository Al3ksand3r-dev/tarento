<template>
  <div>
    <app-navbar />
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
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
