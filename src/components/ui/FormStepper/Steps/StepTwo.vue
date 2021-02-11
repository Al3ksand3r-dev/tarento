<template>
  <div class="form__row">
    <div class="form__col">
      <label for="Email" class="form__label p-bottom-5">Email</label>
      <input
        type="text"
        class="form__text-field"
        id="Email"
        v-model="inputModel.email"
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
