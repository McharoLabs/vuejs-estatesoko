<template>
  <div class="text-white divide-y">
    <div class="max-w-screen-xl mx-auto">
      <h2 class="text-3xl font-bold text-center my-6">About Us</h2>
      <p class="text-md text-center mb-3">
        EstateSoko is a new Free Online Selling, Buying and Renting Website in
        Tanzania that offers FREE advertising and search access for real estate
        needs. It provides a unique opportunity for real estate service
        providers to connect with customers in an innovative and affordable way.
        Save Money, Time and Energy with EstateSoko, the ultimate one stop
        centre for property services in Tanzania. Visit the website or app for
        information and entertainment from forums, blogs, and interactive
        advertisements. Special features include a Search Bar with location,
        property category, and cost range filters, as well as free access to
        offers from property owners such as furniture sellers, decorators,
        conferences, and venues.
      </p>
    </div>

    <div class="max-w-screen-xl mx-auto">
      <h2 class="text-3xl font-bold text-center my-6">Contact us</h2>
      <p class="text-md text-center">
        Leave your email and we will get back to you within 24 hours
      </p>

      <div class="mt-8 flex flex-col gap-3 sm:flex-row">
        <div
          class="items-start justify-center text-white grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:w-1/3 md:w-1/2 lg:w-1/2 xl:w-2/3"
        >
          <!-- Phone -->
          <div>
            <svg
              class="w-[48px] h-[48px]"
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
                d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
              />
            </svg>
            <div>
              <p class="font-medium text-gray-600">Phone</p>
              <a
                :href="'tel:' + COMPANY_INFORMATION.PHONE"
                class="text-blue-500 hover:underline"
                >{{ COMPANY_INFORMATION.PHONE }}</a
              >
            </div>
          </div>

          <!-- Email -->
          <div>
            <svg
              class="w-[48px] h-[48px]"
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
                d="M18 13.07v1.93a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1.93l5-3.45 5 3.45ZM6 9l6 4 6-4"
              />
            </svg>
            <div>
              <p class="font-medium text-gray-600">Email</p>
              <a
                :href="'mailto:' + COMPANY_INFORMATION.EMAIL"
                class="text-blue-500 hover:underline"
                >{{ COMPANY_INFORMATION.EMAIL }}</a
              >
            </div>
          </div>

          <!-- Address -->
          <div>
            <svg
              class="w-[48px] h-[48px]"
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
                d="M13 2L6 6V18l7-4 7 4V6l-7-4Z"
              />
            </svg>
            <div>
              <p class="font-medium text-gray-600">Address</p>
              <p class="">
                {{ COMPANY_INFORMATION.LOCATION }}
              </p>
            </div>
          </div>

          <!-- Working hours -->
          <div>
            <svg
              class="w-[48px] h-[48px]"
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
                d="M12 6a9 9 0 1 0 0 12m-7.333-3.667L7.667 16 16 8.333M7.667 16H16m-7.333 2v-2.666m4.667 0h-2"
              />
            </svg>
            <div>
              <p class="font-medium text-gray-600">Working hours</p>
              <p class="">
                {{ COMPANY_INFORMATION.WORKING_HOURS }}
              </p>
            </div>
          </div>
        </div>

        <div
          class="text-white p-4 sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/3 border border-dashed mb-5 rounded-lg"
        >
          <h2 class="text-xl text-center">Send Us Email</h2>
          <form class="mb-6">
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm font-medium"
                >Your email</label
              >
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
            <div class="mb-6">
              <label for="subject" class="block mb-2 text-sm font-medium"
                >Subject</label
              >
              <input
                type="text"
                id="subject"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div class="mb-6">
              <label for="message" class="block mb-2 text-sm font-medium"
                >Your message</label
              >
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="max-w-screen-xl mx-auto">
      <h2 class="text-3xl font-bold text-center my-6">Social Links</h2>
      <p class="text-md text-center">
        Follow us on social media for updates and more!
      </p>
      <div class="flex justify-center space-x-4 mt-4">
        <!-- Instagram -->
        <a
          :href="COMPANY_INFORMATION.INSTAGRAM_LINK"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-500 hover:underline"
          >Instagram</a
        >
        <!-- Facebook -->
        <a
          :href="COMPANY_INFORMATION.FACEBOOK_LINK"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-500 hover:underline"
          >Facebook</a
        >
        <!-- Pinterest -->
        <a
          :href="COMPANY_INFORMATION.PINTEREST_LINK"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-500 hover:underline"
          >Pinterest</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import { COMPANY_INFORMATION } from "../lib/enum";

export default defineComponent({
  name: "Footer",
  components: {},
  setup() {},
  data() {
    return { COMPANY_INFORMATION };
  },
});
</script>
