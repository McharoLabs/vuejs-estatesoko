<template>
  <nav
    class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a
        href="https://estatesoko.co.tz/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img :src="logo" class="h-8" alt="Estate Logo" />
        <span class="self-center text-2xl whitespace-nowrap">EstateSoko</span>
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          type="button"
          @click.prevent="navigateToRegistration"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
        >
          Register
        </button>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          @click="toggleNavbar"
          :aria-expanded="isNavbarOpen ? 'true' : 'false'"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          :class="{ 'bg-gray-100': isNavbarOpen }"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        :class="{
          'hidden md:flex items-center justify-between w-full md:w-auto md:order-1':
            !isNavbarOpen,
          'items-center justify-between w-full md:flex md:w-auto md:order-1':
            isNavbarOpen,
        }"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"
        >
          <li>
            <a
              href=""
              @click.prevent="navigateToEstatePortal"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href=""
              @click.prevent="navigateToBroker"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >Agents</a
            >
          </li>
          <li>
            <a
              @click.prevent="navigateToAdvancedSearch"
              href=""
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >Advanced Search</a
            >
          </li>
          <li>
            <a
              @click.prevent="navigateToAuth"
              href=""
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >Login</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="js">
import useNavigationFunctions from "@/utils/nav-functions";
import logo from "@/assets/logo.png";

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TopEstateNav",
  setup() {
    const {
      navigateToBroker,
      navigateToEstatePortal,
      navigateToAdvancedSearch,
      navigateToAuth,
      navigateToRegistration,
    } = useNavigationFunctions();

    const isNavbarOpen = ref(false);

    const toggleNavbar = () => {
      isNavbarOpen.value = !isNavbarOpen.value;
    };

    return {
      logo,
      navigateToBroker,
      navigateToEstatePortal,
      navigateToAdvancedSearch,
      toggleNavbar,
      navigateToAuth,
      navigateToRegistration,
      isNavbarOpen,
    };
  },
});
</script>
