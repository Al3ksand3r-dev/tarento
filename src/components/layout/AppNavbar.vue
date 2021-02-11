<template>
  <nav class="navbar">
    <span
      class="lnr lnr-user navbar__login"
      @click="$router.push({ name: 'Home' }).catch(() => {})"
    ></span>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>
