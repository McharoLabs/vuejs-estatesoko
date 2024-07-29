<template>
  <div>
    <NavbarVue />

    <div class="p-4 sm:ml-64 justify-center flex">
      <div
        class="p-4 border-2 max-w-7xl w-full text-2xl border-gray-200 rounded-lg mt-14"
      >
        EstateSoko Platform
      </div>
    </div>

    <section
      class="p-4 sm:ml-64 justify-center flex flex-col items-center"
      id="agents"
    >
      <div class="w-full max-w-7xl divide-y">
        <div
          class="flex items-center justify-between flex-column flex-wrap md:flex-row py-4 px-4 bg-white"
        >
          <div class="">
            <button
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
              type="button"
            >
              <span class="sr-only">Action button</span>
              Filter
              <svg
                class="w-2.5 h-2.5 ms-2.5"
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
            <!-- Dropdown menu -->
            <div
              id="dropdownAction"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36"
            >
              <ul
                class="py-1 text-sm text-gray-700"
                aria-labelledby="dropdownActionButton"
              >
                <li>
                  <a
                    href=""
                    @click.prevent="filterProperties()"
                    class="block px-4 py-2 hover:bg-gray-100"
                    >All</a
                  >
                </li>
                <li>
                  <a
                    href=""
                    @click.prevent="filterProperties(PROPERTY_TYPE_ENUM.HOUSE)"
                    class="block px-4 py-2 hover:bg-gray-100"
                    >{{ PROPERTY_TYPE_ENUM.HOUSE }}</a
                  >
                </li>
                <li>
                  <a
                    href=""
                    @click.prevent="filterProperties(PROPERTY_TYPE_ENUM.ROOM)"
                    class="block px-4 py-2 hover:bg-gray-100"
                    >{{ PROPERTY_TYPE_ENUM.ROOM }}</a
                  >
                </li>
                <li>
                  <a
                    href=""
                    @click.prevent="filterProperties(PROPERTY_TYPE_ENUM.LAND)"
                    class="block px-4 py-2 hover:bg-gray-100"
                    >{{ PROPERTY_TYPE_ENUM.LAND }}</a
                  >
                </li>
                <li>
                  <a
                    href=""
                    @click.prevent="filterProperties(PROPERTY_TYPE_ENUM.HALL)"
                    class="block px-4 py-2 hover:bg-gray-100"
                    >{{ PROPERTY_TYPE_ENUM.HALL }}</a
                  >
                </li>
                <li>
                  <a
                    href=""
                    @click.prevent="
                      filterProperties(PROPERTY_TYPE_ENUM.APARTMENT)
                    "
                    class="block px-4 py-2 hover:bg-gray-100"
                    >{{ PROPERTY_TYPE_ENUM.APARTMENT }}</a
                  >
                </li>
                <li>
                  <a
                    href=""
                    @click.prevent="
                      filterProperties(PROPERTY_TYPE_ENUM.BUSINESS_FRAME)
                    "
                    class="block px-4 py-2 hover:bg-gray-100"
                    >{{ PROPERTY_TYPE_ENUM.BUSINESS_FRAME }}</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <form class="flex items-center max-w-sm" @submit.prevent="search">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                v-model="formData.title"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by title..."
                required
              />
            </div>
            <button
              type="submit"
              class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3">Category</th>
                <th scope="col" class="px-6 py-3">Property Type</th>
                <th scope="col" class="px-6 py-3">Title</th>
                <th scope="col" class="px-6 py-3">Location</th>
                <th scope="col" class="px-6 py-3">Price</th>
                <th scope="col" class="px-6 py-3">Payment Period</th>
                <th scope="col" class="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(property, index) in properties"
                :key="index"
                class="bg-white border-b hover:bg-gray-100"
              >
                <td class="px-6 py-4 text-blue-500">{{ property.category }}</td>
                <td class="px-6 py-4 text-blue-500">
                  {{ property.property_type }}
                </td>
                <td class="px-6 py-4">
                  {{ property.title }}
                </td>
                <td class="px-6 py-4">
                  {{
                    property.location.name +
                    ", " +
                    property.location.region.name
                  }}
                </td>

                <td class="px-6 py-4 text-green-500">
                  {{ property.price + " " + property.price_unit }}
                </td>

                <td class="px-6 py-4">
                  {{
                    property.payment_period ? property.payment_period : "N/A"
                  }}
                </td>

                <td class="px-6 py-4">
                  <div class="flex flex-row">
                    <button
                      type="button"
                      class="focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2"
                    >
                      <svg
                        class="w-6 h-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-width="2"
                          d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                        />
                        <path
                          stroke="currentColor"
                          stroke-width="2"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg></button
                    ><button
                      type="button"
                      class="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2"
                    >
                      <svg
                        class="w-6 h-6"
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
                          d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex flex-col items-center my-4">
          <div class="inline-flex mt-2 xs:mt-0">
            <!-- Buttons -->
            <button
              @click.prevent="fetchPrevious"
              :disabled="!previous"
              :class="[
                'flex items-center justify-center px-4 h-10 text-base font-medium rounded-s',
                previous
                  ? 'text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  : 'text-gray-400 bg-gray-300 cursor-not-allowed',
              ]"
            >
              <svg
                class="w-3.5 h-3.5 me-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              Prev
            </button>
            <button
              @click.prevent="fetchNext"
              :disabled="!next"
              :class="[
                'flex items-center justify-center px-4 h-10 text-base font-medium border-0 border-s border-gray-700 rounded-e',
                next
                  ? 'text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  : 'text-gray-400 bg-gray-300 cursor-not-allowed',
              ]"
            >
              Next
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Modals -->
    <section>
      <SuccessModal
        :isVisible="isSuccessModalVisible"
        :message="successMessage"
        @update:isVisible="handleErrorModalVisibility"
      />
      <ErrorModal
        :isVisible="isErrorModalVisible"
        :message="errorMessage"
        @update:isVisible="handleErrorModalVisibility"
      />
    </section>
  </div>
