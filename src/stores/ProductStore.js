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
    deleteProduct(index) {
      this.productCocktail.splice(index, 1);
    },
    showSubtotalProducts(item) {
      let resultProducts = 0;
      resultProducts += item.price[0] * item.quantity;
      return resultProducts;
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
    calculateSubtotalProducts() {
      let productSum = 0;
      this.productCocktail.forEach((product) => {
        productSum += product[0].price[0] * product[0].quantity;
      });
      return productSum;
    },
    calucalteSumProducts() {
      let singleProductSum = 0;
      this.completePrice.forEach((item) => {
        singleProductSum += item;
      });
      return singleProductSum;
    },
  },
});
