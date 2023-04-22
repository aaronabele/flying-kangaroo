<template>
  <div class="filter-comp-wrapper">
    <div class="filter-comp-product-length">
      <span> {{ filteredCocktailsLength }} products</span>
    </div>
    <div class="filter-comp-filter-sorting">
      filter &nbsp; &nbsp;
      <select class="filter-comp-filter" v-model="ProductStore.cselected">
        <option value="select">Select</option>
        <option value="Vodka">Vodka</option>
        <option value="Gin">Gin</option>
        <option value="Rum">Rum</option>
      </select>
      sort by name &nbsp; &nbsp;
      <select class="filter-comp-sorting" v-model="ProductStore.listSorted">
        &nbsp; &nbsp;
        <img
          class="filter-comp-arrow-image"
          src="@/assets/pfeil.png"
          alt="Pfeil icon"
          :class="[
            ProductStore.listSorted === true
              ? 'filter-comp-arrow-image-rotate'
              : 'filter-comp-arrow-image',
          ]"
        />
        <option selected value="ascending">Ascending order</option>
        <option value="descending">Descending order</option>
      </select>
    </div>
  </div>
  <div class="filter-comp-product-card-wrapper">
    <router-link
      :to="{ name: 'details', params: { id: cocktail.idDrink } }"
      class="filter-comp-single-product-card"
      v-for="cocktail in filteredCocktails"
      :key="cocktail.idDrink"
    >
      <img
        class="filter-comp-single-product-card-img"
        :src="cocktail.strDrinkThumb"
        :alt="cocktail.strDrink"
      />
      <div class="filter-comp-single-product-information-wrapper">
        <h2 class="filter-comp-single-product-header">
          {{ cocktail.strDrink }}
        </h2>
        <div class="filter-comp-text-wrapper">
          <div class="filter-comp-text-ingridient-wrapper">
            <span class="filter-comp-single-product-ingridient">
              {{ cocktail.strIngredient1 }},&nbsp;</span
            >
            <span class="filter-comp-single-product-ingridient">
              {{ cocktail.strIngredient2 }},&nbsp;</span
            >
            <span class="filter-comp-single-product-ingridient">
              {{ cocktail.strIngredient3 }}&nbsp;</span
            >
          </div>
          <span class="filter-comp-single-product-alcohol">{{
            cocktail.strAlcoholic
          }}</span>
          <span class="filter-comp-single-product-price">
            <small> from </small> &nbsp; $10.00</span
          >
        </div>
      </div>
    </router-link>
  </div>
  <ThreeColsComp />
</template>

<script>
import { useProductStore } from "@/stores/ProductStore.js";
import ThreeColsComp from "./ThreeColsComp.vue";

export default {
  setup() {
    const ProductStore = useProductStore();
    ProductStore.getProducts();
    return { ProductStore };
  },
  components: {
    ThreeColsComp,
  },
  computed: {
    filteredCocktails() {
      let filteredCocktails = this.ProductStore.products;

      if (this.ProductStore.listSorted !== "select") {
        filteredCocktails.sort((a, b) => {
          let aCocktail = a.strDrink.toLowerCase();
          let bCocktail = b.strDrink.toLowerCase();
          if (this.ProductStore.listSorted === "ascending") {
            return aCocktail > bCocktail ? 1 : -1;
          } else {
            return aCocktail < bCocktail ? 1 : -1;
          }
        });
      }
      if (this.ProductStore.cselected !== "select") {
        filteredCocktails = filteredCocktails.filter((item) => {
          return item.strIngredient1 === this.ProductStore.cselected;
        });
      }
      return filteredCocktails;
    },
    filteredCocktailsLength() {
      return this.filteredCocktails.length;
    },
  },
};
</script>

<style scoped>
.filter-comp-wrapper {
  font-family: var(--primary-font-family);
  width: var(--general-width);
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--third-background-color);
}

.filter-comp-sorting {
  cursor: pointer;
}
.filter-comp-single-product-header {
  font-family: var(--secondary-font-family);
  margin: 0 0;
  padding-top: 0.5rem;
  padding-bottom: 0.2rem;
}

.filter-comp-product-card-wrapper {
  width: var(--general-width);
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(4, 303px);
  grid-template-rows: auto;
  align-items: center;
  margin-bottom: 4rem;
}

.filter-comp-arrow-image {
  width: 12px;
  height: auto;
}

.filter-comp-arrow-image-rotate {
  width: 12px;
  height: auto;
  transform: rotate(180deg);
}

.filter-comp-filter {
  margin-right: 2rem;
  cursor: pointer;
  width: 8rem;
}

.filter-comp-single-product-card {
  width: 290px;
  height: auto;
  background-color: var(--single-card-background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
  text-decoration: none;
  color: var(--primary-color);
}

.filter-comp-single-product-card-img {
  width: 260px;
  height: auto;
  margin-top: 1rem;
}

.filter-comp-single-product-information-wrapper {
  width: 260px;
  height: 170px;
}

.filter-comp-text-wrapper {
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
}

.filter-comp-text-ingridient-wrapper {
  height: 40px;
  margin-top: 0.5rem;
  margin-bottom: 0.2rem;
}

.filter-comp-single-product-ingridient {
  font-family: var(--primary-font-family);
  color: var(--primary-color);
  padding-bottom: 0.2rem;
}

.filter-comp-single-product-alcohol {
  font-family: var(--primary-font-family);
  color: var(--primary-color);
  padding-top: 1rem;
}

.filter-comp-single-product-price {
  font-family: var(--primary-font-family);
  color: var(--primary-color);
  padding-top: 1rem;
}

.filter-comp-sorting-reset {
  font-family: var(--primary-font-family);
  color: var(--primary-color);
  padding-top: 1rem;
  margin-left: 2rem;
  cursor: pointer;
}
</style>
