<template>
  <h1 class="cart-header">Cart</h1>
  <section class="cart-section">
    <div class="cart-section-pos-divs">
      <div class="cart-section-cart-wrapper">
        <div>
          <div
            class="cart-section-items"
            v-for="(item, index) in IngredientStore.completeCocktail"
            :key="item.id"
          >
            <div>
              <img
                class="cart-section-image"
                src="@/assets/examplecocktail.png"
                alt="example cocktail"
              />
            </div>
            <div class="section-title-ingredient">Ingredients: &nbsp;</div>
            <div class="wrapper">
              <p></p>
              <div
                class="cart-section-item-details"
                v-for="ingredient in item"
                :key="ingredient"
              >
                <div class="cart-section-item-details-wrapper">
                  <div class="cart-wrapper-styling">
                    {{ ingredient.quantity }}x &nbsp;
                    <div class="cart-price">
                      {{
                        new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "EUR",
                        }).format(ingredient.ingredient.price)
                      }}
                    </div>
                    &nbsp;
                    <div
                      class="div-color"
                      style="width: 20px; height: 20px"
                      :style="{
                        'background-color': ingredient.ingredient.color,
                      }"
                    ></div>
                    &nbsp;
                    {{ ingredient.ingredient.name }} &nbsp;
                  </div>
                </div>
              </div>
              <div class="qty-del-subtotal">
                <div>
                  <label>Qty&nbsp;&nbsp;</label>
                  <input class="input-styling" type="number" v-model="qty" />
                  <button class="btn-delete" @click="deleteItem(index)">
                    delete
                  </button>
                </div>
                <div>
                  <span
                    >subtotal:
                    {{
                      new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR",
                      }).format(showPrice(item))
                    }}</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="product-section">
            <div
              class="single-product"
              v-for="product in this.ProductStore.productCocktail"
              :key="product"
            >
              <div v-for="item in product" :key="item">
                <div class="product-wrapper">
                  <div class="product-image-section">
                    <img
                      class="product-section-image"
                      :src="item.pic"
                      :alt="item.name"
                    />
                  </div>
                  <div class="product-details-section">
                    <div class="product-details-title"><b>Cocktail:</b></div>
                    <div class="product-details-details">
                      <div class="product-details-item">{{ item.name }}</div>
                      <div class="product-details-price">
                        Price per drink: {{ item.price[0] }}
                      </div>
                      <div class="product-details-qty-del-sub">
                        <div>
                          Qty
                          <input
                            type="number"
                            :value="item.quantity"
                            class="input-styling"
                          />
                          <button
                            class="btn-delete"
                            @click="deleteProduct(index)"
                          >
                            delete
                          </button>
                        </div>
                        <span>subtotal: {{ item.price[0] }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-section-total-wrapper">
        <div class="section-price-section">
          <span class="cart-section-total">Total</span>
          <span class="cart-section-sum">{{ calculateSum }}</span>
        </div>
        <div class="section-btn-section">
          <button class="btn-checkout">Check out</button>
          <router-link to="/cocktails" class="router-continue-shopping"
            >Continue shopping</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useIngredientStore } from "@/stores/IngredientStore.js";
import { useProductStore } from "@/stores/ProductStore";

export default {
  setup() {
    const IngredientStore = useIngredientStore();
    const ProductStore = useProductStore();
    return { IngredientStore, ProductStore };
  },
  data() {
    return {
      qty: 1,
    };
  },
  computed: {
    calculateSum() {
      let sum = 0;
      this.IngredientStore.completePrice.forEach((item) => {
        sum += item;
      });
      this.ProductStore.productCocktail.forEach((product) => {
        product.forEach((productPrice) => {
          console.log(productPrice.quantity);
          sum += +productPrice.price[0].split("€").join("");
        });
      });
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(sum);
    },
  },
  methods: {
    deleteItem(index) {
      this.IngredientStore.completePrice.splice(index, 1);
      this.IngredientStore.completeCocktail.splice(index, 1);
    },
    deleteProduct(index) {
      this.ProductStore.productCocktail.splice(index, 1);
    },
    showPrice(item) {
      let result = 0;
      item.forEach((ingredient) => {
        result += ingredient.ingredient.price * ingredient.quantity;
      });
      return result;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.cart-header {
  text-align: center;
  font-family: "Kaushan Script", cursive;
  font-size: 3rem;
}
.cart-section {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
}

.cart-section-pos-divs {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1;
}

.cart-section-image {
  width: 100px;
  height: auto;
  margin-right: 2rem;
}
.cart-section-items {
  position: relative;
  width: 700px;
  height: 190px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  outline: 1px solid lightgray;
  padding: 0.5rem;
  margin: 1rem 0;
}

.cart-section-total-wrapper {
  padding: 1rem;
  margin: 1rem 0;
  width: 350px;
  height: 350px;
  font-family: "Montserrat Alternates", sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: rgb(232, 232, 232);
}

.section-price-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

.section-btn-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.cart-section-total {
  font-size: 3rem;
}

.cart-section-sum {
  font-size: 1.8rem;
}

.btn-checkout {
  width: 100%;
  height: 40px;
  background-color: rgb(26, 26, 81);
  color: white;
}

.router-continue-shopping {
  width: 100%;
  height: 40px;
  border: 1px solid black;
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-title-ingredient {
  font-family: "Kaushan Script", cursive;
  font-weight: 800;
}

.cart-wrapper-styling {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.2rem;
  font-family: "Montserrat Alternates", sans-serif;
}

.input-styling {
  width: 30px;
  margin-right: 0.5rem;
  font-family: "Montserrat Alternates", sans-serif;
}

.btn-delete {
  background-color: transparent;
  text-decoration: underline;
  border: none;
  padding: 0.2rem;
  border-radius: 10px;
  font-family: "Montserrat Alternates", sans-serif;
  margin-right: 0.5rem;
  cursor: pointer;
}

.qty-del-subtotal {
  position: absolute;
  padding: 1rem;
  right: 0px;
  bottom: 0px;
  width: 450px;
  font-family: "Montserrat Alternates", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-price {
  width: 60px;
}

.product-wrapper {
  position: relative;
  width: 700px;
  height: 190px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  outline: 1px solid lightgray;
  padding: 0.5rem;
  margin: 1rem 0;
}

.product-image-section {
  width: 150px;
  height: 100%;
  margin-right: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-section-image {
  width: 120px;
  height: auto;
}

.product-details-section {
  width: 90%;
  height: 100%;
  font-family: "Montserrat Alternates", sans-serif;
}

.product-details-details {
  margin-left: 5rem;
}

.product-details-item,
.product-details-price {
  margin-bottom: 0.2rem;
}

.product-details-qty-del-sub {
  position: absolute;
  padding: 1rem;
  right: 0px;
  bottom: 0px;
  width: 450px;
  font-family: "Montserrat Alternates", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-details-title {
  font-family: "Kaushan Script", cursive;
}
</style>
