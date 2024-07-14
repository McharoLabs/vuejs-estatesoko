<template>
  <div class="flex flex-col min-h-screen">
    <TopEstateNavVue />
    <section class="p-10" id="agents"></section>
    <div class="flex-grow">
      <section
        :style="{ backgroundImage: `url(${top_image})` }"
        class="bg-center bg-cover bg-no-repeat bg-gray-700 bg-blend-multiply"
      >
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-36">
          <h1
            class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
          >
            Discover the Best Brokers at EstateSoko
          </h1>
          <p
            class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"
          >
            At EstateSoko, we pride ourselves on connecting you with top-rated
            real estate brokers who are dedicated to finding the perfect
            property for you. Whether you're looking for a luxurious house, a
            modern apartment, or a strategic commercial space, our expert
            brokers are here to guide you every step of the way. Your dream
            property is within reach, and our experienced team is committed to
            making your property search smooth, successful, and enjoyable.
          </p>
        </div>
      </section>

      <section class="max-w-screen-xl mx-auto px-4" id="broker-display">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 mt-12">
          Meet Our Top Brokers
        </h2>
        <p class="mt-4 text-lg text-gray-700">
          Our team of highly experienced and professional brokers is ready to
          assist you in finding the ideal property that fits your unique needs
          and preferences. Explore their profiles and choose the best partner
          for your real estate journey.
        </p>

        <div v-if="!brokers">
          <CardPlaceholderVue />
        </div>

        <div
          class="grid place-items-center gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          <div v-for="(broker, index) in brokers" :key="index" class="mt-8">
            <div
              class="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
            >
              <img
                class="rounded-t-lg"
                :src="getImageUrl(broker.passport)"
                alt=""
                style="width: 100%; height: 250px; object-fit: cover"
              />
              <div class="p-5">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1"
                >
                  {{ broker.first_name }}{{ " " }}{{ broker.last_name }}
                </h5>

                <div style="height: 50px">
                  <p
                    class="font-normal text-gray-700 dark:text-gray-400 line-clamp-3"
                  >
                    {{ broker.comment }}
                  </p>
                </div>
              </div>
              <div class="p-5">
                <div class="flex justify-between items-center text-gray-500">
                  <div class="flex space-x-2">
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
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

                    <a :href="'tel:' + broker.phone">{{ broker.phone }}</a>
                  </div>
                  <p
                    class="text-blue-500 cursor-pointer"
                    @click.prevent="navigateToBrokerInfo(broker.userId)"
                  >
                    Click to view
                  </p>
                </div>
              </div>
            </div>
          </div>
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
import { useBrokersStore } from "@/store/brokers";
import top_image from "../assets/hmd.jpg";
import { defineComponent } from "vue";
import TopEstateNavVue from "@/components/TopEstateNav.vue";
import FooterVue from "@/components/Footer.vue";
import CopyRightVue from "@/components/CopyRight.vue";
import CardPlaceholderVue from "@/components/CardPlaceholder.vue";
import useNavigationFunctions from "@/utils/nav-functions";
import useUrlFormatter from "@/utils/url-formatter";
import { computed } from "vue";
import { onMounted } from "vue";
import { onBeforeRouteUpdate } from "vue-router";

export default defineComponent({
  name: "EstatePortal",
  components: { TopEstateNavVue, FooterVue, CopyRightVue, CardPlaceholderVue },
  setup() {
    const brokersStore = useBrokersStore();
    const { navigateToBrokerInfo } = useNavigationFunctions();
    const { getImageUrl } = useUrlFormatter();

    const brokers = computed(() => brokersStore.getBrokers);
    const next = computed(() => brokersStore.getNext);
    const previous = computed(() => brokersStore.getPrevious);

    onMounted(async () => {
      if (brokersStore.getBrokers.length === 0) {
        await getBrokers();
      }

      scrollToSection("agents");
    });

    const getBrokers = async () => {
      const response = await brokersStore.fetchBrokers();
      if (!response.success) {
        console.error(response.message);
      }
    };

    onBeforeRouteUpdate(async () => {
      await getBrokers();
    });

    const fetchNext = async () => {
      if (next.value) {
        const response = await brokersStore.fetchBrokers(next.value);
        if (!response.success) {
          console.error(response.message);
        }
        scrollToSection("broker-display");
      }
    };

    const fetchPrevious = async () => {
      if (previous.value) {
        const response = await brokersStore.fetchBrokers(previous.value);
        if (!response.success) {
          console.error(response.message);
        }

        scrollToSection("broker-display");
      }
    };

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return {
      brokers,
      fetchNext,
      fetchPrevious,
      next,
      previous,
      getImageUrl,
      navigateToBrokerInfo,
    };
  },
  data() {
    return { top_image };
  },
});
</script>
