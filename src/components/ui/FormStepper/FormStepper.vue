<template>
  <form class="form">
    <h1 class="form__title">Skapa ett konto för att komma igång.</h1>
    <step-one :input="input" v-if="step === 1" />
    <step-two :input="input" v-if="step === 2" />
    <step-three :input="input" v-if="step === 3" />
    <button
      class="form__submit m-top-20"
      v-if="step === 1 || step === 2"
      @click.prevent="next"
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
      @click.prevent="handleSubmit"
    >
      Submit
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
import StepOne from "./Steps/StepOne.vue";
import StepTwo from "./Steps/StepTwo.vue";
import StepThree from "./Steps/StepThree.vue";

export default {
  components: { StepOne, StepTwo, StepThree },
  name: "FormStepper",
  setup() {
    const input = ref({});
    const step = ref(1);
    const next = () => step.value++;
    const prev = () => step.value--;

    const handleSubmit = () => console.log(input.value);

    return { input, handleSubmit, step, next, prev };
  },
};
</script>
