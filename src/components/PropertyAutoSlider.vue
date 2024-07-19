<template>
  <div class="relative w-full overflow-hidden">
    <div v-if="properties.length">
      <swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="10"
        :autoplay="{
          delay: 10000,
          disableOnInteraction: false,
        }"
        :speed="1000"
        :keyboard="{
          enabled: true,
        }"
        :grabCursor="true"
        class="w-full h-[450px]"
      >
        <swiper-slide
          v-for="(property, index) in properties"
          :key="index"
          class="swiper-slide flex justify-center items-center"
          style="width: 350px"
        >
          <div
            class="bg-white border border-gray-200 rounded-lg shadow w-full h-[100%] relative flex flex-col"
          >
            <img
              class="rounded-t-lg h-[200px] w-full"
              :src="getImageUrl(property.image_path[0])"
              :alt="property.title"
            />

            <span
              class="bg-blue-700 absolute top-4 right-0 shadow p-2 m-2 -rotate-45 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded"
              >{{ property.category.toUpperCase() }}</span
            >

            <div class="p-5 flex-1 flex flex-col justify-between">
              <h5
                class="text-lg font-bold tracking-tight text-gray-900 line-clamp-1"
              >
                {{ property.property_type }}
              </h5>

              <p class="text-md font-bold text-gray-900">
                {{ formatNumberWithCommas(property.price) }}
                {{ property.price_unit }}
                {{
                  property.payment_period ? `/ ${property.payment_period}` : ""
                }}
              </p>
              <p class="text-gray-700 text-md mb-1 line-clamp-3">
                {{ property.description }}
              </p>
              <div
                class="text-gray-600 mb-3 flex items-center animate-pulse text-sm"
              >
                <svg
                  class="w-6 h-6 text-gray-800 mr-2"
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
                    d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                  />
                </svg>
                <p class="line-clamp-1">
                  {{ property.location.region.name }},
                  {{ property.location.district.name }},
                  {{ property.location.name }}
                </p>
              </div>

              <div class="mt-auto">
                <a
                  @click.prevent="navigateToPropertyInfo(property.property_id)"
                  href=""
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 animate-bounce"
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
                </a>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div v-else>
      <swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="10"
        :autoplay="{
          delay: 10000,
          disableOnInteraction: false,
        }"
        :speed="1000"
        :keyboard="{
          enabled: true,
        }"
        :grabCursor="true"
        class="w-full "
      >
        <swiper-slide
          v-for="n in 4"
          :key="n"
          class="swiper-slide flex justify-center items-center"
          style="width: 350px"
        >
          <div
            role="status"
            class="bg-white border border-gray-200 rounded-lg shadow w-full h-[100%] relative flex flex-col p-4"
          >
            <div
              class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"
            >
              <svg
                class="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path
                  d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
                />
                <path
                  d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
                />
              </svg>
            </div>
            <div
              class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
            ></div>
            <div
              class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"
            ></div>
            <div
              class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"
            ></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div class="flex items-center mt-4">
              <svg
                class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                />
              </svg>
              <div>
                <div
                  class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"
                ></div>
                <div
                  class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
                ></div>
              </div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="js">
import { SwiperSlide, Swiper } from "swiper/vue";
import { Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/keyboard";

import { computed, defineComponent, onMounted } from "vue";
import { onBeforeRouteUpdate } from "vue-router";

import useFormatter from "../utils/formatter";
import { usePropertiesStore } from "../store/propertiesStore";
import useNavigationFunctions from "@/utils/nav-functions";

export default defineComponent({
  name: "PropertyCarousel",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const propertiesStore = usePropertiesStore();
    const { getImageUrl, formatNumberWithCommas } = useFormatter();
    const { navigateToPropertyInfo } = useNavigationFunctions();

    const properties = computed(() => propertiesStore.getProperties);

    onMounted(async () => {
      if (!propertiesStore.getProperties) {
        return;
      }
      if (propertiesStore.getProperties.length === 0) {
        await getProperties();
      }
    });

    const getProperties = async () => {
      const response = await propertiesStore.fetchProperties();
      if (!response.success) {
        console.error(response.message);
      }
    };

    onBeforeRouteUpdate(async () => {
      await getProperties();
    });

    return {
      properties,
      getImageUrl,
      modules: [Autoplay, Keyboard],
      navigateToPropertyInfo,
      formatNumberWithCommas,
    };
  },
});
</script>
