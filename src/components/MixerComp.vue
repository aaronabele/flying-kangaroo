<template>
  <div class="cocktailmixer-wrapper">
    <div class="cocktailmixer-mixer">
      <section class="cocktailmixer-mixer-section">
        <div
          v-for="ingredient in itemBackgroundColor"
          :key="ingredient"
          class="cocktail-mixer-block"
          :style="{ backgroundColor: ingredient }"
        ></div>
      </section>
    </div>
    <div class="cocktailmixer-mixer-second">
      <h2 class="cocktail-mixer-alc-nonalc-header">
        1. Choose between Alcohol and Non-Alcohol:
      </h2>
      <div class="cocktail-mixer-alc-nonalc-wrapper">
        <section
          class="cocktail-mixer-alcoholic-nonalcoholic-section"
          :for="option.strAlcoholic"
          v-for="option in slicedDrinkCategory"
          :key="option.strAlcoholic"
        >
          <input
            class="checkbox-styling"
            type="checkbox"
            :id="option.strAlcoholic"
            :value="option.strAlcoholic"
            v-model="selectedCheckboxes"
          />
          <label> {{ option.strAlcoholic }}</label>
        </section>
      </div>
      <h2 class="cocktail-mixer-alc-nonalc-header">
        2. Choose up to 5 Ingredients:
      </h2>
      <div class="cocktail-mixer-ingridients-wrapper">
        <section
          class="cocktail-mixer-alcoholic-ingridient-section"
          v-for="(value, key) in ingredients"
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
                  @change="inputQuantityPrice(item)"
                  :id="item.id"
                  @input="handleInput"
                />
                {{ item.price }} € per unit | <b>{{ item.name }}</b>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="cocktailmixer-sum-area">
        <div class="sum-and-amount">
          <div class="quantity-area">
            <h3>Quantity:</h3>
            <span class="cocktail-mixer-sum-amount"
              >{{ this.itemQuantity.length }} Items</span
            >
          </div>
          <div class="ingredients-area">
            <h3>Selected:</h3>
            <span
              class="selected-item-styling"
              v-for="ingredient in itemQuantity"
              :key="ingredient"
            >
              {{ ingredient }},
            </span>
          </div>
          <div class="sum-area">
            <h3 class="cocktail-mixer-sum-header">Sum:</h3>
            <span class="cocktail-mixer-sum-amount"> {{ this.sum }} €</span>
          </div>
        </div>
        <button class="btn">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from "@/db.json";

export default {
  data() {
    return {
      ingredients: sourceData.ingredients,
      drinkCategory: [],
      itemQuantity: [],
      itemPrice: [],
      itemBackgroundColor: [],
      sum: 0,
      selectedCheckboxes: [],
    };
  },
  methods: {
    inputQuantityPrice(item) {
      if (this.itemQuantity.length < 5) {
        this.itemQuantity.push(item.name);
        this.itemPrice.push(item.price);
        this.itemBackgroundColor.push(item.color);
        this.sum = Number(this.sum) + Number(item.price);
      } else {
        alert("You have picked the maximum amount of Ingredients");
      }
    },
    handleInput(event) {
      if (event.target.value < 1) {
        alert("Please put in a valid Quantity (>= 1)");
      }
    },
  },
  computed: {
    slicedDrinkCategory() {
      return this.drinkCategory.slice(0, 2);
    },
  },
  watch: {
    selectedCheckboxes(newValue) {
      if (newValue.length === 2) {
        this.selectedCheckboxes.splice(-2, 1);
      }
    },
  },
  created() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list")
      .then((response) => response.json())
      .then((data) => (this.drinkCategory = data.drinks));
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

.cocktailmixer-mixer-section {
  margin-top: 1rem;
  border-left: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  height: 1000px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
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
  width: 500px;
}

.cocktail-mixer-block {
  height: 200px;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cocktail-mixer-alc-nonalc-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  font-family: "Montserrat Alternates", sans-serif;
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
  font-family: "Montserrat Alternates", sans-serif;
}

.cocktail-mixer-alc-nonalc-header {
  text-align: center;
  font-family: "Kaushan Script", cursive;
  background-color: #2a363c;
  color: white;
  padding: 3rem 0rem;
}

.item-header-styling {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0rem 1rem;
  border-bottom: 1px solid lightgray;
}

.cocktailmixer-sum-area {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 1rem 1rem;
  font-family: "Montserrat Alternates", sans-serif;
}

.cocktail-mixer-sum-amount {
  margin-left: 2rem;
  font-size: 18px;
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
  color: white;
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
