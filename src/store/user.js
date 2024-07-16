import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useAgentsStore = defineStore({
  id: "agents",
  state: () => ({
    agents: [],
    next: null,
    previous: null,
    apiUrl: import.meta.env.VITE_APP_API_URL,
    count: 0,
  }),
  getters: {
    getAgents: (state) => state.agents,
    getNext: (state) => state.next,
    getPrevious: (state) => state.previous,
    getApiUrl: (state) => state.apiUrl,
    getCount: (state) => state.count,
  },
  actions: {
    _setAgents(agents, next, previous, count) {
      this.$patch({
        agents: agents,
        next: next,
        previous: previous,
        count: count,
      });
    },
    async fetchAgents({ first_name, is_active, is_deleted, url = null }) {
      const { logout, getAuthToken } = useAuthStore();
      const fetchUrl = new URL(url || `${this.apiUrl}/user/agents`);

      if (first_name !== undefined)
        fetchUrl.searchParams.append("first_name", first_name);
      if (is_active !== undefined)
        fetchUrl.searchParams.append("is_active", is_active);
      if (is_deleted !== undefined)
        fetchUrl.searchParams.append("is_deleted", is_deleted);

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
        this._setAgents(data.results, data.next, data.previous, data.count);

        return { success: true, code: response.status };
      } catch (error) {
        console.error(error);
        return { success: false, message: "Unknown error occurred" };
      }
    },
  },
});
