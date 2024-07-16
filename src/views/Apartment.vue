<template>
  <div>
    <Navbar />

    <section class="p-4 sm:ml-64 justify-center flex">
      <div
        class="p-4 border-2 max-w-7xl w-full text-2xl border-gray-200 rounded-lg mt-14"
      >
        EstateSoko Platform: Apartment Details
        <div class="flex flex-row items-center">
          <div
            class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"
              />
            </svg>
            <span class="sr-only">Warning icon</span>
          </div>
          <div class="ms-3 text-sm sm:text-md text-red-500 font-normal">
            All Size will be considered in Metre Squires
          </div>
        </div>
      </div>
    </section>

    <section class="p-4 sm:ml-64 justify-center flex" id="apartment">
      <div
        class="p-4 border-2 max-w-7xl w-full text-2xl border-gray-200 rounded-lg"
      >
        <form
          class="mx-auto mt-6"
          id="register-form"
          @submit.prevent="handleOnSubmit"
        >
          <CommonFields
            :formData="common_property_data"
            :errors="errors"
            :handleCommonNumericInput="handleCommonNumericInput"
          />

          <!-- Apartment Fields -->
          <div class="grid lg:grid-cols-2 lg:gap-6 xl:grid-cols-3 mt-5">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="bedrooms"
                id="bedrooms"
                v-model="apartment_property_data.bedrooms"
                @input="handleNumericInput('bedrooms')"
                :class="{ 'border-red-500': errors.bedrooms }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="bedrooms"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Bedrooms (eg., 5)</label
              >
              <p
                v-if="errors.bedrooms"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span> {{ errors.bedrooms }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="bathrooms"
                id="bathrooms"
                v-model="apartment_property_data.bathrooms"
                @input="handleNumericInput('bathrooms')"
                :class="{ 'border-red-500': errors.bathrooms }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="bathrooms"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Bathrooms (eg., 2)</label
              >
              <p
                v-if="errors.bathrooms"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span> {{ errors.bathrooms }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="living_rooms"
                id="living_rooms"
                v-model="apartment_property_data.living_rooms"
                @input="handleNumericInput('living_rooms')"
                :class="{ 'border-red-500': errors.living_rooms }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="living_rooms"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Living Rooms (eg., 1)</label
              >
              <p
                v-if="errors.living_rooms"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.living_rooms }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floors"
                id="floors"
                v-model="apartment_property_data.floors"
                @input="handleNumericInput('floors')"
                :class="{ 'border-red-500': errors.floors }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="floors"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Floors (Ghorofa eg., 2)</label
              >
              <p
                v-if="errors.floors"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span> {{ errors.floors }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="garage_capacity"
                id="garage_capacity"
                v-model="apartment_property_data.garage_capacity"
                @input="handleNumericInput('garage_capacity')"
                :class="{ 'border-red-500': errors.garage_capacity }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="garage_capacity"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Garage Capacity (number of cars eg. 5)</label
              >
              <p
                v-if="errors.garage_capacity"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.garage_capacity }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="yard_size"
                id="yard_size"
                v-model="apartment_property_data.yard_size"
                @input="handleNumericInput('yard_size')"
                :class="{ 'border-red-500': errors.yard_size }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="yard_size"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Yard Size (eg., 500)</label
              >
              <p
                v-if="errors.yard_size"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span> {{ errors.yard_size }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="yard_type"
                id="yard_type"
                v-model="apartment_property_data.yard_type"
                :class="{ 'border-red-500': errors.yard_type }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="yard_type"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Yard Type (eg. Landscape, Natural)</label
              >
              <p
                v-if="errors.yard_type"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span> {{ errors.yard_type }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="balcony_size"
                id="balcony_size"
                v-model="apartment_property_data.balcony_size"
                @input="handleNumericInput('balcony_size')"
                :class="{ 'border-red-500': errors.balcony_size }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="balcony_size"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Balcony Size(Baraza, Veranda eg., 300)</label
              >
              <p
                v-if="errors.balcony_size"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.balcony_size }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="parking_spaces"
                id="parking_spaces"
                v-model="apartment_property_data.parking_spaces"
                @input="handleNumericInput('parking_spaces')"
                :class="{ 'border-red-500': errors.parking_spaces }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="parking_spaces"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Parking Spaces(eg., 4)</label
              >
              <p
                v-if="errors.parking_spaces"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.parking_spaces }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="corridor_size"
                id="corridor_size"
                v-model="apartment_property_data.corridor_size"
                @input="handleNumericInput('corridor_size')"
                :class="{ 'border-red-500': errors.corridor_size }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="corridor_size"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Corridor Size (eg., 400)</label
              >
              <p
                v-if="errors.corridor_size"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.corridor_size }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <select
                name="furnishing_status"
                id="furnishing_status"
                v-model="apartment_property_data.furnishing_status"
                :class="{ 'border-red-500': errors.furnishing_status }"
                class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              >
                <option disabled value="">Select Status</option>
                <option
                  v-for="status in furnished_status"
                  :key="status"
                  :value="status"
                >
                  {{ status }}
                </option>
              </select>
              <label
                for="category"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Furnishing Status</label
              >
              <p
                v-if="errors.furnishing_status"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.furnishing_status }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="kitchen_count"
                id="kitchen_count"
                v-model="apartment_property_data.kitchen_count"
                @input="handleNumericInput('kitchen_count')"
                :class="{ 'border-red-500': errors.kitchen_count }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="kitchen_count"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Kitchen Count (eg., 3)</label
              >
              <p
                v-if="errors.kitchen_count"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.kitchen_count }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="kitchen_type"
                id="kitchen_type"
                v-model="apartment_property_data.kitchen_type"
                :class="{ 'border-red-500': errors.kitchen_type }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="kitchen_type"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Kitchen Type (eg., Open, closed)</label
              >
              <p
                v-if="errors.kitchen_type"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.kitchen_type }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="utilities"
                id="utilities"
                v-model="apartment_property_data.utilities"
                :class="{ 'border-red-500': errors.utilities }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="utilities"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Utilities (eg., Water, electricity, internet...)</label
              >
              <p
                v-if="errors.utilities"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span> {{ errors.utilities }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="amenities"
                id="amenities"
                v-model="apartment_property_data.amenities"
                :class="{ 'border-red-500': errors.amenities }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="utilities"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Amenities (eg., Gym, Sweeming pool...)</label
              >
              <p
                v-if="errors.utilities"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span> {{ errors.amenities }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="security_features"
                id="security_features"
                v-model="apartment_property_data.security_features"
                :class="{ 'border-red-500': errors.security_features }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="security_features"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Security Features (eg., Alarm system, personal...)</label
              >
              <p
                v-if="errors.security_features"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.security_features }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="heating_cooling_systems"
                id="heating_cooling_systems"
                v-model="apartment_property_data.heating_cooling_systems"
                :class="{ 'border-red-500': errors.heating_cooling_systems }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="heating_cooling_systems"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Heating/Cooling Systems (eg., Fans)</label
              >
              <p
                v-if="errors.heating_cooling_systems"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span>
                {{ errors.heating_cooling_systems }}
              </p>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="file"
                name="images"
                id="images"
                accept="image/*"
                @change="handleImagesChanges"
                :class="{ 'border-red-500': errors.images }"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                multiple
                required
              />
              <label
                for="images"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Apartment pictures (At least 5)</label
              >
              <p
                v-if="errors.images"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
              >
                <span class="font-medium">Error:</span> {{ errors.images }}
              </p>
            </div>
          </div>

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none flex flex-row gap-3 justify-center items-center w-full lg:w-1/2 xl:w-1/3"
          >
            <p>Submit</p>

            <svg
              class="w-6 h-6"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </section>

    <section>
      <SuccessModal
        :isVisible="isSuccessModalVisible"
        :message="successMessage"
        @update:isVisible="handleSuccessModalVisibility"
      />
      <ErrorModal
        :isVisible="isErrorModalVisible"
        :message="errorMessage"
        @update:isVisible="handleModalVisibility"
      />
    </section>
  </div>
</template>

<script lang="js">
import { defineComponent, reactive } from "vue";
import Navbar from "../components/Navbar.vue";
import CommonFields from "../components/CommonFields.vue";
import { CATEGORY_ENUM, FURNISHED_STATUS, STATUS_CODE } from "../lib/enum";
import useNavigationFunctions from "@/utils/nav-functions";
import ErrorModal from "@/components/ErrorModal.vue";
import SuccessModal from "@/components/SuccessModal.vue";
import { ref } from "vue";
import useApartmentApi from "@/api/apartment";

export default defineComponent({
  name: "Apartment",
  components: { Navbar, CommonFields, ErrorModal, SuccessModal },
  setup() {
    const apartmentApi = useApartmentApi();
    const {navigateToAuth} = useNavigationFunctions();

    const isSuccessModalVisible = ref(false);
    const successMessage = ref('');
    const isErrorModalVisible = ref(false);
    const errorMessage = ref('');

    const common_property_data = reactive({
      category: "",
      location: "",
      title: "",
      description: "",
      price: "",
      price_unit: "",
      payment_period: "",
      condition: "",
      legal_documents: "",
      nearby_facilities: "",
    });

    const apartment_property_data = reactive({
      bedrooms: "",
      bathrooms: "",
      living_rooms: "",
      floors: "",
      garage_capacity: "",
      yard_size: "",
      yard_type: "",
      balcony_size: "",
      parking_spaces: "",
      corridor_size: "",
      furnishing_status: "",
      kitchen_count: "",
      kitchen_type: "",
      utilities: "",
      security_features: "",
      heating_cooling_systems: "",
      amenities: "",
      images: []
    });

    const errors = reactive({});


    // Function to handle numeric input validation
    const handleNumericInput = (field) => {
      if (isNaN(Number(apartment_property_data[field]))) {
        errors[field] = "Please enter a valid number.";
      } else {
        errors[field] = "";
      }
    };

    const handleImagesChanges = (event) => {
      const input = event.target;
      const files = input.files ? Array.from(input.files) : [];

      if (files.length < 5) {
        errors.images = "Please upload at least 5 images.";
      } else {
        errors.images = "";
        apartment_property_data.images = files;
      }
    };


    const showSuccessModal = (message) => {
      successMessage.value = message;
      isSuccessModalVisible.value = true;
    };

    const showErrorModal = (message) => {
      errorMessage.value = message;
      isErrorModalVisible.value = true;
    };


    const handleModalVisibility = (isVisible) => {
      isErrorModalVisible.value = isVisible;
      if (!isVisible) {
        setTimeout(() => {

          navigateToAuth();
        }, 400);
      }
    };

    const handleSuccessModalVisibility = (isVisible) => {
      isSuccessModalVisible.value = isVisible;
    }


    const handleCommonNumericInput = (field) => {
      if (isNaN(Number(common_property_data[field]))) {
        errors[field] = "Please enter a valid number.";
      } else {
        errors[field] = "";
      }
    };

    const isFormValid = () => {
      if (common_property_data.category === CATEGORY_ENUM.SALE) {
         common_property_data.payment_period = "null";
      }

      // Reset errors initially for apartment_property_data
      for (const key in apartment_property_data) {
        if (Object.prototype.hasOwnProperty.call(apartment_property_data, key)) {
          if (apartment_property_data[key] === "") {
            errors[key] = "This field is required.";
          } else {
            errors[key] = "";
          }
        }
      }

      // Reset errors for common_property_data
      for (const key in common_property_data) {
        if (Object.prototype.hasOwnProperty.call(common_property_data, key)) {
          if (common_property_data[key] === "") {
            errors[key] = "This field is required.";
          } else {
            errors[key] = "";
          }
        }
      }

      // Validate images
      if (apartment_property_data.images.length < 5) {
        errors.images = "Please upload at least 5 images.";

      } else {
        errors.images = "";
      }

      if (common_property_data.description.length < 100){
        errors.description = "Please at least 100 characters required"
      } else {
        errors.description = "";
      }

      // Check for any errors
      for (const key in errors) {
        if (Object.prototype.hasOwnProperty.call(errors, key)) {
          if (errors[key] !== "") {
            return false;
          }
        }
      }

      return true;
    };

    // Function to clear form data and errors
    const clearFormData = () => {
      // Clear common_property_data fields
      for (const key in common_property_data) {
        if (Object.prototype.hasOwnProperty.call(common_property_data, key)) {
          common_property_data[key] = "";
          errors[key] = ""; // Clear error
        }
      }

      // Clear apartment_property_data fields
      for (const key in apartment_property_data) {
        if (Object.prototype.hasOwnProperty.call(apartment_property_data, key)) {
          apartment_property_data[key] = "";
          errors[key] = ""; // Clear error
        }
      }
    };



    // Function to handle form submission
    const handleOnSubmit = async () => {
      if (isFormValid()) {

          const formData = {
          ...common_property_data,
          ...apartment_property_data,
        };

        const {success, code, message} = await apartmentApi.create(formData);

        if (success) {
          showSuccessModal(message);
          // clearFormData();
          scrollToSection("apartment");

        } else {
          if (code === STATUS_CODE.UNAUTHORIZED) {
            showErrorModal(message);
          }
        }
      } else {
      scrollToSection("apartment");
      }


    };

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return {
      common_property_data,
      apartment_property_data,
      handleNumericInput,
      errors,
      furnished_status: Object.values(FURNISHED_STATUS),
      handleOnSubmit,
      handleCommonNumericInput,
      handleImagesChanges,
      isSuccessModalVisible,
      successMessage,
      isErrorModalVisible,
      errorMessage,
      showSuccessModal,
      showErrorModal,
      handleModalVisibility,
      handleSuccessModalVisibility,
    };
  },
});
</script>
