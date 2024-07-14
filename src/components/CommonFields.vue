<template>
  <div class="grid lg:grid-cols-2 lg:gap-6 xl:grid-cols-3">
    <!-- SELECT REGION -->
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
    <!-- SELECT DISTRICT -->
    <div class="relative z-0 w-full mb-5 group">
      <label for="district_select" class="sr-only">Select District</label>
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
    <!-- SELECT STREET -->
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

      <p
        v-if="errors.location"
        class="mt-2 text-sm text-red-600 dark:text-red-500"
      >
        <span class="font-medium">Error:</span>
        {{ errors.location }}
      </p>
    </div>
    <!-- Category Field -->
    <div class="relative z-0 w-full mb-5 group">
      <select
        name="category"
        id="category"
        v-model="formData.category"
        :class="{ 'border-red-500': errors.category }"
        class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        required
      >
        <option disabled value="">Select Category</option>
        <option
          v-for="category in categories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
      <label
        for="category"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Category</label
      >
      <p
        v-if="errors.category"
        class="mt-2 text-sm text-red-600 dark:text-red-500"
      >
        <span class="font-medium">Error:</span> {{ errors.category }}
      </p>
    </div>

    <!-- Property Type Field -->
    <!--  -->

    <!-- Title Field -->
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="text"
        name="title"
        id="title"
        v-model="formData.title"
        :class="{ 'border-red-500': errors.title }"
        class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        required
      />
      <label
        for="title"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Title</label
      >
      <p
        v-if="errors.title"
        class="mt-2 text-sm text-red-600 dark:text-red-500"
      >
        <span class="font-medium">Error:</span> {{ errors.title }}
      </p>
    </div>

    <!-- Price Field -->
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="text"
        name="price"
        id="price"
        v-model="formData.price"
        @input="handleCommonNumericInput('price')"
        :class="{ 'border-red-500': errors.price }"
        class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        required
      />
      <label
        for="price"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Price(eg., 50000.00)</label
      >
      <p
        v-if="errors.price"
        class="mt-2 text-sm text-red-600 dark:text-red-500"
      >
        <span class="font-medium">Error:</span> {{ errors.price }}
      </p>
    </div>

    <div class="relative z-0 w-full mb-5 group">
      <select
        name="price_unit"
        id="price_unit"
        v-model="formData.price_unit"
        :class="{ 'border-red-500': errors.price_unit }"
        class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        required
      >
        <option value="" disabled>Select Price Unit</option>
        <option v-for="unit in priceUnits" :key="unit" :value="unit">
          {{ unit }}
        </option>
      </select>
      <label
        for="price_unit"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Price Unit</label
      >
      <p
        v-if="errors.price_unit"
        class="mt-2 text-sm text-red-600 dark:text-red-500"
      >
        <span class="font-medium">Error:</span> {{ errors.price_unit }}
      </p>
    </div>

    <!-- Payment Period Field -->
    <div
      class="relative z-0 w-full mb-5 group"
      v-if="formData.category === CATEGORY_ENUM.RENTAL"
    >
      <select
        name="payment_period"
        id="payment_period"
        v-model="formData.payment_period"
        :class="{ 'border-red-500': errors.payment_period }"
        class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      >
        <option value="" disabled>Select Payment Period</option>
        <option v-for="period in paymentPeriods" :key="period" :value="period">
          {{ period }}
        </option>
      </select>
      <label
        for="payment_period"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Payment Period</label
      >
      <p
        v-if="errors.payment_period"
        class="mt-2 text-sm text-red-600 dark:text-red-500"
      >
        <span class="font-medium">Error:</span> {{ errors.payment_period }}
      </p>
    </div>

    <!-- Currency Field -->
    <!-- <div class="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="currency"
          id="currency"
          v-model="formData.currency"
          :class="{ 'border-red-500': errors.currency }"
          class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          for="currency"
          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Currency</label
        >
        <p
          v-if="errors.currency"
          class="mt-2 text-sm text-red-600 dark:text-red-500"
        >
          <span class="font-medium">Error:</span> {{ errors.currency }}
        </p>
      </div> -->

    <!-- Condition Field -->
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="text"
        name="condition"
        id="condition"
        v-model="formData.condition"
        :class="{ 'border-red-500': errors.condition }"
        class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        required
      />
      <label
        for="condition"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Condition (eg., New)</label
      >
      <p
        v-if="errors.condition"
        class="mt-2 text-sm text-red-600 dark:text-red-500"
      >
        <span class="font-medium">Error:</span> {{ errors.condition }}
      </p>
    </div>

    <!-- Legal Documents Field -->
    <div class="relative z-0 w-full mb-5 group">
      <textarea
        name="legal_documents"
        id="legal_documents"
        v-model="formData.legal_documents"
        :class="{ 'border-red-500': errors.legal_documents }"
        class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        required
      />
      <label
        for="legal_documents"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Legal Documents (eg., property rights)</label
      >
      <p
        v-if="errors.legal_documents"
        class="mt-2 text-sm text-red-600 dark:text-red-500"
      >
        <span class="font-medium">Error:</span> {{ errors.legal_documents }}
      </p>
    </div>

    <!-- Nearby Facilities Field -->
    <div class="relative z-0 w-full mb-5 group">
      <textarea
        name="nearby_facilities"
        id="nearby_facilities"
        v-model="formData.nearby_facilities"
        :class="{ 'border-red-500': errors.nearby_facilities }"
        class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        required
      />
      <label
        for="nearby_facilities"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Nearby Facilities (eg., School, Hospital...)</label
      >
      <p
        v-if="errors.nearby_facilities"
        class="mt-2 text-sm text-red-600 dark:text-red-500"
      >
        <span class="font-medium">Error:</span> {{ errors.nearby_facilities }}
      </p>
    </div>

    <!-- Description Field -->
    <div class="relative z-0 w-full mb-5 group">
      <textarea
        name="description"
        id="description"
        v-model="formData.description"
        :class="{ 'border-red-500': errors.description }"
        class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        minlength="100"
        required
      />
      <label
        for="description"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Description</label
      >
      <p
        v-if="errors.description"
        class="mt-2 text-sm text-red-600 dark:text-red-500"
      >
        <span class="font-medium">Error:</span> {{ errors.description }}
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, watch, ref } from "vue";
import {
  CATEGORY_ENUM,
  PAYMENT_PERIOD_ENUM,
  PRICE_UNIT_ENUM,
} from "../lib/enum";
import useLocation from "../api/location";

