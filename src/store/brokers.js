import { defineStore } from "pinia";

export const useBrokersStore = defineStore({
  id: "brokers",
  state: () => ({
    brokers: [],
    next: null,
    previous: null,
    apiUrl: import.meta.env.VITE_APP_API_URL,
  }),
  getters: {
    getBrokers: (state) => state.brokers,
    getNext: (state) => state.next,
    getPrevious: (state) => state.previous,
    getApiUrl: (state) => state.apiUrl,
  },
  actions: {
    _setBrokers(brokers, next, previous) {
      this.$patch({ brokers, next, previous });
    },
    async fetchBrokers(url = null) {
      const fetchUrl = url || `${this.apiUrl}/api/brokers`;

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

        this._setBrokers(data.results, data.next, data.previous);

        return { success: true };
      } catch (error) {
        console.error(error);
        return { success: false, message: "Unknown error occurred" };
      }
    },
  },
});
