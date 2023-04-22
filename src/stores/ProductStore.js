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
      selectedDrinkSize: ["Select your Size"],
      drinkSize: [
        { id: 1, label: "200 ml", price: 10.0 },
        { id: 2, label: "400 ml", price: 12.0 },
      ],
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
    select(size) {
      this.selectedDrinkSize.push(size.price);
      if (this.selectedDrinkSize.length === 2) {
        return this.selectedDrinkSize.splice(-2, 1);
      }
    },
    initChange() {
      let initText = "Select your Size";
      if (this.selectedDrinkSize.length === 0) {
        this.selectedDrinkSize = initText;
      }
    },
  },
  getters: {
    calculateSubtotalProducts() {
      let productSum = 0;
      this.productCocktail.forEach((product) => {
        productSum += product[0].price[0] * product[0].quantity;
      });
      return productSum;
    },
    calucalteSumProducts() {
      let singleProductSum = 0;
      this.productCocktail.forEach((item) => {
        singleProductSum += item.price;
      });
      return singleProductSum;
    },
  },
});
