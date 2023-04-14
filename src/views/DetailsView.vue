<template>
  <div class="detail-view-wrapper">
    <div class="detail-view-positioning">
      <div class="detail-view-image">
        <img
          class="detail-view-image-size"
          :src="sourceData.strDrinkThumb"
          :alt="sourceData.strDrink"
        />
      </div>
      <div class="detail-view-text">
        <h2 class="detail-view-text-header">{{ sourceData.strDrink }}</h2>
        <p class="detail-view-text-instr">{{ sourceData.strInstructions }}</p>
        <div class="detail-view-drink-category">
          <span> <b>Category</b> </span>
          <span>{{ sourceData.strCategory }}</span>
        </div>
        <div class="detail-view-drink-price">
          <span> <b> Price</b></span>
          <span class="prize-span" @change="initChange()"
            >{{ this.selectedDrinkSize[0] }}
          </span>
        </div>
        <div class="detail-view-drink-size">
          <span class="detail-view-drink-size-header"> <b> Size</b></span>
          <div class="detail-view-drink-size-sizes">
            <span
              class="size-200"
              v-for="size in drinkSize"
              :key="size"
              @click="select(size)"
              :class="[
                this.selectedDrinkSize.includes(size.price)
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

export default {
  components: {
    SiteSeperatorComp,
  },
  data() {
    return {
      sourceData: [],
      drinkSize: [
        { id: 1, label: "200 ml", price: "10.00 €" },
        { id: 2, label: "400 ml", price: "12.00 €" },
      ],
      selectedDrinkSize: ["Select your Size"],
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
  computed: {},
  methods: {
    select(size) {
      this.selectedDrinkSize.push(size.price);
      if (this.selectedDrinkSize.length === 2) {
        return this.selectedDrinkSize.splice(-2, 1);
      }
    },
    initChange() {
      let initText = "Select your Size";
      if (this.selectedDrinkSize === 0) {
        this.selectedDrinkSize = initText;
      }
    },
    pushItemIntoCartItems() {
      if (this.selectedDrinkSize[0] === "Select your Size") {
        alert("Please select a Drink Size");
        return;
      } else {
        this.cartItems.push(
          this.sourceData.strDrink,
          this.sourceData.strDrinkThumb,
          this.selectedDrinkSize
        );
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.detail-view-wrapper {
  width: 1200px;
  margin-top: 4rem;
  margin-bottom: 8rem;
  margin-left: auto;
  margin-right: auto;
  outline: 1px solid lightgray;
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
  color: white;
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
  border: 1px solid lightgray;
}

.detail-view-text {
  font-family: "Montserrat Alternates", sans-serif;
  position: relative;
  height: 100%;
}

.detail-view-text-header {
  font-family: "Kaushan Script", cursive;
}

.detail-view-siteseperator-wrapper {
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 1.2rem;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 400px;
}

.detail-view-siteseperator-template {
  margin-bottom: 8rem;
}

.detail-view-siteseperator-header {
  font-family: "Kaushan Script", cursive;
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
  color: white;
  text-shadow: 0 0 3px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px yellow,
    0 0 82px yellow, 0 0 92px yellow, 0 0 102px yellow, 0 0 151px yellow;
  font-size: 1.4rem;
  margin-top: 3rem;
  padding: 1.5rem;
  border: 3px solid white;
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
  background-color: lightgray;
}
</style>
