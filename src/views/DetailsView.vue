<template>
  <div class="detail-view-wrapper">
    <div class="detail-view-positioning">
      <div class="detail-view-image">
        <img
          class="detail-view-image-size"
          :src="this.sourceData.strDrinkThumb"
          :alt="this.sourceData.strDrink"
        />
      </div>
      <div class="detail-view-text">
        <h2 class="detail-view-text-header">
          {{ sourceData.strDrink }}
        </h2>
        <p class="detail-view-text-instr">
          {{ sourceData.strInstructions }}
        </p>
        <div class="detail-view-drink-category">
          <span> <b>Category</b> </span>
          <span>{{ sourceData.strCategory }}</span>
        </div>
        <div class="detail-view-drink-price">
          <span> <b> Price</b></span>
          <span
            class="prize-span"
            v-if="ProductStore.selectedDrinkSize[0] === 'Select your Size'"
            >Select your Size
          </span>
          <span class="prize-span" v-else
            >{{
              new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(ProductStore.selectedDrinkSize[0])
            }}
          </span>
        </div>
        <div class="detail-view-drink-size">
          <span class="detail-view-drink-size-header"> <b> Size</b></span>
          <div class="detail-view-drink-size-sizes">
            <span
              class="size-200"
              v-for="size in ProductStore.drinkSize"
              :key="size"
              @click="ProductStore.select(size)"
              :class="[
                ProductStore.selectedDrinkSize.includes(size.price)
                  ? 'btn-selected'
                  : '',
              ]"
            >
              {{ size.label }}</span
            >
          </div>
        </div>
        <button class="detail-view-btn" @click="pushItemIntoCartItems()">
          Add to cart
        </button>
      </div>
    </div>
  </div>
  <SiteSeperatorComp class="detail-view-siteseperator-template">
    <template #siteseperator-slot>
      <div class="detail-view-siteseperator-wrapper">
        <span class="detail-view-siteseperator-header"
          >You still couldn't find what you are looking for?</span
        >
        <div class="detail-view-section">
          <span>Try out our brand new Cocktail Mixer</span>
          <router-link class="detail-view-router-link" to="/cocktail-mixer"
            >Create it your way</router-link
          >
        </div>
        <img
          class="detail-view-siteseperator-image-styling"
          src="@/assets/cocktail-mixen.png"
          alt="cocktail summer"
        />
      </div>
    </template>
  </SiteSeperatorComp>
</template>

<script>
import SiteSeperatorComp from "@/components/SiteSeperatorComp.vue";
import { useProductStore } from "@/stores/ProductStore.js";

export default {
  setup() {
    const ProductStore = useProductStore();
    return { ProductStore };
  },
  components: {
    SiteSeperatorComp,
  },
  data() {
    return {
      sourceData: [],
      cartItems: [],
    };
  },
  created() {
    fetch(
      "https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=" +
        this.$route.params.id
    )
      .then((response) => response.json())
      .then((data) => (this.sourceData = data.drinks[0]));
  },
  methods: {
    pushItemIntoCartItems() {
      if (this.ProductStore.selectedDrinkSize[0] === "Select your Size") {
        alert("Please select a Drink Size");
        return;
      } else {
        this.cartItems.push({
          name: this.sourceData.strDrink,
          pic: this.sourceData.strDrinkThumb,
          price: this.ProductStore.selectedDrinkSize,
          quantity: 1,
        });
        this.ProductStore.sendCocktail(this.cartItems);
      }
    },
  },
};
</script>

<style scoped>
.detail-view-wrapper {
  width: var(--general-width);
  margin-top: 4rem;
  margin-bottom: 8rem;
  margin-left: auto;
  margin-right: auto;
  outline: 1px solid var(--third-background-color);
  padding: 1rem;
}

.detail-view-positioning {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  justify-content: center;
  align-items: flex-start;
}

.detail-view-image-size {
  width: 500px;
  height: auto;
}

.detail-view-btn {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 3rem;
  border: none;
  background-color: rgb(26, 26, 81);
  color: var(--secondary-color);
  margin: 1rem 0rem;
  cursor: pointer;
}

.detail-view-drink-price,
.detail-view-drink-category,
.detail-view-drink-size {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  line-height: 1.5rem;
  margin-top: 2rem;
}

.size-200,
.size-400 {
  margin-right: 1rem;
  padding: 0.3rem;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid var(--third-background-color);
}

.detail-view-text {
  font-family: var(--primary-font-family);
  position: relative;
  height: 100%;
}

.detail-view-text-header {
  font-family: var(--secondary-font-family);
}

.detail-view-siteseperator-wrapper {
  font-family: var(--primary-font-family);
  font-size: 1.2rem;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: var(--banner-height);
}

.detail-view-siteseperator-template {
  margin-bottom: 8rem;
}

.detail-view-siteseperator-header {
  font-family: var(--secondary-font-family);
  font-size: 2rem;
  letter-spacing: 0.2rem;
  text-shadow: 0 0 1px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px turquoise,
    0 0 10px turquoise, 0 0 90px turquoise, 0 0 4px turquoise,
    0 0 10px turquoise;
}

.detail-view-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  padding: 2.5rem;
}

.detail-view-router-link {
  text-decoration: none;
  color: var(--secondary-color);
  text-shadow: 0 0 3px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px yellow,
    0 0 82px yellow, 0 0 92px yellow, 0 0 102px yellow, 0 0 151px yellow;
  font-size: 1.4rem;
  margin-top: 3rem;
  padding: 1.5rem;
  border: 3px solid var(--secondary-color);
  border-radius: 15px;
}

.detail-view-siteseperator-image-styling {
  position: absolute;
  bottom: 15%;
  left: 20%;
  width: 350px;
  height: auto;
}

.detail-view-drink-size-header {
  margin-bottom: 1rem;
}

.btn-selected {
  background-color: var(--third-background-color);
}
</style>
