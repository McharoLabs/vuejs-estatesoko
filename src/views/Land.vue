<template>
  <div>
    <NavbarVue />

    <section class="p-4 sm:ml-64 justify-center flex" id="land">
      <div
        class="p-4 border-2 max-w-7xl w-full text-2xl border-gray-200 rounded-lg mt-14"
      >
        EstateSoko Platform: Land Details
        <div class="flex flex-row items-center">
          <div
            class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"
              />
            </svg>
            <span class="sr-only">Warning icon</span>
          </div>
          <div class="ms-3 text-sm sm:text-md text-red-500 font-normal">
            All Size will be considered in Metre Squires
          </div>
        </div>
      </div>
    </section>

    <section class="p-4 sm:ml-64 justify-center flex">
      <div
        class="p-4 border-2 max-w-7xl w-full text-2xl border-gray-200 rounded-lg"
      >
        <form
          class="mx-auto mt-6"
          id="register-form"
          @submit.prevent="handleOnSubmit"
        >
          <CommonFields
            :formData="common_property_data"
            :errors="errors"
            :handleCommonNumericInput="handleCommonNumericInput"
          />

          <!-- Land Fields -->
          <div class="grid lg:grid-cols-2 lg:gap-6 xl:grid-cols-3 mt-5">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="land_type"
                id="land_type"
                v-model="land_property_data.land_type"
                :class="{ 'border-red-500': errors.land_type }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="land_type"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Land Type (eg., Agricultural)</label
              >
              <p
                v-if="errors.land_type"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.land_type }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="plot_size"
                id="plot_size"
                v-model="land_property_data.plot_size"
                @input="handleNumericInput('plot_size')"
                :class="{ 'border-red-500': errors.plot_size }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="plot_size"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Plot Size (eg., 500)</label
              >
              <p
                v-if="errors.plot_size"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span> {{ errors.plot_size }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="zoning"
                id="zoning"
                v-model="land_property_data.zoning"
                :class="{ 'border-red-500': errors.zoning }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="zoning"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Zoning (eg., Residential)</label
              >
              <p
                v-if="errors.zoning"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span> {{ errors.zoning }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="topography"
                id="topography"
                v-model="land_property_data.topography"
                :class="{ 'border-red-500': errors.topography }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="topography"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Topography (eg., Flat)</label
              >
              <p
                v-if="errors.topography"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span> {{ errors.topography }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="utilities"
                id="utilities"
                v-model="land_property_data.utilities"
                :class="{ 'border-red-500': errors.utilities }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="utilities"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Utilities (Water, Electricity...)</label
              >
              <p
                v-if="errors.utilities"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.utilities }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="access_roads"
                id="access_roads"
                v-model="land_property_data.access_roads"
                :class="{ 'border-red-500': errors.access_roads }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="access_roads"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Access Roads (eg., Paved, Gravel)</label
              >
              <p
                v-if="errors.access_roads"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.access_roads }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="development_status"
                id="development_status"
                v-model="land_property_data.development_status"
                :class="{ 'border-red-500': errors.development_status }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="development_status"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Development Status(eg. Developed)</label
              >
              <p
                v-if="errors.development_status"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.development_status }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="file"
                name="images"
                id="images"
                accept="image/*"
                @change="handleImagesChanges"
                :class="{ 'border-red-500': errors.images }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                multiple
                required
              />
              <label
                for="images"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Land pictures (At least 5)</label
              >
              <p
                v-if="errors.images"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span> {{ errors.images }}
              </p>
            </div>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none flex flex-row gap-3 justify-center items-center w-full lg:w-1/2 xl:w-1/3"
          >
            <p>Submit</p>

            <svg
              class="w-6 h-6"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </section>

    <section>
      <SuccessModal
        :isVisible="isSuccessModalVisible"
        :message="successMessage"
        @update:isVisible="handleSuccessModalVisibility"
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
import useLandApi from "@/api/land";
import CommonFields from "@/components/CommonFields.vue";
import ErrorModal from "@/components/ErrorModal.vue";
import NavbarVue from "@/components/Navbar.vue";
import SuccessModal from "@/components/SuccessModal.vue";
import { CATEGORY_ENUM, STATUS_CODE } from "@/lib/enum";
import useNavigationFunctions from "@/utils/nav-functions";
import { reactive } from "vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Land",
  components: { NavbarVue, CommonFields, ErrorModal, SuccessModal },
  setup() {
    const { navigateToAuth } = useNavigationFunctions();
    const landApi = useLandApi();
    const isSuccessModalVisible = ref(false);
    const successMessage = ref("");
    const isErrorModalVisible = ref(false);
    const errorMessage = ref("");

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
        }, 400);
      }
    };

    const handleSuccessModalVisibility = (isVisible) => {
      isSuccessModalVisible.value = isVisible;
    };

    const common_property_data = reactive({
      category: "",
      location: "",
      title: "",
      description: "",
      price: "",
      price_unit: "",
      payment_period: "",
      condition: "",
      legal_documents: "",
      nearby_facilities: "",
    });

    const land_property_data = reactive({
      land_type: "",
      plot_size: "",
      zoning: "",
      topography: "",
      utilities: "",
      access_roads: "",
      development_status: "",
      development_status: "",
      images: [],
    });

    const errors = reactive({});

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    const handleNumericInput = (field) => {
      if (isNaN(Number(land_property_data[field]))) {
        errors[field] = "Please enter a valid number.";
      } else {
        errors[field] = "";
      }
    };

    const handleCommonNumericInput = (field) => {
      if (isNaN(Number(common_property_data[field]))) {
        errors[field] = "Please enter a valid number.";
      } else {
        errors[field] = "";
      }
    };

    // Function to handle form submission
    const handleOnSubmit = async () => {
      if (isFormValid()) {
        const formData = {
          ...common_property_data,
          ...land_property_data,
        };

        const { success, code, message } = await landApi.create(formData);

        if (success) {
          showSuccessModal(message);
          clearFormData();
          scrollToSection("land");
        } else {
          if (code === STATUS_CODE.UNAUTHORIZED) {
            showErrorModal(message);
          }
        }
      } else {
        scrollToSection("land");
      }
    };

    const handleImagesChanges = (event) => {
      const input = event.target;
      const files = input.files ? Array.from(input.files) : [];

      if (files.length < 5) {
        errors.images = "Please upload at least 5 images.";
      } else {
        errors.images = "";
        land_property_data.images = files;
      }
    };

    const isFormValid = () => {
      if (common_property_data.category == CATEGORY_ENUM.SALE) {
        common_property_data.payment_period = "null";
      }

      for (const key in land_property_data) {
        if (Object.prototype.hasOwnProperty.call(land_property_data, key)) {
          if (land_property_data[key] === "") {
            errors[key] = "This field is required.";
          } else {
            errors[key] = "";
          }
        }
      }

      for (const key in common_property_data) {
        if (Object.prototype.hasOwnProperty.call(common_property_data, key)) {
          if (common_property_data[key] === "") {
            errors[key] = "This field is required.";
          } else {
            errors[key] = "";
          }
        }
      }

      if (land_property_data.images.length < 5) {
        errors.images = "Please upload at least 5 images.";
      } else {
        errors.images = "";
      }

      if (common_property_data.description.length < 100) {
        errors.description = "Please at least 100 characters required";
      } else {
        errors.description = "";
      }

      if (isNaN(common_property_data.price)) {
        errors.price = "Please enter a valid number";
      }
      if (isNaN(land_property_data.plot_size)) {
        errors.plot_size = "Please enter a valid number";
      }

      for (const key in errors) {
        if (Object.prototype.hasOwnProperty.call(errors, key)) {
          if (errors[key] !== "") {
            return false;
          }
        }
      }

      return true;
    };

    const clearFormData = () => {
      for (const key in common_property_data) {
        if (Object.prototype.hasOwnProperty.call(common_property_data, key)) {
          common_property_data[key] = "";
          errors[key] = "";
        }
      }

      for (const key in land_property_data) {
        if (Object.prototype.hasOwnProperty.call(land_property_data, key)) {
          land_property_data[key] = "";
          errors[key] = "";
        }
      }
    };

    return {
      handleNumericInput,
      handleImagesChanges,
      handleCommonNumericInput,
      errors,
      common_property_data,
      isSuccessModalVisible,
      successMessage,
      isErrorModalVisible,
      errorMessage,
      showSuccessModal,
      showErrorModal,
      handleErrorModalVisibility,
      handleSuccessModalVisibility,
      land_property_data,
      handleOnSubmit,
    };
  },
});
</script>
