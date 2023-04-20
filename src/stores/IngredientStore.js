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
      ingredients: ingredient.ingredients,
      sum: 0,
      nonAlcoholic: false,
      cocktail: [],
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
    inputQuantityPrice(item, event) {
      if (this.cocktail.length < 5) {
        this.cocktail.push({
          ingredient: item,
          quantity: event.target.value,
          totalQuantity: 1,
        });
      } else {
        event.target.value = "";
        alert("You have picked the maximum amount of Ingredients");
      }
    },
    handleInput(event) {
      if (event.target.value < 1) {
        alert("Please put in a valid Quantity (>= 1)");
      }
    },
    isSendingCocktail() {
      this.sendCocktail(this.cocktail);
      this.sendPrice(this.cocktailPrice);
    },
  },
  //getter
  getters: {
    cocktailUnits() {
      let units = 0;
      this.cocktail.forEach((item) => {
        units += +item.quantity;
      });
      return units;
    },
    cocktailPrice() {
      let sum = 0;
      this.cocktail.forEach((item) => {
        sum += item.quantity * item.ingredient.price;
      });
      return sum;
    },
    selectedIngredients() {
      return this.cocktail.map((item) => item.ingredient.name).join(", ");
    },
    filteredIngredients() {
      if (this.nonAlcoholic === true) {
        const copy = {};

        for (let key of Object.keys(this.ingredients)) {
          const filtered = this.ingredients[key].filter(
            (item) => item.category === "non-alcoholic"
          );
          if (filtered.length > 0) {
            copy[key] = filtered;
          }
        }
        return copy;
      } else {
        // return all ingredient
        return this.ingredients;
      }
    },
  },
});
