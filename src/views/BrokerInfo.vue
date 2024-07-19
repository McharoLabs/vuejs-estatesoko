<template>
  <div class="flex flex-col min-h-screen">
    <TopEstateNavVue />
    <section class="p-10" id="agents"></section>
    <div class="flex-grow">
      <section class="max-w-screen-xl mx-auto px-4 mb-5" id="broker-info">
        <div class="p-4 bg-white shadow-lg rounded-lg">
          <div v-if="broker" class="flex flex-col md:flex-row items-center">
            <img
              :src="getImageUrl(broker.passport)"
              alt="Broker Passport"
              class="w-32 h-32 rounded-full border-4 border-blue-700 mb-4 md:mb-0 md:mr-4"
            />
            <div class="flex-1">
              <h2 class="text-2xl font-bold text-gray-900">
                {{ broker.first_name }} {{ broker.last_name }}
              </h2>
              <p class="text-gray-600">{{ broker.language }}</p>
              <p class="mt-2">{{ broker.comment }}</p>
            </div>
          </div>
          <div v-if="broker" class="mt-4">
            <h3 class="text-xl font-semibold text-gray-800">About Me</h3>
            <p class="text-gray-700 mt-2">{{ broker.about_me }}</p>
          </div>
          <div v-if="broker" class="mt-4">
            <h3 class="text-xl font-semibold text-gray-800">
              Contact Information
            </h3>
            <div class="flex flex-col md:flex-row mt-2">
              <div class="flex-1">
                <p class="text-gray-600">
                  <strong>Phone:</strong> {{ broker.phone }}
                </p>
                <p class="text-gray-600">
                  <strong>Email:</strong> {{ broker.email }}
                </p>
              </div>
              <div class="flex-1 mt-2 md:mt-0">
                <p class="text-gray-600">
                  <strong>Company:</strong> {{ broker.company || "N/A" }}
                </p>
              </div>
            </div>
          </div>
          <div v-if="broker" class="mt-4">
            <h3 class="text-xl font-semibold text-gray-800">Regions</h3>
            <ul class="list-disc list-inside text-gray-700 mt-2">
              <li v-for="region in broker.regions" :key="region">
                {{ region }}
              </li>
            </ul>
          </div>
        </div>
      </section>

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
import FooterVue from "@/components/Footer.vue";
import CopyRightVue from "@/components/CopyRight.vue";
import useUserApi from "@/api/user";
import useFormatter from "@/utils/formatter";
import { ref, watch } from "vue";
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import useNavigationFunctions from "@/utils/nav-functions";
import { CATEGORY_ENUM, PROPERTY_TYPE_ENUM } from "@/lib/enum";
import useLocation from "@/api/location";

export default defineComponent({
  name: "BrokerInfo",
  components: {TopEstateNavVue,FooterVue,CopyRightVue},
  setup() {
    const route = useRoute();
    const { getBroker, formatNumberWithCommas } = useUserApi();
    const { getImageUrl } = useFormatter();
    const { navigateToPropertyInfo } = useNavigationFunctions();
    const { getDistrictStreets, getRegionDistricts, getRegions } =
      useLocation();

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

    const broker = ref(null);
    const properties = ref(null);

    onMounted(async () => {
      const brokerId = route.params.id;
      const brokerResponse = await getBroker({ user_id: brokerId });

      if (brokerResponse.success) {
        broker.value = brokerResponse.data;
      }

      const { success, data } = await getRegions();
      if (success && data) {
        regions.value = data;
      }
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

    };


    const fetchNext = async () => {
      // if (next.value) {
      //   scrollToSection("search-display");
      //   await fetchProperties(next.value);
      // }
    };

    const fetchPrevious = async () => {
      // if (previous.value) {
      //   scrollToSection("search-display");
      //   await fetchProperties(previous.value);
      // }
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
      broker, getImageUrl,
      navigateToPropertyInfo,
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
      // next,
      // previous,
      // count,
      formatNumberWithCommas,
    };
  },
});
</script>

<style scoped></style>
