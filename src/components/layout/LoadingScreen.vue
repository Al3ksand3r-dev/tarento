<template>
  <div class="loading" :class="{ visible: $store.state.loading }">
    <div class="loading__spinner"></div>
    <span class="loading__text">{{ loadingText }}</span>
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: {
    loadingText: {
      type: String,
      default: "laddar...",
    },
  },
};
</script>
