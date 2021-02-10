<template>
  <div class="wrapper wrapper--flex">
    <div class="wrapper__content">
      <app-form
        :handleSubmit="handleSubmit"
        :numberOfTextFields="5"
        :labels="[
          'Firstname',
          'Lastname',
          'E-mail',
          'Password',
          'Confirm password',
        ]"
      />
    </div>
  </div>
</template>

<script>
import AppForm from "../../components/ui/AppForm.vue";
export default {
  name: "Signup",
  components: {
    AppForm,
  },
  setup() {
    const handleSubmit = () => console.log("Submitted");
    return { handleSubmit };
  },
};
</script>
