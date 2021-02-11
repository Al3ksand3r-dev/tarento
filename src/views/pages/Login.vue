<template>
  <div class="wrapper wrapper--flex">
    <div class="wrapper__content">
      <form class="form" @submit.prevent="handleSubmit">
        <h1 class="form__title">
          Logga in för att få översikt över dina arbetstimmar.
        </h1>
        <div class="form__row">
          <div class="form__col">
            <label for="Email" class="form__label p-bottom-5">E-post</label>
            <input
              class="form__text-field"
              id="Email"
              v-model="input.email"
              type="text"
            />
          </div>
          <div class="form__col">
            <label for="Password" class="form__label m-top-10 p-bottom-5"
              >Password</label
            >
            <input
              class="form__text-field"
              id="Password"
              v-model="input.password"
              type="password"
            />
          </div>
        </div>
        <button class="form__submit m-top-20" :disabled="!completed">
          Logga in
        </button>
        <span class="form__link"
          >Inget konto?
          <router-link to="/signup">Registrera dig här.</router-link></span
        >
      </form>
    </div>
    <loading-screen />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import LoadingScreen from "../../components/layout/LoadingScreen.vue";
import store from "@/store";

export default {
  components: { LoadingScreen },
  name: "Login",
  setup() {
    const input = ref({
      email: "",
      password: "",
    });

    const completed = computed(() => {
      return (
        input.value.email !== "" &&
        validEmail(input.value.email) &&
        input.value.password !== ""
      );
    });

    const validEmail = (email) => {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };

    const handleSubmit = () => {
      setTimeout(() => {
        store.commit("SET_LOADING");
      }, 2000);
      console.log(input.value);
      store.commit("SET_LOADING");
    };

    return { input, handleSubmit, completed };
  },
};
</script>
