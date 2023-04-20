import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useProductStore = defineStore("productStore", {
  //state
  state: () => {
    return {
      products: useStorage("products", []),
      productCocktail: useStorage("productCocktail", []),
      listSorted: "ascending",
      cselected: "select",
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
  getters: {
    filteredCocktails() {
      let filteredCocktails = this.products;

      if (this.listSorted !== "select") {
        filteredCocktails.sort((a, b) => {
          let aCocktail = a.strDrink.toLowerCase();
          let bCocktail = b.strDrink.toLowerCase();
          if (this.listSorted === "ascending") {
            return aCocktail > bCocktail ? 1 : -1;
          } else {
            return aCocktail < bCocktail ? 1 : -1;
          }
        });
      }
      if (this.cselected !== "select") {
        filteredCocktails = filteredCocktails.filter((item) => {
          return item.strIngredient1 === this.cselected;
        });
      }
      return filteredCocktails;
    },
    filteredCocktailsLength() {
      return this.filteredCocktails.length;
    },
  },
});
