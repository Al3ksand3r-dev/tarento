<template>
  <div class="wrapper wrapper--flex">
    <div class="wrapper__content">
      <form-stepper />
    </div>
    <loading-screen loadingText="Loggar in..." />
  </div>
</template>

<script>
import FormStepper from "../../components/ui/FormStepper/FormStepper.vue";
import LoadingScreen from "@/components/layout/LoadingScreen.vue";
export default {
  name: "Signup",
  components: {
    FormStepper,
    LoadingScreen,
  },
  setup() {},
};
</script>
