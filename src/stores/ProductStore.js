import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
  //state
  state: () => {
    return {
      products: [],
    };
  },
  //actions
  actions: {
    async getProducts() {
      try {
        const res = await fetch(
          "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php"
        );
        const data = await res.json();
        this.products = data.drinks;
      } catch (error) {
        //incase of an error we just log it to the console
        console.log(error);
      }
    },
  },
  //getter
});
