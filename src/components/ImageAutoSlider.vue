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
        class="w-full "
      >
        <swiper-slide
          v-for="(image, index) in images"
          :key="index"
          class="swiper-slide flex justify-center items-center"
          style="width: 320px; height: 250px;"
        >
          <img
            :src="getImageUrl(image)"
            :alt="image"
            class="w-full h-full object-cover rounded-lg shadow"
          />
        </swiper-slide>
      </swiper>
    </div>
  </template>

<script lang="js">
  import { SwiperSlide, Swiper } from "swiper/vue";
  import { Autoplay, Keyboard } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/autoplay";
  import "swiper/css/keyboard";

  import { defineComponent, toRefs } from "vue";
import useUrlFormatter from "@/utils/url-formatter";

  export default defineComponent({
    name: "ImageAutoSlider",
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      images: {
        type: Array,
        required: true,
      },
    },
    setup(props) {
      const { images } = toRefs(props);
      const {getImageUrl} = useUrlFormatter();

      return {
        images,
        getImageUrl,
        modules: [Autoplay, Keyboard],
      };
    },
  });
</script>


