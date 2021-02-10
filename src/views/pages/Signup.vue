<template>
  <div class="wrapper wrapper--flex">
    <div class="wrapper__content">
      <form-stepper />
    </div>
  </div>
</template>

<script>
import FormStepper from "../../components/ui/FormStepper/FormStepper.vue";
export default {
  name: "Signup",
  components: {
    FormStepper,
  },
  setup() {},
};
</script>
