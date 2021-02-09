<template>
  <button class="app-button" @click="handleClick">{{ label }}</button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    label: {
      type: String,
      default: "placeholder text",
    },
    handleClick: {
      type: Function,
      required: true,
    },
  },
};
</script>
