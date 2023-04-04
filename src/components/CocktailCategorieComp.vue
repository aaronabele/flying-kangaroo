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
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

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
  font-size: 48px;
  font-family: "Montserrat Alternates", sans-serif;
  color: white;
  text-align: right;
}

.cocktail-category-router-link {
  font-family: "Montserrat Alternates", sans-serif;
  position: absolute;
  left: 370px;
  bottom: 170px;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: black;
  background-color: white;
  font-size: 18px;
}
.cocktail-category-text-mixer {
  position: absolute;
  right: 140px;
  bottom: 250px;
  width: 12ch;
  font-size: 48px;
  font-family: "Montserrat Alternates", sans-serif;
  color: white;
}

.cocktail-category-router-link-mixer {
  font-family: "Montserrat Alternates", sans-serif;
  position: absolute;
  right: 370px;
  bottom: 170px;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: black;
  background-color: white;
  font-size: 18px;
}

.cocktail-category-text-area-wrapper {
  display: grid;
  grid-template-columns: 600px 600px;
  grid-template-rows: auto;
  text-align: center;
  margin-bottom: 2rem;
}

.cocktail-category-collection-header {
  font-size: 36px;
  font-family: "Kaushan Script", cursive;
  margin: 0 0;
  margin-top: 0.5rem;
}

.cocktail-category-collection-text {
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 16px;
  width: 50ch;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
}

.cocktail-category-colelction-mixer-btn {
  font-family: "Montserrat Alternates", sans-serif;
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  border: 2px solid black;
  border-radius: 15px;
}
</style>
