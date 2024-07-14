<template>
  <div class="relative w-full overflow-hidden">
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
      class="w-full h-[350px]"
    >
      <swiper-slide
        v-for="(member, index) in TEAM"
        :key="index"
        class="swiper-slide flex justify-center items-center bg-transparent relative"
        :style="{ width: '350px' }"
      >
        <div
          class="border bg-blue-700 border-gray-200 rounded-lg rounded-tl-3xl w-full h-full relative flex flex-col shadow-md"
          :style="{
            borderTopLeftRadius: '30px',
            borderTopRightRadius: '10px',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
          }"
        >
          <img
            :src="member.clientImageUrl"
            :alt="member.name"
            class="w-12 h-12 rounded-full border-2 border-white"
            :style="{
              position: 'absolute',
              bottom: '6px',
              left: '20px',
              zIndex: '1px',
            }"
          />

          <div
            class="bg-white p-5 rounded-b-lg border-t border-gray-200 flex flex-col justify-between h-full mt-3 rounded-tl-3xl"
          >
            <div class="flex-1">
              <svg
                class="w-[48px] h-[48px] text-gray-800 dark:text-white"
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
                  d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"
                />
              </svg>

              <h5 class="text-lg font-bold text-center text-blue-500">
                {{ member.name }}
              </h5>
              <p class="text-center text-gray-700">{{ member.work }}</p>
              <p class="text-center text-gray-500 mt-2 line-clamp-4">
                {{ member.comment }}
              </p>
            </div>
            <div class="flex justify-end mt-4">
              <svg
                class="w-[48px] h-[48px] text-gray-800 dark:text-white"
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
                  d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"
                />
              </svg>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import { SwiperSlide, Swiper } from "swiper/vue";
import { Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import HardCodedData from "../store/hardcoded-data";

export default defineComponent({
  name: "TeamAutoSlider",
  components: {
    Swiper,
    SwiperSlide,
    HardCodedData,
  },
  setup() {
    const { TEAM } = HardCodedData();

    return { TEAM, modules: [Autoplay, Keyboard] };
  },
  data() {},
});
</script>
