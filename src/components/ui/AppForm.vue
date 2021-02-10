<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div
      class="form__row"
      v-for="(textField, idx) in numberOfTextFields"
      :key="idx"
    >
      <div class="form__col">
        <label
          class="form__label"
          v-show="textField === idx + 1"
          v-for="(label, idx) in labels"
          :for="idx"
          :key="idx"
          >{{ label }}</label
        ><input type="text" :id="idx" class="form__text-field" />
      </div>
    </div>
    <button class="form__submit">{{ buttonLabel }}</button>
  </form>
</template>

<script>
export default {
  name: "AppForm",
  props: {
    handleSubmit: {
      type: Function,
      required: true,
    },
    labels: {
      type: Array,
      default: null,
    },
    buttonLabel: {
      type: String,
      default: "Submit",
    },
    numberOfTextFields: {
      type: Number,
      default: 1,
    },
  },
};
</script>
