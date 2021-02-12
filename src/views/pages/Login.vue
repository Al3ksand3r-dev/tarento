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
        <div class="form__row m-top-10">
          <div class="form__col form__col--flex">
            <input
              class="form__checkbox"
              id="RememberMe"
              v-model="input.remember"
              type="checkbox"
              :disabled="!completed"
              @change="handleChange"
            />
            <label
              for="RememberMe"
              class="form__label form__label--small p-left-5"
              >Kom ihåg mig!</label
            >
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
    <loading-screen loadingText="Loggar in..." />
  </div>
</template>

<script>
import { ref, computed, watchEffect } from "vue";
import LoadingScreen from "../../components/layout/LoadingScreen.vue";
import store from "@/store";
import bcrypt from "bcryptjs";
export default {
  components: { LoadingScreen },
  name: "Login",
  setup() {
    const input = ref({
      email: "",
      password: "",
      remember: false,
    });

    const storedPassword = ref("");

    const completed = computed(() => {
      return (
        input.value.email !== "" &&
        validEmail(input.value.email) &&
        input.value.password !== ""
      );
    });

    const handleChange = async () => {
      if (input.value.remember) {
        storedPassword.value = input.value.password;
        localStorage.setItem(
          "credentials",
          JSON.stringify({
            email: input.value.email,
            password: await bcrypt.hash(input.value.password, 10),
            remember: input.value.remember,
          })
        );
      } else {
        localStorage.removeItem("credentials");
      }
    };

    watchEffect(async () => {
      const credentials = JSON.parse(localStorage.getItem("credentials"));
      if (credentials) {
        input.value = {
          email: credentials.email,
          password: await bcrypt.compare(
            storedPassword.value,
            credentials.password
          ),
          remember: credentials.remember,
        };
      }
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

    return { input, handleSubmit, completed, handleChange };
  },
};
</script>
