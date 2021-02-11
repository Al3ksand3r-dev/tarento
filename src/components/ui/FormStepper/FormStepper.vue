<template>
  <form class="form">
    <h1 class="form__title">Skapa ett konto för att komma igång.</h1>
    <transition name="slide-fade" mode="out-in">
      <step-one v-model="input" :input="input" v-if="step === 1" />
      <step-two v-model="input" :input="input" v-else-if="step === 2" />
      <step-three v-model="input" :input="input" v-else />
    </transition>
    <button
      class="form__submit m-top-20"
      v-if="step === 1 || step === 2"
      @click.prevent="next"
      :disabled="!completed"
    >
      Next
    </button>
    <button
      class="form__submit m-top-20"
      v-if="step === 2 || step === 3"
      @click.prevent="prev"
    >
      Previous
    </button>
    <button
      class="form__submit m-top-20"
      v-if="step === 3"
      :disabled="!completed"
      @click.prevent="handleSubmit"
    >
      Submit
    </button>
    <span class="form__link"
      >Har redan ett konto?
      <router-link to="/login">Logga in.</router-link></span
    >
  </form>
</template>

<script>
import { ref, computed } from "vue";
import StepOne from "./Steps/StepOne.vue";
import StepTwo from "./Steps/StepTwo.vue";
import StepThree from "./Steps/StepThree.vue";

export default {
  components: { StepOne, StepTwo, StepThree },
  name: "FormStepper",
  setup() {
    const input = ref({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
    });

    const step = ref(1);

    const next = () => step.value++;
    const prev = () => step.value--;

    const completed = computed(() => {
      switch (step.value) {
        case 1:
          return input.value.firstName !== "" && input.value.lastName !== "";
        case 2:
          return input.value.email !== "";
        case 3:
          return (
            input.value.password !== "" && input.value.repeatPassword !== ""
          );
      }
    });

    const handleSubmit = () => console.log(input.value);

    return { input, handleSubmit, step, next, prev, completed };
  },
};
</script>
