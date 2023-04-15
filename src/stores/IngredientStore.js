import { defineStore } from "pinia";
import ingredient from "@/db.json";
import { useStorage } from "@vueuse/core";

export const useIngredientStore = defineStore("ingredientStore", {
  //state
  state: () => {
    return {
      ingredient,
      completeCocktail: useStorage("cocktails", []),
      completePrice: useStorage("sum", []),
      result: 0,
    };
  },
  //actions
  actions: {
    sendCocktail(cocktail) {
      this.completeCocktail.push(cocktail);
    },
    sendPrice(sum) {
      this.result = +this.result + sum;
      this.completePrice.push(this.result);
    },
  },
  //getter
});
