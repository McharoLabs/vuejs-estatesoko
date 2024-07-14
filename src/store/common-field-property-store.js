import { defineStore } from "pinia";

export const useCommonFieldPropertyStore = defineStore({
  id: "common-field",
  state: () => ({
    property: null,
    apiUrl: import.meta.env.VITE_APP_API_URL,
  }),
});
