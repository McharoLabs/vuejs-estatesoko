import { defineStore } from "pinia";

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
          console.log(response)
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
