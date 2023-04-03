<template>
  <div class="filter-comp-wrapper">
    <div class="filter-comp-product-length">
      <span> {{ this.filteredCocktails.length }} products</span>
    </div>
    <div class="filter-comp-filter-sorting">
      filter &nbsp; &nbsp;
      <select class="filter-comp-filter" v-model="cselected">
        <option value="select">Select</option>
        <option value="Vodka">Vodka</option>
        <option value="Gin">Gin</option>
        <option value="Rum">Rum</option>
      </select>
      sort by name &nbsp; &nbsp;
      <select class="filter-comp-sorting" v-model="listSorted">
        &nbsp; &nbsp;
        <img
          class="filter-comp-arrow-image"
          src="@/assets/pfeil.png"
          alt="Pfeil icon"
          :class="[
            this.listSorted === true
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
    <section
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
    </section>
  </div>
  <ThreeColsComp />
</template>

<script>
import ThreeColsComp from "./ThreeColsComp.vue";

export default {
  components: {
    ThreeColsComp,
  },
  data() {
    return {
      sourceData: [],
      listSorted: "ascending",
      cselected: "select",
    };
  },
  computed: {
    filteredCocktails() {
      let filteredCocktails = this.sourceData;

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
  },
  methods: {},
  created() {
    fetch("https://www.thecocktaildb.com/api/json/v2/9973533/popular.php")
      .then((response) => response.json())
      .then((data) => (this.sourceData = data.drinks));
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.filter-comp-wrapper {
  font-family: "Montserrat Alternates", sans-serif;
  width: 1200px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid lightgray;
}

.filter-comp-sorting {
  cursor: pointer;
}
.filter-comp-single-product-header {
  font-family: "Kaushan Script", cursive;
  margin: 0 0;
  padding-top: 0.5rem;
  padding-bottom: 0.2rem;
}

.filter-comp-product-card-wrapper {
  width: 1200px;
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
  background-color: rgb(240, 240, 240);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
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
  font-family: "Montserrat Alternates", sans-serif;
  color: black;
  padding-bottom: 0.2rem;
}

.filter-comp-single-product-alcohol {
  font-family: "Montserrat Alternates", sans-serif;
  color: black;
  padding-top: 1rem;
}

.filter-comp-single-product-price {
  font-family: "Montserrat Alternates", sans-serif;
  color: black;
  padding-top: 1rem;
}

.filter-comp-sorting-reset {
  font-family: "Montserrat Alternates", sans-serif;
  color: black;
  padding-top: 1rem;
  margin-left: 2rem;
  cursor: pointer;
}
</style>
