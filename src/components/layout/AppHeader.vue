<template>
  <header class="header header--flex">
    <section class="header__content header__content mar-auto text-center">
      <h1 class="header__title">Välkommen till Tarento!</h1>
      <p class="header__sub-title p-top-10">
        Få bättre översikt över dina timmar.
      </p>
      <app-button
        label="Kom igång!"
        :handleClick="handleClick"
        class="m-top-20"
      />
    </section>
  </header>
</template>

<script>
import AppButton from "../ui/AppButton.vue";

export default {
  name: "AppHeader",
  components: { AppButton },
  setup() {
    const handleClick = () => console.log("Clicked");
    return {
      handleClick,
    };
  },
};
</script>
