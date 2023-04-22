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
      this.cocktail = [];
    },
    deleteItem(index) {
      this.completePrice.splice(index, 1);
      this.completeCocktail.splice(index, 1);
    },
    showSubtotalIngredients(item) {
      let resultIngredients = 0;
      item.forEach((ingredient) => {
        resultIngredients +=
          +ingredient.ingredient.price * +ingredient.quantity;
      });
      resultIngredients =
        resultIngredients * item[item.length - 1].totalQuantity;
      return resultIngredients;
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
    calculateSubtotalIngredients() {
      let IngredientSum = 0;
      this.completeCocktail.forEach((item) => {
        let lastElement = item[item.length - 1];
        item.forEach((cocktail) => {
          IngredientSum +=
            cocktail.ingredient.price * lastElement.totalQuantity;
        });
      });
      return IngredientSum;
    },
  },
});
