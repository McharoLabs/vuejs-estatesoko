<template>
  <section class="max-w-screen-xl mx-auto px-4 w-full">
    <div
      class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8"
    >
      <div class="w-full sm:w-2/3 md:w-72">
        <SegmentedControl
          :options="categoryOptions"
          v-model="formData.category"
        />
      </div>
      <div class="mt-5">
        <form class="w-full">
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <label for="region_select" class="sr-only">Select Region</label>
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
              <label for="region_select" class="sr-only">Select Region</label>
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
              <label for="street_select" class="sr-only">Select Street</label>
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
                name="initialPrice"
                id="initialPrice"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                v-model="formData.initialPrice"
                @input="handleNumericInput('initialPrice')"
              />
              <label
                for="initialPrice"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Minimum Price
              </label>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="endPrice"
                id="endPrice"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                v-model="formData.endPrice"
                @input="handleNumericInput('endPrice')"
              />
              <label
                for="endPrice"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Maximum Price
              </label>
            </div>

            <button
              @click.prevent="handleSearch()"
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
</template>

<script>
import { ref, watch, onMounted, defineComponent } from "vue";
import useLocation from "@/api/location";
import SegmentedControl from "@/components/SegmentedControl.vue";
import { CATEGORY_ENUM, PROPERTY_TYPE_ENUM } from "@/lib/enum";

export default defineComponent({
  name: "PropertyFilterForm",
  components: { SegmentedControl },
  props: {
    formData: {
      type: Object,
      required: true,
    },
    handleSearch: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const { getDistrictStreets, getRegionDistricts, getRegions } =
      useLocation();

    const regions = ref([]);
    const districts = ref([]);
    const streets = ref([]);

    const selected_region_name = ref("");
    const selected_district_name = ref("");
    const selected_street_name = ref("");
    const selected_property_type = ref("");
    const min_price = ref("");
    const max_price = ref("");

    const categoryOptions = Object.values(CATEGORY_ENUM);
    const propertyTypeOptions = Object.values(PROPERTY_TYPE_ENUM);

    onMounted(async () => {
      const { success, data } = await getRegions();
      if (success && data) {
        regions.value = data;
      }
    });

    const handleNumericInput = (field) => {
      if (field === "endPrice") {
        props.formData.endPrice = props.formData.endPrice.replace(/\D/g, "");
      } else if (field === "initialPrice") {
        props.formData.initialPrice = props.formData.initialPrice.replace(
          /\D/g,
          ""
        );
      }
    };

    watch(selected_region_name, async (newVal) => {
      if (newVal) {
        const region = regions.value.find((r) => r.name === newVal);
        if (region) {
          try {
            const { success, data } = await getRegionDistricts(
              region.region_id
            );
            if (success && data) {
              districts.value = data;
              console.log("Districts data:", districts.value);
              props.formData.regionId = region.region_id;
              selected_district_name.value = "";
            }
          } catch (error) {
            console.error("Error fetching districts:", error);
          }
        }
      } else {
        districts.value = [];
        props.formData.regionId = "";
        selected_district_name.value = "";
      }
    });

    watch(selected_district_name, async (newVal) => {
      if (newVal) {
        const district = districts.value.find((d) => d.name === newVal);
        if (district) {
          try {
            const { success, data } = await getDistrictStreets(
              district.district_id
            );
            if (success && data) {
              streets.value = data;
              console.log("Streets data:", streets.value);
              props.formData.districtId = district.district_id;
              selected_street_name.value = "";
            }
          } catch (error) {
            console.error("Error fetching streets:", error);
          }
        }
      } else {
        streets.value = [];
        props.formData.districtId = "";
        selected_street_name.value = "";
      }
    });

    watch(selected_street_name, (newVal) => {
      const street = streets.value.find((s) => s.name === newVal);
      if (street) {
        props.formData.streetId = street.street_id;
      } else {
        props.formData.streetId = "";
      }
    });

    return {
      selected_region_name,
      selected_district_name,
      selected_street_name,
      selected_property_type,
      min_price,
      max_price,
      regions,
      districts,
      streets,
      categoryOptions,
      propertyTypeOptions,
      handleNumericInput,
    };
  },
});
</script>
