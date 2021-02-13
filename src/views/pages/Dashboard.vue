<template>
  <div class="wrapper__content">
    <app-header :title="`Hej ${user.name}!`" buttonLabel="Stämpla in" />
  </div>
</template>

<script>
import AppHeader from "../../components/layout/AppHeader.vue";
import axios from "axios";
import { ref } from "vue";
export default {
  name: "Dashboard",
  components: {
    AppHeader,
  },
  setup() {
    const user = ref({});
    axios.get("/api/dashboard").then(({ data }) => (user.value = data));
    return { user };
  },
};
</script>
