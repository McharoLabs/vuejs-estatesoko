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
import TopEstateNavVue from "@/components/TopEstateNav.vue";
import FooterVue from "@/components/Footer.vue";
import CopyRightVue from "@/components/CopyRight.vue";
import useUserApi from "@/api/user";
import useFormatter from "@/utils/formatter";
import { ref, watch, reactive, computed } from "vue";
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import useNavigationFunctions from "@/utils/nav-functions";
import { CATEGORY_ENUM } from "@/lib/enum";
import useLocation from "@/api/location";
import PropertyFilterForm from "@/components/PropertyFilterForm.vue";
import {useBrokerPropertiesStore} from "@/store/propertiesStore";
import PropertyCard from "@/components/PropertyCard.vue";
import CardPlaceholderVue from "@/components/CardPlaceholder.vue";

export default defineComponent({
  name: "BrokerInfo",
  components: { TopEstateNavVue, FooterVue, CopyRightVue, PropertyFilterForm, PropertyCard, CardPlaceholderVue },
  setup() {
    const route = useRoute();
    const { getBroker } = useUserApi();
    const { getImageUrl, formatNumberWithCommas } = useFormatter();
    const { navigateToPropertyInfo } = useNavigationFunctions();
    const brokerPropertiesStore = useBrokerPropertiesStore();


    const broker = ref(null);
    const formData = reactive({
        propertyType: "",
        category: CATEGORY_ENUM.SALE,
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
