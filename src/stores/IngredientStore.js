import { defineStore } from "pinia";
import ingredient from "@/db.json";

export const useIngredientStore = defineStore("ingredientStore", {
  //state
  state: () => {
    return {
      ingredient,
      completeCocktail: [],
    };
  },
  //actions
  actions: {},
  //getter
});
