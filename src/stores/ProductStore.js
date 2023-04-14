import { defineStore } from "pinia";

import products from "@/db.json";

export const useProductStore = defineStore("ProductStore", {
  //state
  state: () => {
    return {
      products,
    };
  },

  //actions

  //getters
});
