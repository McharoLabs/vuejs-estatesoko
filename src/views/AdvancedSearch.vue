<template>
  <div class="flex flex-col min-h-screen">
    <TopEstateNavVue />

    <div class="flex-grow">
      <section class="p-10" id="search"></section>

      <section class="max-w-screen-xl mx-auto px-4 w-full">
        <div
          class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8"
        >
          <div class="w-full sm:w-2/3 md:w-72">
            <SegmentedControl
              :options="categoryOptions"
              v-model="selected_category"
            />
          </div>
          <div class="mt-5">
            <form class="w-full">
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                  <label for="region_select" class="sr-only"
                    >Select Region</label
                  >
                  <select
                    id="region_select"
                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    v-model="selected_property_type"
                  >
                    <option value="">Select property type</option>
                    <option
                      v-for="option in propertyTypeOptions"
                      :key="option"
                      :value="option"
                    >
                      {{ option }}
                    </option>
                  </select>
                </div>

                <div class="relative z-0 w-full mb-5 group">
                  <label for="region_select" class="sr-only"
                    >Select Region</label
                  >
                  <select
                    id="region_select"
                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    v-model="selected_region_name"
                  >
                    <option value="">Select a region</option>
                    <option
                      v-for="region in regions"
                      :key="region.region_id"
                      :value="region.name"
                    >
                      {{ region.name }}
                    </option>
                  </select>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <label for="district_select" class="sr-only"
                    >Select District</label
                  >
                  <select
                    id="district_select"
                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    v-model="selected_district_name"
                  >
                    <option value="">Select a district</option>
                    <option
                      v-for="district in districts"
                      :key="district.district_id"
                      :value="district.name"
                    >
                      {{ district.name }}
                    </option>
                  </select>
                </div>

                <div class="relative z-0 w-full mb-5 group">
                  <label for="street_select" class="sr-only"
                    >Select Street</label
                  >
                  <select
                    id="street_select"
                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    v-model="selected_street_name"
                  >
                    <option value="">Select a street</option>
                    <option
                      v-for="street in streets"
                      :key="street.name"
                      :value="street.name"
                    >
                      {{ street.name }}
                    </option>
                  </select>
                </div>

                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="min_price"
                    id="min_price"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    v-model="min_price"
                    @input="handleNumericInput('min_price')"
                  />
                  <label
                    for="min_price"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Minimum Price
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="max_price"
                    id="max_price"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    v-model="max_price"
                    @input="handleNumericInput('max_price')"
                  />
                  <label
                    for="max_price"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Maximum Price
                  </label>
                </div>

                <button
                  @click.prevent="fetchProperties()"
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none flex flex-row gap-3 justify-center items-center"
                >
                  <p>Search</p>

                  <svg
                    class="w-6 h-6"
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
                      stroke-width="2"
                      d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <!-- PROPERTY DISPLAY -->
      <section class="max-w-screen-xl mx-auto p-4" id="search-display">
        <div class="mb-5">
          <h2 class="text-3xl font-semibold">Your Search List</h2>
          <p>{{ count }} Listings</p>
        </div>

        <div v-if="!properties">
          <CardPlaceholderVue />
        </div>

        <div
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
                  {{ property.price }} {{ property.price_unit }}
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
        </div>

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
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import TopEstateNavVue from "@/components/TopEstateNav.vue";
import SegmentedControl from "@/components/SegmentedControl.vue";
import FooterVue from "@/components/Footer.vue";
import CopyRightVue from "@/components/CopyRight.vue";
import CardPlaceholderVue from "@/components/CardPlaceholder.vue";
import { CATEGORY_ENUM, PROPERTY_TYPE_ENUM } from "@/lib/enum";
import useLocation from "@/api/location";
import useUrlFormatter from "@/utils/url-formatter";
import { onBeforeRouteUpdate } from "vue-router";
import useSearchPropertiesStore from "@/store/properties-search-store";

export default defineComponent({
  name: "AdvancedSearch",
  components: {
    TopEstateNavVue,
    SegmentedControl,
    FooterVue,
    CopyRightVue,
    CardPlaceholderVue,
  },
  setup() {
    const { getDistrictStreets, getRegionDistricts, getRegions } =
      useLocation();
    const searchPropertiesStore = useSearchPropertiesStore();
    const { getImageUrl } = useUrlFormatter();

    const regions = ref(null);
    const districts = ref(null);
    const streets = ref(null);

    const selected_category = ref(CATEGORY_ENUM.SALE);
    const selected_region_name = ref("");
    const selected_district_name = ref("");
    const selected_street_name = ref("");
    const selected_property_type = ref("");
    const min_price = ref("");
    const max_price = ref("");

    const categoryOptions = Object.values(CATEGORY_ENUM);
    const propertyTypeOptions = Object.values(PROPERTY_TYPE_ENUM);

    const properties = computed(() => searchPropertiesStore.getProperties);
    const next = computed(() => searchPropertiesStore.getNext);
    const previous = computed(() => searchPropertiesStore.getPrevious);
    const count = computed(() => searchPropertiesStore.getCount);

    onMounted(async () => {
      const { success, data } = await getRegions();
      if (success && data) {
        regions.value = data;
      }
      // if (typeof searchPropertiesStore.getCount === "undefined") {
      //   refreshPage();
      // }

      if (searchPropertiesStore.getProperties.length === 0) {
        await fetchProperties();
      }

      scrollToSection("search");
    });

    const fetchProperties = async (url = null) => {
      const region = regions.value?.find(
        (r) => r.name === selected_region_name.value
      );
      const district = districts.value?.find(
        (d) => d.name === selected_district_name.value
      );
      const street = streets.value?.find(
        (s) => s.name === selected_street_name.value
      );

      const searchParams = {
        propertyType: selected_property_type.value,
        category: selected_category.value,
        regionId: region?.region_id ?? "",
        districtId: district?.district_id ?? "",
        streetId: street?.street_id ?? "",
        initialPrice: min_price.value,
        endPrice: max_price.value,
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

    watch(selected_region_name, async (newVal) => {
      if (newVal) {
        const region = regions.value?.find(
          (r) => r.name === newVal
        );
        if (region) {
          const { success, data } = await getRegionDistricts(region.region_id);
          if (success && data) {
            districts.value = data;
            streets.value = null;
            selected_district_name.value = "";
            selected_street_name.value = "";
          }
        }
      }
    });

    const handleNumericInput = (field) => {
      const value = field === 'min_price' ? min_price : max_price;
      value.value = value.value.replace(/\D/g, '');
    };

    watch(selected_district_name, async (newVal) => {
      if (newVal) {
        const district = districts.value?.find(
          (d) => d.name === newVal
        );
        if (district) {
          const { success, data } = await getDistrictStreets(
            district.district_id
          );
          if (success && data) {
            streets.value = data;
            selected_street_name.value = "";
          }
        }
      }
    });

    return {
      regions,
      districts,
      streets,
      selected_region_name,
      selected_district_name,
      selected_street_name,
      selected_category,
      selected_property_type,
      min_price,
      max_price,
      categoryOptions,
      propertyTypeOptions,
      fetchProperties,
      handleNumericInput,
      fetchNext,
      fetchPrevious,
      properties,
      getImageUrl,
      next,
      previous,
      count,
    };
  },
});
</script>
