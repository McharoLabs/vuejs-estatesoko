<template>
  <div>
    <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start rtl:justify-end">
            <button
              @click="toggleSidebar"
              aria-controls="logo-sidebar"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <a href="" class="flex ms-2 md:me-24">
              <img :src="logo" class="h-8 me-3" alt="itms Logo" />
              <span
                class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap"
                >EstateSoko</span
              >
            </a>
          </div>
          <!-- PROFILE -->
          <div class="flex items-center flex-row">
            <div class="flex items-center ms-3">
              <div>
                <button
                  type="button"
                  class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                  aria-expanded="false"
                >
                  <img
                    class="w-8 h-8 rounded-full"
                    :src="getImageUrl(user?.passport ?? '')"
                    alt="user photo"
                  />
                </button>
              </div>
            </div>

            <div class="flex flex-col text-sm gap-0 ms-1">
              <div>
                {{ user?.name }}
              </div>
              <div class="text-xs">
                {{ user?.email }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <aside
      id="logo-sidebar"
      :class="[
        'fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        'bg-white border-r border-gray-200 sm:translate-x-0  ',
      ]"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white">
        <ul class="space-y-2 font-medium">
          <!-- SUPER USER NAV -->
          <li v-if="user.is_superuser">
            <a
              href=""
              class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              @click.prevent="route.navigateToManage"
            >
              <svg
                class="w-5 h-5 text-blue-500 transition duration-75 group-hover:text-blue-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path
                  d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
                />
                <path
                  d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
                />
              </svg>
              <span class="ms-3">Dashboard</span>
            </a>
          </li>

          <li v-if="user.is_superuser">
            <a
              href=""
              class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              @click.prevent="route.navigateToAgents"
            >
              <svg
                class="w-5 h-5 text-blue-500 transition duration-75 group-hover:text-blue-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>

              <span class="ms-3">Agents</span>
            </a>
          </li>

          <!-- BROKER NAV -->

          <li v-if="!user.is_superuser">
            <a
              href=""
              class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              @click.prevent="route.navigateToBrokerHome"
            >
              <svg
                class="w-5 h-5 text-blue-500 transition duration-75 group-hover:text-blue-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path
                  d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
                />
                <path
                  d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
                />
              </svg>
              <span class="ms-3">Dashboard</span>
            </a>
          </li>

          <li v-if="!user.is_superuser">
            <a
              href=""
              class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              @click.prevent="route.navigateToMyProperty"
            >
              <svg
                class="w-5 h-5 text-blue-500 transition duration-75 group-hover:text-blue-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 9l9-6 9 6-9 6-9-6z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 22V12h6v10"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 6h7v8h-7z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 6H3v8h4z"
                />
              </svg>
              <span class="ms-3">My Property</span>
            </a>
          </li>

          <li v-if="!user.is_superuser">
            <button
              @click="toggleNavDropdown"
              type="button"
              class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
              aria-controls="dropdown-example"
              :aria-expanded="isNavDropdownOpen"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-blue-500 transition duration-75 group-hover:text-blue-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M3 21h18M4 18h16M6 10v8m4-8v8m4-8v8m4-8v8M4 9.5v-.955a1 1 0 0 1 .458-.84l7-4.52a1 1 0 0 1 1.084 0l7 4.52a1 1 0 0 1 .458.84V9.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5Z"
                />
              </svg>

              <span
                class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
                >New Property</span
              >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul
              id="dropdown-example"
              :class="
                isNavDropdownOpen ? 'block' : 'hidden' + ' py-2 space-y-2'
              "
            >
              <li>
                <a
                  @click.prevent="route.navigateToHause"
                  href=""
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >{{ PROPERTY_TYPE_ENUM.HOUSE }}</a
                >
              </li>
              <li>
                <a
                  @click.prevent="route.navigateToApartment"
                  href=""
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >{{ PROPERTY_TYPE_ENUM.APARTMENT }}</a
                >
              </li>
              <li>
                <a
                  @click.prevent="route.navigateToRoom"
                  href=""
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >{{ PROPERTY_TYPE_ENUM.ROOM }}</a
                >
              </li>

              <li>
                <a
                  @click.prevent="route.navigateToBussinessFrame"
                  href=""
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >{{ PROPERTY_TYPE_ENUM.BUSINESS_FRAME }}</a
                >
              </li>

              <li>
                <a
                  @click.prevent="route.navigateToHall"
                  href=""
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >{{ PROPERTY_TYPE_ENUM.HALL }}</a
                >
              </li>

              <li>
                <a
                  @click.prevent="route.navigateToLand"
                  href=""
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >{{ PROPERTY_TYPE_ENUM.LAND }}</a
                >
              </li>
            </ul>
          </li>

          <li>
            <a
              @click.prevent="route.navigateToProfile"
              href=""
              class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <svg
                class="w-5 h-5 text-blue-500 transition duration-75 group-hover:text-blue-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Profile</span>
            </a>
          </li>

          <li>
            <a
              href=""
              @click.prevent="route.navigateToResetPassword"
              class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <svg
                class="w-5 h-5 text-blue-500 transition duration-75 group-hover:text-blue-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path
                  d="M11 1.02a1 1 0 0 0-1 .935V10H2.025a1 1 0 0 0-1 1.065c.013.188.028.374.028.565a8.5 8.5 0 1 0 9.039-9.039A1 1 0 0 0 11 1.02Z"
                />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Reset Password</span>
            </a>
          </li>

          <li>
            <a
              href=""
              @click.prevent="route.signOut"
              class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-blue-500 transition duration-75 group-hover:text-blue-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Sign out</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script lang="js">
import { defineComponent, ref } from "vue";
import { useAuthStore } from "../store/auth";
import logo from "../assets/logo.png";
import useNavigationFunctions from "../utils/nav-functions";
import useFormatter from "../utils/formatter";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { PROPERTY_TYPE_ENUM } from "../lib/enum";

export default defineComponent({
  name: "NavBar",
  components: {},
  setup() {
    const authStore = useAuthStore();
    const user= authStore.user;

    const isAuthenticated = !!authStore.user;

    const route = useNavigationFunctions();
    const { getImageUrl } = useFormatter();

    const isSidebarOpen = ref(false);
    const isNavDropdownOpen = ref(false);

    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value;
    };

    const toggleNavDropdown = () => {
      isNavDropdownOpen.value = !isNavDropdownOpen.value;
    };

    // MOUNTED
    onMounted(() => {
      initFlowbite();

      if (!isAuthenticated) {
        navigateToAuth();
        return;
      }
    });

    return {
      route,
      user,
      toggleSidebar,
      getImageUrl,
      toggleNavDropdown,
      isNavDropdownOpen,
      isSidebarOpen,
    };
  },
  data() {
    return { logo, PROPERTY_TYPE_ENUM };
  },
});
</script>
