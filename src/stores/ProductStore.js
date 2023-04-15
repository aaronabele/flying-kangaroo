import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useProductStore = defineStore("productStore", {
  //state
  state: () => {
    return {
      products: useStorage("products", []),
      productCocktail: useStorage("productCocktail", []),
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
    sendCocktail(cocktail) {
      this.productCocktail.push(cocktail);
    },
    sendPrice(sum) {
      this.result = +this.result + sum;
      this.completePrice.push(this.result);
    },
  },
  //getter
});
