<template>
  <section class="cocktail-category-section">
    <div class="cocktail-category-wrapper">
      <div
        class="cocktail-category-collection"
        v-for="item in computedArr"
        :key="item.idDrink"
      >
        <img
          class="cocktail-category-image"
          :src="item.strDrinkThumb"
          :alt="item.strDrink"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sourceData: [],
    };
  },
  computed: {
    computedArr() {
      return this.sourceData.slice(0, 2);
    },
  },
  created() {
    fetch("https://www.thecocktaildb.com/api/json/v2/9973533/popular.php")
      .then((response) => response.json())
      .then((data) => (this.sourceData = data.drinks));
  },
};
</script>

<style>
.cocktail-category-section {
  width: 1200px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
.cocktail-category-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cocktail-category-image {
  width: 550px;
  height: auto;
  position: relative;
}
</style>
