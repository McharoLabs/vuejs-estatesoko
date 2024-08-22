import { CATEGORY_ENUM } from "@/lib/enum";
import { defineStore } from "pinia";

export const useCategoryState = defineStore({
  id: "category-state",
  state: () => ({
    active: CATEGORY_ENUM.SALE,
  }),
  getters: {
    getActive: (state) => state.active,
  },
  actions: {
    setActive(active) {
      this.$patch({
        active: active,
      });
    },
  },
});
