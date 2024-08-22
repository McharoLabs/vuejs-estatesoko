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

      <PropertyFilterForm
        :formData="formData"
        :handleSearch="fetchProperties"
      />

      <!-- PROPERTY DISPLAY -->
      <section class="max-w-screen-xl mx-auto p-4" id="display" v-if="broker">
        <div class="mb-5">
          <h2 class="text-3xl font-semibold">
            {{ broker.first_name }} {{ broker.last_name }} Properties List
          </h2>
          <p>{{ count }} Listings</p>
        </div>

        <CardPlaceholderVue v-if="properties.length === 0" />

        <PropertyCard :properties="properties" v-else />

    

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
import TopEstateNavVue from "@/components/TopEstateNav.vue";
import FooterVue from "@/components/Footer.vue";
import CopyRightVue from "@/components/CopyRight.vue";
import useUserApi from "@/api/user";
import useFormatter from "@/utils/formatter";
import { ref, reactive, computed } from "vue";
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import useNavigationFunctions from "@/utils/nav-functions";
import PropertyFilterForm from "@/components/PropertyFilterForm.vue";
import {useBrokerPropertiesStore} from "@/store/propertiesStore";
import PropertyCard from "@/components/PropertyCard.vue";
import CardPlaceholderVue from "@/components/CardPlaceholder.vue";
import { useCategoryState } from "@/store/category.state";

export default defineComponent({
  name: "BrokerInfo",
  components: { TopEstateNavVue, FooterVue, CopyRightVue, PropertyFilterForm, PropertyCard, CardPlaceholderVue },
  setup() {
    const route = useRoute();
    const { getBroker } = useUserApi();
    const { getImageUrl, formatNumberWithCommas } = useFormatter();
    const { navigateToPropertyInfo } = useNavigationFunctions();
    const brokerPropertiesStore = useBrokerPropertiesStore();
    const categoryState = useCategoryState();



    const broker = ref(null);
    const formData = reactive({
        propertyType: "",
        category: categoryState.getActive,
        regionId: "",
        districtId: "",
        streetId: "",
        initialPrice: "",
        endPrice: "",
    });

    const properties = computed(() => brokerPropertiesStore.getProperties);
    const next = computed(() => brokerPropertiesStore.getNext);
    const previous = computed(() => brokerPropertiesStore.getPrevious);
    const count = computed(() => brokerPropertiesStore.getCount);

    onMounted(async () => {
      scrollToSection("broker-info");
      const brokerId = route.params.id;
      const brokerResponse = await getBroker({ user_id: brokerId });

      if (brokerResponse.success) {
        broker.value = brokerResponse.data;
        await fetchProperties();
      }

    });

    const fetchProperties = async (url = null) => {

      const searchParams = {
        ...formData,
        broker: route.params.id,
        url: url || null,
      };

      await brokerPropertiesStore.fetchProperties(searchParams);
    };

    const fetchNext = async () => {
      if (next.value) {
        scrollToSection("display");
        await fetchProperties(next.value);
      }
    };

    const fetchPrevious = async () => {
      if (previous.value) {
        scrollToSection("display");
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
      broker,
      getImageUrl,
      navigateToPropertyInfo,
      formData,
      properties,
      fetchProperties,
      formatNumberWithCommas,
      count,
      next,
      previous,
      fetchNext,
      fetchPrevious,
    };
  },
});
</script>
