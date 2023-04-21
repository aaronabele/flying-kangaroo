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
      <span class="cocktail-category-text">COCKTAIL COLLECTION</span>
      <router-link class="cocktail-category-router-link" to="/cocktails"
        >Shop Now</router-link
      >
      <span class="cocktail-category-text-mixer">CRAFT YOUR OWN DRINK</span>
      <router-link
        class="cocktail-category-router-link-mixer"
        to="/cocktail-mixer"
        >Shop Now</router-link
      >
    </div>
    <div class="cocktail-category-text-area-wrapper">
      <div class="cocktail-category-collection-text-area">
        <h2 class="cocktail-category-collection-header">Cocktail Collection</h2>
        <p class="cocktail-category-collection-text">
          I'm baby ascot meggings bitters solarpunk mustache, locavore twee
          pickled raclette. Man bun PBR&B mixtape, selfies +1 hoodie heirloom
          deep v lumbersexual viral edison bulb.
        </p>
        <router-link
          to="/cocktails"
          class="cocktail-category-colelction-mixer-btn"
          >Buy Now</router-link
        >
      </div>
      <div class="cocktail-category-mixer-text-area">
        <h2 class="cocktail-category-collection-header">Cocktail Mixer</h2>
        <p class="cocktail-category-collection-text">
          Activated charcoal lyft hella iceland. Mumblecore YOLO tousled
          kombucha pug, blackbird spyplane woke raw denim gastropub scenester.
        </p>
        <router-link
          to="/cocktail-mixer"
          class="cocktail-category-colelction-mixer-btn"
        >
          Craft Now
        </router-link>
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

<style scoped>
.cocktail-category-section {
  width: var(--general-width);
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
.cocktail-category-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 0rem;
}

.cocktail-category-image {
  width: 550px;
  height: auto;
}

.cocktail-category-text {
  position: absolute;
  left: 40px;
  bottom: 250px;
  width: 15ch;
  font-size: 3rem;
  font-family: var(--primary-font-family);
  color: var(--secondary-color);
  text-align: right;
}

.cocktail-category-router-link {
  font-family: var(--primary-font-family);
  position: absolute;
  left: 370px;
  bottom: 170px;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: var(--primary-color);
  background-color: var(--white-background-color);
  font-size: 1.3rem;
}
.cocktail-category-text-mixer {
  position: absolute;
  right: 140px;
  bottom: 250px;
  width: 12ch;
  font-size: 3rem;
  font-family: var(--primary-font-family);
  color: var(--secondary-color);
}

.cocktail-category-router-link-mixer {
  font-family: var(--primary-font-family);
  position: absolute;
  right: 370px;
  bottom: 170px;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: var(--primary-color);
  background-color: var(--white-background-color);
  font-size: 1.2rem;
}

.cocktail-category-text-area-wrapper {
  display: grid;
  grid-template-columns: 600px 600px;
  grid-template-rows: auto;
  text-align: center;
  margin-bottom: 2rem;
}

.cocktail-category-collection-header {
  font-size: 2.5rem;
  font-family: var(--secondary-font-family);
  margin: 0 0;
  margin-top: 0.5rem;
}

.cocktail-category-collection-text {
  font-family: var(--primary-font-family);
  font-size: 1.1rem;
  width: 50ch;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
}

.cocktail-category-colelction-mixer-btn {
  font-family: var(--primary-font-family);
  background-color: var(--white-background-color);
  padding: 0.5rem 1rem;
  border-radius: 15px;
  cursor: pointer;
  text-decoration: none;
  color: var(--primary-color);
  border: 2px solid black;
  border-radius: 15px;
}
</style>
