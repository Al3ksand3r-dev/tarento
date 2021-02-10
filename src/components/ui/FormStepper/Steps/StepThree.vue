<template>
  <div class="form__row">
    <div class="form__col">
      <label for="Password" class="form__label">Ange lösenord</label>
      <input
        class="form__text-field"
        id="Password"
        type="password"
        v-model="inputModel.password"
      />
    </div>
    <div class="form__col">
      <label for="RepeatPassword" class="form__label">Repetera lösenord</label>
      <input
        class="form__text-field"
        id="RepeatPassword"
        type="password"
        v-model="inputModel.repeatPassword"
      />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "StepOne",
  props: {
    input: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const inputModel = computed({
      get: () => props.input,
      set: (val) => emit("inputValue", val),
    });
    return { inputModel };
  },
};
</script>
