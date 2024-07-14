<template>
  <div class="flex flex-col min-h-screen">
    <TopEstateNavVue />
    <section class="p-10" id="register"></section>

    <section class="max-w-screen-xl mx-auto px-4 flex-grow w-full mb-10">
      <div class="flex flex-row justify-center">
        <div
          class="max-w-2xl bg-white border border-gray-200 rounded-lg shadow p-4 md:w-1/2 lg:w-2/3"
        >
          <h2 class="text-2xl font-bold">Create Your Account</h2>

          <p class="text-gray-700 text-sm sm:text-lg">
            Start your account in seconds. Already have an account?
            <a
              @click.prevent="navigateToAuth"
              class="cursor-pointer text-blue-800 hover:underline"
              >Login here.</a
            >
          </p>
          <!-- FORM -->
          <form
            class="mx-auto mt-6"
            id="register-form"
            @submit.prevent="submitForm"
          >
            <div class="grid lg:grid-cols-2 lg:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  v-model="formData.first_name"
                  :class="{ 'border-red-500': errors.first_name }"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
                <label
                  for="first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >First Name</label
                >
                <p
                  v-if="errors.first_name"
                  class="mt-2 text-sm text-red-600 dark:text-red-500"
                >
                  <span class="font-medium">Error:</span>
                  {{ errors.first_name }}
                </p>
              </div>

              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  v-model="formData.last_name"
                  :class="{ 'border-red-500': errors.last_name }"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="last_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Last Name</label
                >
                <p
                  v-if="errors.last_name"
                  class="mt-2 text-sm text-red-600 dark:text-red-500"
                >
                  <span class="font-medium">Error:</span> {{ errors.last_name }}
                </p>
              </div>

              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  v-model="formData.email"
                  :class="{ 'border-red-500': errors.email }"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Email (Ex. estate@gmail.com)</label
                >
                <p
                  v-if="errors.email"
                  class="mt-2 text-sm text-red-600 dark:text-red-500"
                >
                  <span class="font-medium">Error:</span> {{ errors.email }}
                </p>
              </div>

              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  name="phone_number"
                  id="phone_number"
                  v-model="formData.phone_number"
                  :class="{ 'border-red-500': errors.phone_number }"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="phone_number"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Phone Number (Ex. 07##......)</label
                >
                <p
                  v-if="errors.phone_number"
                  class="mt-2 text-sm text-red-600 dark:text-red-500"
                >
                  <span class="font-medium">Error:</span>
                  {{ errors.phone_number }}
                </p>
              </div>

              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="company"
                  id="company"
                  v-model="formData.company"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="company"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Company (Ex. EstateSoko or Self employee)</label
                >
              </div>

              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="date"
                  name="birth_date"
                  id="birth_date"
                  v-model="formData.birth_date"
                  :class="{ 'border-red-500': errors.birth_date }"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="birth_date"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Pick Birth Date</label
                >
                <p
                  v-if="errors.birth_date"
                  class="mt-2 text-sm text-red-600 dark:text-red-500"
                >
                  <span class="font-medium">Error:</span>
                  {{ errors.birth_date }}
                </p>
              </div>

              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="nida_number"
                  id="nida_number"
                  v-model="formData.nida_number"
                  :class="{ 'border-red-500': errors.nida_number }"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="nida_number"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >NIDA (Ex. 20240323-34564-00001-34)</label
                >
                <p
                  v-if="errors.nida_number"
                  class="mt-2 text-sm text-red-600 dark:text-red-500"
                >
                  <span class="font-medium">Error:</span>
                  {{ errors.nida_number }}
                </p>
              </div>

              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="file"
                  name="passport"
                  id="passport"
                  accept="image/*"
                  @change="handlePassportChange"
                  :class="{ 'border-red-500': errors.passport }"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="passport"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Upload Passport</label
                >
                <p
                  v-if="errors.passport"
                  class="mt-2 text-sm text-red-600 dark:text-red-500"
                >
                  <span class="font-medium">Error:</span> {{ errors.passport }}
                </p>
              </div>

              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="file"
                  name="nida_file"
                  id="nida_file"
                  accept="application/pdf"
                  @change="handleNidaFileChange"
                  :class="{ 'border-red-500': errors.nida_file }"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="nida_file"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Upload NIDA PDF</label
                >
                <p
                  v-if="errors.nida_file"
                  class="mt-2 text-sm text-red-600 dark:text-red-500"
                >
                  <span class="font-medium">Error:</span> {{ errors.nida_file }}
                </p>
              </div>

              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  v-model="formData.password"
                  :class="{ 'border-red-500': errors.password }"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="password"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Password</label
                >
                <p
                  v-if="errors.password"
                  class="mt-2 text-sm text-red-600 dark:text-red-500"
                >
                  <span class="font-medium">Error:</span> {{ errors.password }}
                </p>
              </div>

              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="repeated_password"
                  id="repeated_password"
                  v-model="formData.repeated_password"
                  :class="{ 'border-red-500': errors.repeated_password }"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="repeated_password"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Repeat Password</label
                >
                <p
                  v-if="errors.repeated_password"
                  class="mt-2 text-sm text-red-600 dark:text-red-500"
                >
                  <span class="font-medium">Error:</span>
                  {{ errors.repeated_password }}
                </p>
              </div>
            </div>

            <div class="flex justify-center">
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center md:max-w-80"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div
          class="hidden md:flex md:w-1/2 lg:w-1/3 flex-col justify-center items-center"
        >
          <img :src="family_image" alt="estate soko" class="w-full h-auto" />
        </div>
      </div>
    </section>

    <div
      v-if="state.isModalVisible"
      tabindex="-1"
      class="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            @click="toggleModal"
            type="button"
            class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>

            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-4 md:p-5 text-center">
            <svg
              class="w-12 h-12 text-green-500 mx-auto mb-4"
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
                stroke-width="2.0"
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <h3
              class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
            >
              {{ responseMessage }}
            </h3>
            <button
              @click="toggleModal"
              type="button"
              class="w-full text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center justify-center"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <section class="bg-slate-950 p-4">
      <FooterVue />
    </section>

    <section class="bg-slate-700 p-4">
      <CopyRightVue />
    </section>
  </div>
</template>

<script lang="js">
import useUserApi from '@/api/user';
import CopyRightVue from '@/components/CopyRight.vue';
import FooterVue from '@/components/Footer.vue';
import TopEstateNavVue from '@/components/TopEstateNav.vue';
import useNavigationFunctions from '@/utils/nav-functions';
import family_image from "@/assets/family.png";
import { reactive, ref } from 'vue';
import { defineComponent, onMounted } from 'vue';
import { initFlowbite } from 'flowbite';


export default defineComponent({
  name: "Registration",
  components: { TopEstateNavVue, FooterVue, CopyRightVue },
  setup() {
    const { navigateToAuth } = useNavigationFunctions();
    const userserApi = useUserApi();

    // Reactive form data and errors
    const formData = reactive({
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      company: "",
      birth_date: "",
      nida_number: "",
      passport: null,
      nida_file: null,
      password: "",
      repeated_password: "",
    });

    const state = reactive({
      isModalVisible: false,
    });

    const responseMessage = ref("");

    const errors = reactive({
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      company: "",
      birth_date: "",
      nida_number: "",
      password: "",
      repeated_password: "",
      passport: "",
      nida_file: "",
    });

    // Regex patterns for validation
    const nidaRegex = /^\d{8}-\d{5}-\d{5}-\d{2}$|^\d{17}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneNumberRegex =
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

    const resetForm = () => {
      formData.first_name = "";
      formData.last_name = "";
      formData.email = "";
      formData.phone_number = "";
      formData.company = "";
      formData.birth_date = "";
      formData.nida_number = "";
      formData.passport = null;
      formData.nida_file = null;
      formData.password = "";
      formData.repeated_password = "";
    };
    // Form submission handler

    const submitForm = async () => {
      if (validateForm()) {
        const { success, message, validationError } =
          await userserApi.createAccount({
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            phone: formData.phone_number,
            birth_date: formData.birth_date,
            nida_number: formData.nida_number,
            password: formData.password,
            company: formData.company,
            passport: formData.passport,
            nida_file: formData.nida_file,
          });

        if (success) {
          responseMessage.value = message;
          toggleModal();
          resetForm();
        } else if (validationError) {
          errors.first_name = validationError.first_name
            ? validationError.first_name[0]
            : "";
          errors.last_name = validationError.last_name
            ? validationError.last_name[0]
            : "";
          errors.email = validationError.email ? validationError.email[0] : "";
          errors.phone_number = validationError.phone
            ? validationError.phone[0]
            : "";
          errors.company = validationError.company
            ? validationError.company[0]
            : "";
          errors.birth_date = validationError.birth_date
            ? validationError.birth_date[0]
            : "";
          errors.nida_number = validationError.nida_number
            ? validationError.nida_number[0]
            : "";
          errors.password = validationError.password
            ? validationError.password[0]
            : "";
          errors.passport = validationError.passport
            ? validationError.passport[0]
            : "";
          errors.nida_file = validationError.nida_file
            ? validationError.nida_file[0]
            : "";
        } else {
          console.error("Failed to create account:", message);
        }
      }
    };

    const toggleModal = () => {
      state.isModalVisible = !state.isModalVisible;
    };

    // Form validation logic
    const validateForm = () => {
      // Validate all required fields
      errors.first_name =
        formData.first_name.trim() === "" ? "First Name is required" : "";
      errors.last_name =
        formData.last_name.trim() === "" ? "Last Name is required" : "";
      errors.email = formData.email.trim() === "" ? "Email is required" : "";
      errors.phone_number =
        formData.phone_number.trim() === "" ? "Phone Number is required" : "";
      errors.birth_date =
        formData.birth_date.trim() === "" ? "Birth Date is required" : "";
      errors.nida_number =
        formData.nida_number.trim() === "" ? "Nida number is required" : "";
      errors.password =
        formData.password.trim() === "" ? "Password is required" : "";
      errors.repeated_password =
        formData.repeated_password.trim() === ""
          ? "Repeated password is required"
          : "";

      errors.passport =
        formData.passport === null ? "Passport is required" : "";

      errors.nida_file =
        formData.nida_file === null ? "NIDA File is required" : "";

      // Validate password match
      if (formData.password.trim() !== formData.repeated_password.trim()) {
        errors.repeated_password = "Passwords do not match";
        return;
      }

      // Validate regex patterns
      if (formData.nida_number && !nidaRegex.test(formData.nida_number)) {
        errors.nida_number =
          "Invalid NIDA format. Example: 20240323-34564-00001-34";
      }

      if (formData.password && !passwordRegex.test(formData.password)) {
        errors.password =
          "Password must contain 8-15 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character (@.#$%*?&)";
      }

      if (formData.email && !emailRegex.test(formData.email)) {
        errors.email = "Invalid email format";
      }

      if (
        formData.phone_number &&
        !phoneNumberRegex.test(formData.phone_number)
      ) {
        errors.phone_number =
          "Invalid phone number format. Example: 0741234567";
      }

      return (
        !errors.first_name &&
        !errors.last_name &&
        !errors.email &&
        !errors.phone_number &&
        !errors.birth_date &&
        !errors.nida_number &&
        !errors.password &&
        !errors.repeated_password &&
        !errors.passport &&
        !errors.nida_file
      );
    };

    // File input handlers
    const handlePassportChange = (event) => {
      const input = event.target;
      formData.passport = input.files ? input.files[0] : null;
    };

    const handleNidaFileChange = (event) => {
      const input = event.target;
      formData.nida_file = input.files ? input.files[0] : null;
    };

    onMounted(() => {
      initFlowbite();
    });

    return {
      navigateToAuth,
      formData,
      errors,
      submitForm,
      handleNidaFileChange,
      handlePassportChange,
      responseMessage,
      toggleModal,
      state,
    };
  },
  data() {
    return { family_image };
  },
});
</script>
