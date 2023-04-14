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
      CartLength: useStorage("quantity", 0),
    };
  },
  //actions
  actions: {
    sendCocktail(cocktail) {
      this.completeCocktail.push(cocktail);
    },
    sendPrice(sum) {
      let result = +result + sum;
      this.completePrice.push(result);
    },
  },
  //getter
  completeCocktailLength() {
    return (this.CartLength = this.completeCocktail.length);
  },
});
