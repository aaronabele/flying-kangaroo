<template>
  <div class="cocktailmixer-wrapper">
    <div class="cocktailmixer-mixer">
      <section class="cocktailmixer-mixer-section">
        <div
          v-for="cocktailIngredient in IngredientStore.cocktail"
          :key="cocktailIngredient.ingredient.id"
          class="cocktail-mixer-block"
          :style="{
            '--ingredient-color': cocktailIngredient.ingredient.color,
            '--units': cocktailIngredient.quantity,
          }"
        ></div>
      </section>
      <img class="cocktail-glass" src="@/assets/pngwing.com.png" alt="glas" />
      <img class="cocktail-straw" src="@/assets/straw.png" alt="straw" />
      <img
        class="cocktail-icecubes"
        src="@/assets/icecubes.png"
        alt="ice cubes"
      />
    </div>
    <div class="cocktailmixer-mixer-second">
      <h2 class="cocktail-mixer-alc-nonalc-header">
        1. Choose between Alcoholic and Non-Alcoholic:
      </h2>
      <div class="cocktail-mixer-alc-nonalc-wrapper">
        <section class="cocktail-mixer-alcoholic-nonalcoholic-section">
          <input
            class="checkbox-styling"
            type="checkbox"
            v-model="IngredientStore.nonAlcoholic"
          />
          <label> Non-Alcoholic</label>
        </section>
      </div>
      <h2 class="cocktail-mixer-alc-nonalc-header">
        2. Choose up to 5 Ingredients (multiple units possible):
      </h2>
      <form class="cocktail-mixer-ingridients-wrapper" ref="ingredientsForm">
        <section
          class="cocktail-mixer-alcoholic-ingridient-section"
          v-for="(value, key) in filteredIngredients"
          :key="key"
        >
          <div class="item-header-styling">
            <h2 class="key-styling">{{ key }}</h2>
          </div>
          <div class="item-wrapper">
            <div class="item-styling" v-for="item in value" :key="item.id">
              <div class="item-size">
                <input
                  class="input-styling"
                  type="text"
                  placeholder="0"
                  @change="IngredientStore.inputQuantityPrice(item, $event)"
                  :id="item.id"
                  data-cy="ingredient-quantity-input"
                />
                {{ item.price }} € per unit | <b>{{ item.name }}</b>
              </div>
            </div>
          </div>
        </section>
      </form>
      <div class="cocktailmixer-sum-area" data-cy="cocktailmixer-summary-area">
        <div class="sum-and-amount">
          <div class="quantity-area">
            <h3>Quantity:</h3>
            <span class="cocktail-mixer-sum-amount"
              >{{ IngredientStore.cocktail.length }} Ingredients</span
            >
            &nbsp;
            <span class="cocktail-mixer-sum-amount">
              {{ IngredientStore.cocktailUnits }} Units</span
            >
          </div>
          <div class="ingredients-area">
            <h3>Selected:</h3>
            <span class="selected-item-styling">
              {{ IngredientStore.selectedIngredients }}
            </span>
          </div>
          <div class="sum-area">
            <h3 class="cocktail-mixer-sum-header">Sum:</h3>
            <span class="cocktail-mixer-sum-amount">
              {{
                new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "EUR",
                }).format(IngredientStore.cocktailPrice)
              }}
            </span>
          </div>
        </div>
        <button
          class="btn"
          data-cy="add-to-cart-btn"
          @click="addCocktailToCart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useIngredientStore } from "@/stores/IngredientStore.js";

export default {
  setup() {
    const IngredientStore = useIngredientStore();
    return { IngredientStore };
  },
  methods: {
    addCocktailToCart() {
      this.IngredientStore.isSendingCocktail();
      this.$refs.ingredientsForm.reset();
    },
  },
  computed: {
    filteredIngredients() {
      if (this.IngredientStore.nonAlcoholic === true) {
        const copy = {};

        for (let key of Object.keys(this.IngredientStore.ingredients)) {
          const filtered = this.IngredientStore.ingredients[key].filter(
            (item) => item.category === "non-alcoholic"
          );
          if (filtered.length > 0) {
            copy[key] = filtered;
          }
        }
        return copy;
      } else {
        // return all ingredient
        return this.IngredientStore.ingredients;
      }
    },
  },
};
</script>

<style>
.cocktailmixer-wrapper {
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  margin-bottom: 4rem;
}

.cocktailmixer-mixer-section {
  margin-top: 1rem;
  height: 692px;
  width: 405px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column-reverse;
  z-index: 1;
  position: absolute;
  top: 196px;
  left: 47px;
}

.cocktailmixer-comp-main-header {
  position: absolute;
  text-align: center;
  font-size: 52px;
  padding: 1rem 0;
  font-family: var(--primary-font-family);
  color: var(--secondary-color);
  text-shadow: 5px 5px silver;
  bottom: -40px;
  left: 350px;
}

.cocktailmixer-wrapper {
  width: var(--general-width);
  height: auto;
  margin-left: auto;
  margin-right: auto;
}

.cocktailmixer-mixer {
  width: 500px;
  position: relative;
}

.cocktail-mixer-block {
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  background-color: var(--ingredient-color);
  flex-grow: var(--units, 1);
  margin-right: 20rem;
  overflow: hidden;
}

.cocktail-glass {
  width: 420px;
  height: auto;
  z-index: 2;
  position: absolute;
  top: 182px;
  right: 40px;
  margin-right: 10rem;
}

.cocktail-straw {
  z-index: 1;
  width: 600px;
  height: auto;
  position: absolute;
  right: 257px;
  top: 50px;
  rotate: 150deg;
}

.cocktail-icecubes {
  z-index: 10;
  width: 400px;
  height: auto;
  position: absolute;
  top: 344px;
  right: 210px;
  rotate: 180deg;
}

.cocktail-mixer-alc-nonalc-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  font-family: var(--primary-font-family);
  padding: 1rem;
}

.checkbox-styling {
  margin-right: 0.5rem;
}

.ingridient-label {
  margin-right: 0.5rem;
}

.cocktail-mixer-alcoholic-ingridient-section {
  width: 800px;
}

.item-size {
  width: 400px;
}

.item-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 0.2rem;
  padding: 1rem;
}

.cocktail-mixer-ingridients-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 800px;
  height: auto;
  font-family: var(--primary-font-family);
}

.cocktail-mixer-alc-nonalc-header {
  text-align: center;
  font-family: var(--secondary-font-family);
  background-color: var(--primary-background-color);
  color: var(--secondary-color);
  padding: 3rem 0rem;
}

.item-header-styling {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0rem 1rem;
  border-bottom: 1px solid var(--third-background-color);
}

.cocktailmixer-sum-area {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 1rem 1rem;
  font-family: var(--primary-font-family);
}

.cocktail-mixer-sum-amount {
  margin-left: 2rem;
  font-size: 1.2rem;
  font-weight: 400;
}

.key-styling {
  text-transform: uppercase;
}

.input-styling {
  width: 2rem;
}

.sum-and-amount {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.btn {
  width: 100%;
  height: 3rem;
  border: none;
  background-color: rgb(26, 26, 81);
  color: var(--secondary-color);
  margin: 1rem 0rem;
  cursor: pointer;
}

.sum-area,
.quantity-area {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ingredients-area {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.selected-item-styling {
  margin-left: 0.5rem;
}
</style>
