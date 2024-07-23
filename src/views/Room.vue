<template>
  <div>
    <NavbarVue />

    <section class="p-4 sm:ml-64 justify-center flex" id="room">
      <div
        class="p-4 border-2 max-w-7xl w-full text-2xl border-gray-200 rounded-lg mt-14"
      >
        EstateSoko Platform: Room Details
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
        <form class="mx-auto mt-6" id="register-form">
          <CommonFields
            :formData="common_property_data"
            :errors="errors"
            :handleCommonNumericInput="handleCommonNumericInput"
          />

          <!-- Room Fields -->
          <div class="grid lg:grid-cols-2 lg:gap-6 xl:grid-cols-3 mt-5">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="room_size"
                id="room_size"
                v-model="room_property_data.room_size"
                @input="handleNumericInput('room_size')"
                :class="{ 'border-red-500': errors.room_size }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="room_size"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Room Size (eg., 400)</label
              >
              <p
                v-if="errors.room_size"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.room_size }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="shared_facilities"
                id="shared_facilities"
                v-model="room_property_data.shared_facilities"
                :class="{ 'border-red-500': errors.shared_facilities }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="shared_facilities"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Shared Facilities (eg., Kichen, Toilet...)</label
              >
              <p
                v-if="errors.shared_facilities"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.shared_facilities }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <select
                name="furnishing_status"
                id="furnishing_status"
                v-model="room_property_data.furnishing_status"
                :class="{ 'border-red-500': errors.furnishing_status }"
                class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              >
                <option disabled value="">Select Status</option>
                <option
                  v-for="status in furnished_status"
                  :key="status"
                  :value="status"
                >
                  {{ status }}
                </option>
              </select>
              <label
                for="category"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Furnishing Status</label
              >
              <p
                v-if="errors.furnishing_status"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.furnishing_status }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <select
                name="room_type"
                id="room_type"
                v-model="room_property_data.room_type"
                :class="{ 'border-red-500': errors.room_type }"
                class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              >
                <option disabled value="">Select Room Type</option>
                <option v-for="type in room_type" :key="type" :value="type">
                  {{ type }}
                </option>
              </select>
              <label
                for="category"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Room Type</label
              >
              <p
                v-if="errors.furnishing_status"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.furnishing_status }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="occupancy"
                id="occupancy"
                v-model="room_property_data.occupancy"
                @input="handleNumericInput('occupancy')"
                :class="{ 'border-red-500': errors.occupancy }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="occupancy"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Maximum Occupancy (eg., 2)</label
              >
              <p
                v-if="errors.occupancy"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span> {{ errors.occupancy }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floor_level"
                id="floor_level"
                v-model="room_property_data.floor_level"
                @input="handleNumericInput('floor_level')"
                :class="{ 'border-red-500': errors.floor_level }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="floor_level"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Floor Level (eg., 1 for Ground, 2, 3...)</label
              >
              <p
                v-if="errors.floor_level"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span> {{ errors.floor_level }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="accessbility_features"
                id="accessbility_features"
                v-model="room_property_data.accessbility_features"
                :class="{ 'border-red-500': errors.accessbility_features }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="accessbility_features"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Accessible Features(eg. Elevators, ramps...)</label
              >
              <p
                v-if="errors.accessbility_features"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.accessbility_features }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="utilities"
                id="utilities"
                v-model="room_property_data.utilities"
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
                name="amenities"
                id="amenities"
                v-model="room_property_data.amenities"
                :class="{ 'border-red-500': errors.amenities }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="utilities"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Amenities (eg., Gym, Sweeming pool...)</label
              >
              <p
                v-if="errors.utilities"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span> {{ errors.amenities }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="security_features"
                id="security_features"
                v-model="room_property_data.security_features"
                :class="{ 'border-red-500': errors.security_features }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="security_features"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Security Features (eg., Alarm system, personal...)</label
              >
              <p
                v-if="errors.security_features"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.security_features }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="heating_cooling_systems"
                id="heating_cooling_systems"
                v-model="room_property_data.heating_cooling_systems"
                :class="{ 'border-red-500': errors.heating_cooling_systems }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="heating_cooling_systems"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Heating/Cooling Systems (eg., Fans)</label
              >
              <p
                v-if="errors.heating_cooling_systems"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.heating_cooling_systems }}
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
            @click.prevent="handleOnSubmit"
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
import useRoomApi from "@/api/room";
import CommonFields from "@/components/CommonFields.vue";
import ErrorModal from "@/components/ErrorModal.vue";
import NavbarVue from "@/components/Navbar.vue";
import SuccessModal from "@/components/SuccessModal.vue";
import {
  CATEGORY_ENUM,
  FURNISHED_STATUS,
  ROOM_TYPE_ENUM,
  STATUS_CODE,
} from "@/lib/enum";
import useNavigationFunctions from "@/utils/nav-functions";
import { reactive } from "vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Room",
  components: { NavbarVue, CommonFields, ErrorModal, SuccessModal },
  setup() {
    const { navigateToAuth } = useNavigationFunctions();
    const roomApi = useRoomApi();
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
      category: CATEGORY_ENUM.RENTAL,
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

    const room_property_data = reactive({
      room_size: "",
      shared_facilities: "",
      furnishing_status: "",
      room_type: "",
      occupancy: "",
      utilities: "",
      floor_level: "",
      amenities: "",
      accessbility_features: "",
      security_features: "",
      heating_cooling_systems: "",
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
      if (isNaN(Number(room_property_data[field]))) {
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
          ...room_property_data,
        };

        const { success, code, message } = await roomApi.create(formData);

        if (success) {
          showSuccessModal(message);
          clearFormData();
          scrollToSection("room");
        } else {
          if (code === STATUS_CODE.UNAUTHORIZED) {
            showErrorModal(message);
          }
        }
      } else {
        scrollToSection("room");
      }
    };

    const handleImagesChanges = (event) => {
      const input = event.target;
      const files = input.files ? Array.from(input.files) : [];

      if (files.length < 5) {
        errors.images = "Please upload at least 5 images.";
      } else {
        errors.images = "";
        room_property_data.images = files;
      }
    };

    const isFormValid = () => {
      for (const key in room_property_data) {
        if (Object.prototype.hasOwnProperty.call(room_property_data, key)) {
          if (room_property_data[key] === "") {
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

      if (room_property_data.images.length < 5) {
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
      if (isNaN(room_property_data.room_size)) {
        errors.room_size = "Please enter a valid number";
      }

      if (isNaN(room_property_data.occupancy)) {
        errors.occupancy = "Please enter a valid number";
      }

      if (isNaN(room_property_data.floor_level)) {
        errors.floor_level = "Please enter a valid number";
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

      for (const key in room_property_data) {
        if (Object.prototype.hasOwnProperty.call(room_property_data, key)) {
          room_property_data[key] = "";
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
      room_property_data,
      handleOnSubmit,
      furnished_status: Object.values(FURNISHED_STATUS),
      room_type: Object.values(ROOM_TYPE_ENUM),
    };
  },
});
</script>