</template>

<script lang="js">
import ErrorModal from "@/components/ErrorModal.vue";
import SuccessModal from "@/components/SuccessModal.vue";
import { defineComponent, onMounted, ref } from "vue"
import NavbarVue from "@/components/Navbar.vue";
import { useMyPropertiesStore } from "@/store/propertiesStore";
import { computed } from "vue";
import { reactive } from "vue";
import { STATUS_CODE, PROPERTY_TYPE_ENUM } from "@/lib/enum";


export default defineComponent({
    name: "MyProperty",
    components: {NavbarVue, ErrorModal, SuccessModal},
    setup() {
          const isSuccessModalVisible = ref(false);
          const successMessage = ref("");
          const isErrorModalVisible = ref(false);
          const errorMessage = ref("");
          const formData = reactive({
            category: "",
            propertyType: "",
            title: "",
          });

          const myPropertiesStore = useMyPropertiesStore();

          const showSuccessModal = (message) => {
          successMessage.value = message;
          isSuccessModalVisible.value = true;
        };

        const showErrorModal = (message) => {
          errorMessage.value = message;
          isErrorModalVisible.value = true;
        };

        const handleErrorModalVisibility = (isVisible) => {
          isErrorModalVisible.value = isVisible;
          if (!isVisible) {
            setTimeout(() => {
              navigateToAuth();
            }, 300);
          }
        };

        const handleSuccessModalVisibility = (isVisible) => {
          isSuccessModalVisible.value = isVisible;
        };

        const properties = computed(() => myPropertiesStore.getProperties);
        const next = computed(() => myPropertiesStore.getNext);
        const previous = computed(() => myPropertiesStore.getPrevious);
        const count = computed(() => myPropertiesStore.getCount);


        onMounted(async () => {
          if (myPropertiesStore.getProperties.length === 0) {
            await fetchProperties();
          }
        });

        const fetchProperties = async (url = null) => {
          const params = {
            ...formData,
            url: url
          };

          const {success, code, message} = await myPropertiesStore.fetchProperties(params);

          if (!success && code === STATUS_CODE.UNAUTHORIZED) {
            showErrorModal(message);
            return;
          }

        }

        const filterProperties = (propertyType = "") => {
          formData.propertyType = propertyType;
          fetchProperties();
        }

        const search = () => {
          fetchProperties();
        }


        return {
          search,
          filterProperties,
          properties,
          next,
          previous,
          count,
          isSuccessModalVisible,
          successMessage,
          isErrorModalVisible,
          errorMessage,
          handleErrorModalVisibility,
          handleSuccessModalVisibility,
          PROPERTY_TYPE_ENUM,
          formData
        }
    },
})
</script>
