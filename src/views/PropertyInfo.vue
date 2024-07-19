<template>
  <div class="flex flex-col min-h-screen">
    <TopEstateNav />

    <div class="flex-grow">
      <section class="p-10" id="property-info"></section>

      <!-- PROPERTY INFO -->
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8" v-if="property">
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
          <!-- Header -->
          <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 class="text-3xl font-bold text-gray-900">
                {{ property.title }}
              </h1>
              <p class="text-gray-600">
                Listed on:
                {{ new Date(property.listing_date).toLocaleDateString() }}
              </p>
            </div>
          </header>

          <!-- Property Details -->
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Property Details
            </h3>
            <p class="mt-1 max-w-2xl text-gray-500">
              Basic details about the property.
            </p>
          </div>
          <div class="border-t border-gray-200">
            <dl>
              <div
                class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="font-medium text-gray-500">Category</dt>
                <dd class="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ property.category }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="font-medium text-gray-500">Property Type</dt>
                <dd class="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ property.property_type }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="font-medium text-gray-500">Legal Documants</dt>
                <dd class="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ property.legal_documents }}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="font-medium text-gray-500">Nearby Facilities</dt>
                <dd class="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ property.nearby_facilities }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="font-medium text-gray-500">Price</dt>
                <dd class="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ property.price }} {{ property.price_unit }}
                  {{
                    property.payment_period ? `/${property.payment_period}` : ""
                  }}
                </dd>
              </div>

              <div
                class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="font-medium text-gray-500">Property Type</dt>
                <dd class="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ property.property_type }}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="font-medium text-gray-500">Condition</dt>
                <dd class="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ property.condition }}
                </dd>
              </div>
              <!-- Add more property details as needed -->
            </dl>
          </div>

          <!-- Description -->
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Description
            </h3>
            <p class="mt-1 max-w-2xl text-gray-500">
              Detailed description of the property.
            </p>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <p class="text-gray-900">{{ property.description }}</p>
          </div>

          <!-- Location -->
          <div v-if="location">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Location Details
              </h3>
              <p class="mt-1 max-w-2xl text-gray-500">
                Pysical location of the property.
              </p>
            </div>
            <div class="border-t border-gray-200">
              <dl>
                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="font-medium text-gray-500">Region</dt>
                  <dd class="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ location.region.name }}
                  </dd>
                </div>
                <div
                  class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="font-medium text-gray-500">District</dt>
                  <dd class="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ location.district.name }}
                  </dd>
                </div>
                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="font-medium text-gray-500">Street</dt>
                  <dd class="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ location.name }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div v-else>
            <p class="text-center text-gray-500">
              Loading Location information...
            </p>
          </div>

          <!-- Amenities and Features -->
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Amenities and Features
            </h3>
            <p class="mt-1 max-w-2xl text-gray-500">
              Specific features of the property.
            </p>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <ul class="list-disc list-inside">
              <li>Bedrooms: {{ property.bedrooms }}</li>
              <li>Bathrooms: {{ property.bathrooms }}</li>
              <li>Garage Capacity: {{ property.garage_capacity }}</li>
              <li>Furnishing Status: {{ property.furnishing_status }}</li>
              <li>Utilities: {{ property.utilities }}</li>

              <!-- Add more features as needed -->
            </ul>
          </div>

          <!-- Broker Information -->
          <div class="px-4 py-5 sm:px-6" v-if="broker">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Broker Information
            </h3>
            <p class="mt-1 max-w-2xl text-gray-500">
              Details about the broker handling this property.
            </p>
            <div
              class="border-t border-gray-200 px-4 py-5 sm:px-6 gap-3 flex flex-col lg:flex-row"
            >
              <div class="flex-shrink-0 lg:mr-4">
                <img
                  class="h-72 w-72 rounded-lg object-cover"
                  :src="getImageUrl(property.image_path[0])"
                  :alt="property.image_path[0]"
                />
              </div>
              <div class="flex-grow">
                <div class="text-gray-900">
                  <p>Name: {{ broker.first_name }} {{ broker.last_name }}</p>
                  <p>Email: {{ broker.email }}</p>
                  <p>Phone: {{ broker.phone }}</p>
                  <p>Language: {{ broker.language }}</p>
                  <p>About: {{ broker.about_me }}</p>
                  <p>Comment: {{ broker.comment }}</p>
                </div>
              </div>
            </div>
          </div>

          <div v-else>
            <p class="text-center text-gray-500">
              Loading broker information...
            </p>
          </div>

          <!-- Image Gallery with Swiper -->

          <div class="w-full p-6">
            <div
              class="w-full bg-white border border-gray-200 rounded-lg shadow flex-col gap-3 flex p-4"
            >
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Image Gallery
              </h3>

              <img
                class="h-64 w-full sm:h-72 md:h-96 rounded-lg"
                :src="getImageUrl(property.image_path[0])"
                :alt="property.image_path[0]"
              />

              <ImageAutoSlider :images="property.image_path" />
            </div>
          </div>

          <!-- Contact Section -->
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Contact the Broker
            </h3>
            <p class="mt-1 max-w-2xl text-gray-500">
              Get in touch with the broker for more details.
            </p>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <form action="" method="POST">
              <div class="grid grid-cols-1 gap-y-6">
                <div>
                  <label for="name" class="block font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:"
                    required
                  />
                </div>
                <div>
                  <label for="email" class="block font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:"
                    required
                  />
                </div>
                <div>
                  <label for="message" class="block font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="mt-6 flex justify-end">
                <button
                  type="submit"
                  class="inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="text-center text-gray-500">Loading property information...</p>
      </div>
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

import { useRoute } from 'vue-router';
import FooterVue from "@/components/Footer.vue";
import CopyRightVue from "@/components/CopyRight.vue";
import TopEstateNav from '@/components/TopEstateNav.vue';
import { defineComponent, ref } from 'vue';
import { onMounted } from 'vue';
import useUserApi from '@/api/user';
import usePropertiesApi from '@/api/properties';
import useUrlFormatter from '@/utils/url-formatter';
import ImageAutoSlider from "@/components/ImageAutoSlider.vue";
import useLocation from '@/api/location';

export default defineComponent({
  name: "PropertyInfo",
  components: {
    TopEstateNav,
    FooterVue,
    CopyRightVue,
    ImageAutoSlider,
  },
  setup() {
    const property = ref(null);
    const broker = ref(null);
    const location = ref(null);
    const route = useRoute();
    const { getImageUrl } = useUrlFormatter();

    onMounted(async () => {
      scrollToSection("property-info")
      const propertyId = route.params.id;
      const userApi = useUserApi();
      const propertiesApi = usePropertiesApi();
      const locationApi = useLocation();

      const propertyResponse = await propertiesApi.getProperty({property_id: propertyId});
      property.value = propertyResponse.data;

      if (property.value && property.value.broker) {
        const brokerResponse = await userApi.getBroker({user_id: property.value.broker});
        broker.value = brokerResponse.data;
      }

      if (property.value && property.value.location) {
        const locationResponse = await locationApi.getLocation({location_id: property.value.location});
        location.value = locationResponse.data;
      }
    });

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return {
      property,
      broker,
      getImageUrl,
      ImageAutoSlider,
      location,
    };
  },
});
</script>
