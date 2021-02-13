<template>
  <header class="header header--flex">
    <section class="header__content header__content mar-auto text-center">
      <h1 class="header__title">{{ title }}</h1>
      <p class="header__sub-title p-top-10">{{ subTitle }}</p>
      <app-button
        :label="buttonLabel"
        :handleClick="handleClick"
        class="m-top-20"
      />
    </section>
  </header>
</template>

<script>
import AppButton from "../ui/AppButton.vue";
import router from "@/router";
export default {
  name: "AppHeader",
  components: { AppButton },
  props: {
    title: {
      type: String,
      default: null,
    },
    subTitle: {
      type: String,
      default: null,
    },
    buttonLabel: {
      type: String,
      default: "Click",
    },
  },
  setup() {
    const handleClick = () => router.push({ name: "Signup" });
    return {
      handleClick,
    };
  },
};
</script>