export default defineComponent({
  name: "CommonFields",
  props: {
    formData: {
      type: Object,
      required: true,
    },
    errors: {
      type: Object,
      required: false,
    },
    handleCommonNumericInput: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const { getDistrictStreets, getRegionDistricts, getRegions } =
      useLocation();

    const regions = ref(null);
    const districts = ref(null);
    const streets = ref(null);

    const selected_region_name = ref("");
    const selected_district_name = ref("");
    const selected_street_name = ref("");

    onMounted(async () => {
      const { success, data } = await getRegions();
      if (success && data) {
        regions.value = data;
      }
    });

    watch(selected_region_name, async (newVal) => {
      if (newVal) {
        const region = regions.value.find((r) => r.name === newVal);
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

    watch(selected_district_name, async (newVal) => {
      if (newVal) {
        const district = districts.value.find((d) => d.name === newVal);
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

    watch(selected_street_name, (newVal) => {
      const street = streets.value.find((s) => s.name === newVal);
      if (street) {
        props.formData.location = street.street_id.toString();
      }
    });

    return {
      regions,
      districts,
      streets,
      selected_region_name,
      selected_district_name,
      selected_street_name,
      categories: Object.values(CATEGORY_ENUM),
      priceUnits: Object.values(PRICE_UNIT_ENUM),
      paymentPeriods: Object.values(PAYMENT_PERIOD_ENUM),
      CATEGORY_ENUM,
    };
  },
});
</script>
