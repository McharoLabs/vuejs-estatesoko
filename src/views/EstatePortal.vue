<template>
  <div class="flex flex-col min-h-screen">
    <TopEstateNavVue />
    <div class="flex-grow">
      <section
        :style="{ backgroundImage: `url(${top_image})` }"
        class="bg-center bg-cover bg-no-repeat bg-gray-700 bg-blend-multiply"
      >
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1
            class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
          >
            Find Your Dream Property with EstateSoko
          </h1>
          <p
            class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"
          >
            Explore the best properties in your desired locations with
            EstateSoko. We offer a wide range of houses, apartments, and
            commercial spaces tailored to your needs.
          </p>
          <div
            class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
          >
            <a
              @click.prevent="navigateToAdvancedSearch()"
              href=""
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Start Your Search
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
            </a>
            <a
              href="#"
              class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>

      <!-- PROPERTY DISPLAY -->
      <section class="max-w-screen-xl mx-auto p-4">
        <h2 class="text-3xl font-bold text-center my-8">Featured Properties</h2>
        <PropertyAutoSliderVue />
      </section>

      <section
        :style="{ backgroundImage: `url(${middle_image})` }"
        class="bg-center bg-cover bg-no-repeat bg-gray-700 bg-blend-multiply"
      >
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24">
          <h1
            class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
          >
            What Makes Us The Preferred Choice
          </h1>
          <p
            class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"
          >
            At The Estate Soko, we're your premier real estate choice. With a
            diverse portfolio, experienced team, and personalized service, we
            prioritize satisfaction. Transparency, integrity, and innovation
            define our approach. Choose us for reliability, quality, and
            exceptional service.
          </p>
          <div
            class="flex flex-col space-y-4 items-center md:flex-row lg:flex-row text-white"
          >
            <div class="grid grid-cols-2 gap-2 md:w-2/3">
              <div class="flex flex-col items-center w-[200px] p-4">
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
                    d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"
                  />
                </svg>

                <p>Maximum Choices</p>
                <p>
                  extensive properties, tailored solutions, personalized service
                  excellence.
                </p>
              </div>
              <div class="flex flex-col items-center w-[200px] p-4">
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
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                  />
                </svg>

                <p>Buyers Trust Us</p>
                <p>
                  reliability, transparency, and exceptional service delivery
                </p>
              </div>
              <div class="flex flex-col items-center w-[200px] p-4">
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
                    d="M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z"
                  />
                </svg>
                <p>Expert Guidance</p>
                <p>Trusted advice, industry knowledge, unparalleled support.</p>
              </div>
              <div class="flex flex-col items-center w-[200px] p-4">
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
                    d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"
                  />
                </svg>

                <p>Sellers Prefer Us</p>
                <p>proven results, dedicated service, and market expertise.</p>
              </div>
            </div>

            <div
              class="bg-white rounded-lg text-gray-700 p-4 w-full sm:w-2/3 md:w-1/3"
            >
              <p class="font-semibold text-2xl text-black">What Makes Us</p>
              <p>
                Buying or selling your home is up there with all of those other
                big decisions we make in our lifetimes. It is a process that
                should be comforting and filled with excitement. Soko is here to
                ensure that our approach is educational, jargon-free, and fun.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white">
        <div class="container mx-auto p-0 max-w-screen-xl">
          <div class="flex flex-col p-4">
            <h2 class="text-2xl text-center font-bold">We Are Here For You</h2>
            <p class="text-md text-center text-gray-500 leading-tight">
              If you are looking for a new home, an investment property to
              <br />
              explore the area will help you
              <br />
              find exactly what you are looking for
            </p>
            <div class="my-4"></div>
            <div class="grid grid-cols-2 gap-4 justify-evenly items-center">
              <div
                class="w-full p-4 shadow-md bg-gray-100 hover:bg-gray-200 rounded-md"
              >
                <div class="flex flex-col items-center justify-center gap-2">
                  <svg
                    class="w-8 h-8 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                    />
                  </svg>
                  <h3 class="text-xl font-semibold">180+</h3>
                  <p>Property Location</p>
                </div>
              </div>

              <div
                class="w-full p-4 shadow-md bg-gray-100 hover:bg-gray-200 rounded-md"
              >
                <div class="flex flex-col items-center justify-center gap-2">
                  <svg
                    class="w-8 h-8 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-width="2"
                      d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                    />
                  </svg>
                  <h3 class="text-xl font-semibold">100+</h3>
                  <p>Professional Agents</p>
                </div>
              </div>

              <div
                class="w-full p-4 shadow-md bg-gray-100 hover:bg-gray-200 rounded-md"
              >
                <div class="flex flex-col items-center justify-center gap-2">
                  <svg
                    class="w-8 h-8 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"
                    />
                  </svg>
                  <h3 class="text-xl font-semibold">250+</h3>
                  <p>Property For Sale</p>
                </div>
              </div>

              <div
                class="w-full p-4 shadow-md bg-gray-100 hover:bg-gray-200 rounded-md"
              >
                <div class="flex flex-col items-center justify-center gap-2">
                  <svg
                    class="w-8 h-8 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                    />
                  </svg>
                  <h3 class="text-xl font-semibold">3200+</h3>
                  <p>Property For Rent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TEAM -->
      <section class="bg-white pt-4 px-4 pb-10">
        <div class="max-w-screen-xl mx-auto">
          <div>
            <h2 class="text-3xl font-bold text-center my-5">Meet Our Team</h2>
            <p class="text-md text-center my-5">
              Get to know the dedicated professionals behind Estatesoko. Our
              team is committed to revolutionizing the real estate market in
              Tanzania by providing exceptional service and innovative
              solutions. Meet the leaders who drive our vision and ensure
              seamless operations to help you find your dream property with
              confidence.
            </p>
            <TeamAutoSliderVue />
          </div>
        </div>
      </section>
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
import TopEstateNavVue from "@/components/TopEstateNav.vue";
import top_image from "@/assets/dar.jpg";
import middle_image from "@/assets/hm.jpg";
import { defineComponent } from "vue";
import PropertyAutoSliderVue from "@/components/PropertyAutoSlider.vue";
import FooterVue from "@/components/Footer.vue";
import TeamAutoSliderVue from "@/components/TeamAutoSlider.vue";
import CopyRightVue from "@/components/CopyRight.vue";
import useNavigationFunctions from "@/utils/nav-functions";



export default defineComponent({
  name: "EstatePortal",
  components: { TopEstateNavVue, PropertyAutoSliderVue, FooterVue , TeamAutoSliderVue, CopyRightVue},
  setup() {
    const { navigateToAdvancedSearch } = useNavigationFunctions();

    return { navigateToAdvancedSearch };
  },
  data() {
    return {
      top_image,
      middle_image,
    };
  },
});
</script>
