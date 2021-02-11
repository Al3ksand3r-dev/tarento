<template>
  <div class="form__row">
    <div class="form__col">
      <label for="Firstname" class="form__label p-bottom-5">Förnamn</label>
      <input
        class="form__text-field"
        id="Firstname"
        v-model="inputModel.firstName"
        type="text"
      />
    </div>
    <div class="form__col">
      <label for="Lastname" class="form__label m-top-10 p-bottom-5"
        >Efternamn</label
      >
      <input
        class="form__text-field"
        id="Lastname"
        v-model="inputModel.lastName"
        type="text"
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
      set: (val) => {
        emit("input", val);
      },
    });
    return { inputModel };
  },
};
</script>
