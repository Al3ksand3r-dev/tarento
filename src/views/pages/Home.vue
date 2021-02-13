<template>
  <div class="wrapper__content">
    <app-header
      buttonLabel="Kom igång!"
      title="Välkommen till Tarento!"
      subTitle="Få bättre översikt över dina timmar."
    />
  </div>
</template>

<script>
import AppHeader from "../../components/layout/AppHeader.vue";
export default {
  components: { AppHeader },
  name: "Home",
};
</script>
