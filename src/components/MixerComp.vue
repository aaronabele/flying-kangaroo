<template>
  <div class="cocktailmixer-wrapper">
    <div class="cocktailmixer-mixer">
      <section class="cocktailmixer-mixer-section"></section>
    </div>
    <div class="cocktailmixer-mixer-second">
      <h2 class="cocktail-mixer-alc-nonalc-header">
        Choose between Alcohol and Non-Alcohol:
      </h2>
      <div class="cocktail-mixer-alc-nonalc-wrapper">
        <section
          class="cocktail-mixer-alcoholic-nonalcoholic-section"
          :for="option.strAlcoholic"
          v-for="option in computedArrAlcohol"
          :key="option.strAlcoholic"
        >
          <input class="checkbox-styling" type="checkbox" />
          <label> {{ option.strAlcoholic }}</label>
        </section>
      </div>
      <h2 class="cocktail-mixer-alc-nonalc-header">
        Choose your favorite Alcohol:
      </h2>
      <div class="cocktail-mixer-ingridients-wrapper">
        <section
          class="cocktail-mixer-alcoholic-ingridient-section"
          v-for="alcohol in computedIngridientAlcohol"
          :key="alcohol.strAlcoholic"
        >
          <img
            :src="`https://www.thecocktaildb.com/images/ingredients/${alcohol.strIngredient1}-Small.png`"
            alt=""
          />
          <label class="ingridient-label"> {{ alcohol.strIngredient1 }}</label>
          <input type="checkbox" />
        </section>
      </div>
      <h2 class="cocktail-mixer-alc-nonalc-header">
        Choose your favorite Ingridients:
      </h2>
      <div class="cocktail-mixer-ingridients-wrapper">
        <section
          class="cocktail-mixer-alcoholic-ingridient-section"
          v-for="alcohol in computedIngridientsData"
          :key="alcohol.strAlcoholic"
        >
          <img
            :src="`https://www.thecocktaildb.com/images/ingredients/${alcohol.strIngredient1}-Small.png`"
            alt=""
          />
          <label class="ingridient-label"> {{ alcohol.strIngredient1 }}</label>
          <input type="checkbox" />
        </section>
      </div>
      <div class="cocktailmixer-sum-area">
        <h2 class="cocktail-mixer-sum-header">Sum:</h2>
        <span class="cocktail-mixer-sum-amount"> $ 49.99</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sourceData: [],
      alcoholicData: [],
      ingridientsData: [],
    };
  },
  computed: {
    computedArrAlcohol() {
      return this.alcoholicData.slice(0, 2);
    },
    computedIngridientAlcohol() {
      return this.sourceData.slice(0, 10);
    },
    computedIngridientsData() {
      return this.sourceData.slice(10, 30);
    },
  },
  created() {
    fetch("https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list")
      .then((response) => response.json())
      .then((data) => (this.sourceData = data.drinks)),
      fetch("https://www.thecocktaildb.com/api/json/v2/9973533/list.php?a=list")
        .then((response) => response.json())
        .then((data) => (this.alcoholicData = data.drinks));
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.cocktailmixer-wrapper {
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  margin-bottom: 4rem;
}

.cocktailmixer-comp-main-header {
  position: absolute;
  text-align: center;
  font-size: 52px;
  padding: 1rem 0;
  font-family: "Montserrat Alternates", sans-serif;
  color: white;
  text-shadow: 5px 5px silver;
  bottom: -40px;
  left: 350px;
}

.cocktailmixer-wrapper {
  width: 1200px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}

.cocktailmixer-mixer {
  background-color: blueviolet;
}

.cocktail-mixer-alc-nonalc-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-family: "Montserrat Alternates", sans-serif;
  padding: 1rem 0rem;
}

.checkbox-styling {
  margin-right: 0.5rem;
}

.ingridient-label {
  margin-right: 0.5rem;
}

.cocktail-mixer-alcoholic-ingridient-section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 260px;
}

.cocktail-mixer-ingridients-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 260px);
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1rem;
  font-family: "Montserrat Alternates", sans-serif;
}

.cocktail-mixer-alc-nonalc-header {
  text-align: center;
  font-family: "Kaushan Script", cursive;
}

.cocktailmixer-sum-area {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding: 1rem 1rem;
  font-family: "Montserrat Alternates", sans-serif;
}

.cocktail-mixer-sum-amount {
  margin-left: 1rem;
}
</style>
