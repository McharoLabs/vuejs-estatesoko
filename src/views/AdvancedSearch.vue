<template>
  <div class="flex flex-col min-h-screen">
    <TopEstateNavVue />

    <div class="flex-grow">
      <section class="p-10" id="search"></section>

      <PropertyFilterForm
        :formData="formData"
        :handleSearch="fetchProperties"
      />

      <!-- PROPERTY DISPLAY -->
      <section class="max-w-screen-xl mx-auto p-4" id="search-display">
        <div class="mb-5">
          <h2 class="text-3xl font-semibold">Your Search List</h2>
          <p>{{ count }} Listings</p>
        </div>

        <CardPlaceholderVue v-if="properties.length === 0" />

        <PropertyCard :properties="properties" v-else />
        <!-- <div
          v-else
          class="grid place-items-center gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          <div
            v-for="(property, index) in properties"
            :key="index"
            class="border border-gray-200 rounded-lg shadow w-full md:w-[350px]"
          >
            <div
              class="bg-white border border-gray-200 rounded-lg shadow w-full h-[450px] relative flex flex-col"
            >
              <img
                class="rounded-t-lg h-[200px] w-full object-cover"
                :src="getImageUrl(property.image_path[0])"
                :alt="property.title"
              />

              <span
                class="bg-blue-700 absolute top-4 right-0 shadow p-2 m-2 -rotate-45 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded"
              >
                {{ property.category.toUpperCase() }}
              </span>

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
                    property.payment_period
                      ? `/ ${property.payment_period}`
                      : ""
                  }}
                </p>
                <p class="text-gray-700 text-md mb-1 line-clamp-3">
                  {{ property.description }}
                </p>
                <div class="text-gray-600 mb-3 flex items-center text-sm">
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
                    @click.prevent="
                      navigateToPropertyInfo(property.property_id)
                    "
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
          </div>
        </div> -->

        <div class="flex flex-col items-center my-4">
          <div class="inline-flex mt-2 xs:mt-0">
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
import { computed, defineComponent, onMounted, reactive } from "vue";
import TopEstateNavVue from "@/components/TopEstateNav.vue";
import SegmentedControl from "@/components/SegmentedControl.vue";
import FooterVue from "@/components/Footer.vue";
import CopyRightVue from "@/components/CopyRight.vue";
import CardPlaceholderVue from "@/components/CardPlaceholder.vue";
import PropertyFilterForm from "@/components/PropertyFilterForm.vue";
import PropertyCard from "@/components/PropertyCard.vue";
import useFormatter from "@/utils/formatter";
import { onBeforeRouteUpdate } from "vue-router";
import useSearchPropertiesStore from "@/store/properties-search-store";
import useNavigationFunctions from "@/utils/nav-functions";
import { useCategoryState } from "@/store/category.state";

export default defineComponent({
  name: "AdvancedSearch",
  components: {
    TopEstateNavVue,
    SegmentedControl,
    FooterVue,
    CopyRightVue,
    CardPlaceholderVue,
    PropertyFilterForm,
    PropertyCard,
  },
  setup() {
    const { getImageUrl, formatNumberWithCommas } = useFormatter();
    const { navigateToPropertyInfo } = useNavigationFunctions();
    const searchPropertiesStore = useSearchPropertiesStore();
    const categoryState = useCategoryState();


    const formData = reactive({
      propertyType: "",
      category: categoryState.getActive,
      regionId: "",
      districtId: "",
      streetId: "",
      initialPrice: "",
      endPrice: "",
    });

    const properties = computed(() => searchPropertiesStore.getProperties);
    const next = computed(() => searchPropertiesStore.getNext);
    const previous = computed(() => searchPropertiesStore.getPrevious);
    const count = computed(() => searchPropertiesStore.getCount);

    onMounted(async () => {
      if (searchPropertiesStore.getProperties.length === 0) {
        await fetchProperties();
      }
      scrollToSection("search");
    });

    const fetchProperties = async (url = null) => {
      const searchParams = {
        ...formData,
        url: url || null,
      };
      await searchPropertiesStore.fetchProperties(searchParams);
    };

    onBeforeRouteUpdate(async () => {
      await fetchProperties();
    });

    const fetchNext = async () => {
      if (next.value) {
        scrollToSection("search-display");
        await fetchProperties(next.value);
      }
    };

    const fetchPrevious = async () => {
      if (previous.value) {
        scrollToSection("search-display");
        await fetchProperties(previous.value);
      }
    };

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return {
      navigateToPropertyInfo,
      fetchProperties,
      fetchNext,
      fetchPrevious,
      properties,
      getImageUrl,
      next,
      previous,
      count,
      formatNumberWithCommas,
      formData,
    };
  },
});
</script>
