import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const usePropertiesStore = defineStore({
  id: "properties",
  state: () => ({
    properties: [],
    next: null,
    previous: null,
    apiUrl: import.meta.env.VITE_APP_API_URL,
  }),
  getters: {
    getProperties: (state) => state.properties,
    getNext: (state) => state.next,
    getPrevious: (state) => state.previous,
    getApiUrl: (state) => state.apiUrl,
  },
  actions: {
    _setProperties(properties, next, previous) {
      this.$patch({ properties, next, previous });
    },
    async fetchProperties(url = null) {
      const fetchUrl = url || `${this.apiUrl}/api/properties`;

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      try {
        const response = await fetch(fetchUrl, requestOptions);

        if (!response.ok) {
          const errorDetail = await response.json();
          if (response.status === 401) {
            return { success: false, message: errorDetail.detail };
          } else if (response.status == 405) {
            return { success: false, message: errorDetail.detail };
          }

          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        this._setProperties(data.results, data.next, data.previous);

        return { success: true };
      } catch (error) {
        console.error(error);
        return { success: false, message: "Unknown errors occurred" };
      }
    },
  },
});

export const useBrokerPropertiesStore = defineStore({
  id: "broker-properties",
  state: () => ({
    properties: [],
    next: null,
    previous: null,
    apiUrl: import.meta.env.VITE_APP_API_URL,
    count: 0,
  }),
  getters: {
    getProperties: (state) => state.properties,
    getNext: (state) => state.next,
    getPrevious: (state) => state.previous,
    getApiUrl: (state) => state.apiUrl,
    getCount: (state) => state.count,
  },
  actions: {
    _setProperties(properties, next, previous, count) {
      this.$patch({
        properties: properties,
        next: next,
        previous: previous,
        count: count,
      });
    },
    async fetchProperties({
      category,
      districtId,
      endPrice,
      initialPrice,
      propertyType,
      regionId,
      streetId,
      broker = "",
      url = null,
    }) {
      const fetchUrl = new URL(url || `${this.apiUrl}/api/properties`);

      fetchUrl.searchParams.append("broker", broker);
      fetchUrl.searchParams.append("propertyType", propertyType);
      fetchUrl.searchParams.append("category", category);
      fetchUrl.searchParams.append("regionId", regionId);
      fetchUrl.searchParams.append("districtId", districtId);
      fetchUrl.searchParams.append("streetId", streetId);
      fetchUrl.searchParams.append("initialPrice", initialPrice);
      fetchUrl.searchParams.append("endPrice", endPrice);

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      try {
        const response = await fetch(fetchUrl, requestOptions);

        if (!response.ok) {
          const errorDetail = await response.json();
          console.log(response);
          if (response.status === 401) {
            return { success: false, message: errorDetail.detail };
          } else if (response.status == 405) {
            return { success: false, message: errorDetail.detail };
          }

          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        this._setProperties(data.results, data.next, data.previous, data.count);

        return { success: true };
      } catch (error) {
        console.error(error);
        return { success: false, message: "Unknown error occurred" };
      }
    },
  },
});

export const useMyPropertiesStore = defineStore({
  id: "broker-properties",
  state: () => ({
    properties: [],
    next: null,
    previous: null,
    apiUrl: import.meta.env.VITE_APP_API_URL,
    count: 0,
  }),
  getters: {
    getProperties: (state) => state.properties,
    getNext: (state) => state.next,
    getPrevious: (state) => state.previous,
    getApiUrl: (state) => state.apiUrl,
    getCount: (state) => state.count,
  },
  actions: {
    _setProperties(properties, next, previous, count) {
      this.$patch({
        properties: properties,
        next: next,
        previous: previous,
        count: count,
      });
    },
    async fetchProperties({ category, propertyType, title, url = null }) {
      const { logout, getAuthToken } = useAuthStore();

      const fetchUrl = new URL(url || `${this.apiUrl}/property/`);

      fetchUrl.searchParams.append("title", title);
      fetchUrl.searchParams.append("propertyType", propertyType);
      fetchUrl.searchParams.append("category", category);

      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${getAuthToken}`);
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      try {
        const response = await fetch(fetchUrl, requestOptions);

        if (!response.ok) {
          const errorDetail = await response.json();
          console.log(response);
          if (response.status === 401) {
            logout();
            return {
              success: false,
              code: response.status,
              message: errorDetail.detail,
            };
          } else if (response.status == 405) {
            return {
              success: false,
              code: response.status,
              message: errorDetail.detail,
            };
          }

          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        this._setProperties(data.results, data.next, data.previous, data.count);

        return { success: true, code: response.status };
      } catch (error) {
        console.error(error);
        return { success: false, message: "Unknown error occurred" };
      }
    },
  },
});
