<template>
  <div class="w-full mt-20 flex justify-center items-center flex-col">
    <div
      class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <form class="space-y-6" @submit.prevent="handleSignIn">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h5>
        <div>
          <label
            class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
            for="username"
          >
            Your email
          </label>
          <input
            :class="[
              'shadow appearance-none border rounded w-full py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline',
              errorMessage
                ? 'border-red-500'
                : 'border-gray-300  text-gray-700 dark:text-gray-700',
            ]"
            id="username"
            type="email"
            placeholder="Ex. estate@gmail.com"
            v-model="username"
          />
          <p
            v-if="errorMessage || emailError"
            class="text-red-500 text-xs italic"
          >
            {{ errorMessage || emailError }}
          </p>
        </div>
        <div>
          <label
            class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
            for="password"
          >
            Your password
          </label>
          <input
            :class="[
              'shadow appearance-none border rounded w-full py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline',
              errorMessage
                ? 'border-red-500'
                : 'border-gray-300  text-gray-700 dark:text-gray-700',
            ]"
            id="password"
            type="password"
            placeholder="********"
            v-model="password"
          />
          <p
            v-if="errorMessage || passwordError"
            class="text-red-500 text-xs italic"
          >
            {{ errorMessage || passwordError }}
          </p>
        </div>

        <div class="flex items-start">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                checked
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Remember me</label
            >
          </div>
          <a
            href="#"
            class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >Lost Password?</a
          >
        </div>

        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login to your account
        </button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?
          <a
            href=""
            @click.prevent="navigateToRegistration"
            class="text-blue-700 hover:underline dark:text-blue-500"
            >Create account</a
          >
        </div>
      </form>
    </div>
    <p class="text-center text-gray-500 dark:text-gray-400 text-xs mt-3">
      &copy;2024 EstateSoko. All rights reserved.
    </p>
  </div>
</template>

<script>
import { useAuthStore } from "@/store/auth";
import useNavigationFunctions from "@/utils/nav-functions";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Auth",
  components: {},
  setup() {
    const auth = useAuthStore();
    const { navigateToRegistration, navigateToBrokerHome, navigateToManage } =
      useNavigationFunctions();

    const username = ref("");
    const password = ref("");
    const errorMessage = ref("");
    const emailError = ref("");
    const passwordError = ref("");

    const handleSignIn = async () => {
      errorMessage.value = "";

      const { success, message, arrayError } = await auth.authenticate(
        username.value,
        password.value
      );

      if (!success) {
        if (message) {
          errorMessage.value = message ?? "";
          return;
        }

        if (arrayError) {
          emailError.value = arrayError.email ? arrayError.email[0] : "";
          passwordError.value = arrayError.password
            ? arrayError.password[0]
            : "";
          return;
        }
        return;
      }

      if (auth.user?.is_superuser) {
        console.log("admin");
        navigateToManage();
      } else {
        navigateToBrokerHome();
      }
    };

    return {
      handleSignIn,
      navigateToRegistration,
      username,
      password,
      errorMessage,
      emailError,
      passwordError,
    };
  },
});
</script>
