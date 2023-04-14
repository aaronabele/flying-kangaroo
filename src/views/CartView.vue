<template>
  <h1 class="cart-header">Cart</h1>
  <section class="cart-section">
    <div class="cart-section-pos-divs">
      <div class="cart-section-cart-wrapper">
        <div>
          <div
            class="cart-section-items"
            v-for="item in IngredientStore.completeCocktail"
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

                    {{
                      new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR",
                      }).format(ingredient.ingredient.price)
                    }}
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
                  <button class="btn-delete">delete</button>
                </div>
                <div>
                  <span>subtotal: 10.00 €</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-section-total-wrapper">
        <div class="cart-section-total">Subtotal {{ calculateSum }}</div>
        <button>Check out</button>
        <button>Continue shopping</button>
      </div>
    </div>
  </section>
</template>

<script>
import { useIngredientStore } from "@/stores/IngredientStore.js";
export default {
  setup() {
    const IngredientStore = useIngredientStore();
    return { IngredientStore };
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
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(sum);
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
  outline: 1px solid lightgray;
  padding: 0.5rem;
  margin: 1rem 0;
  width: 350px;
  height: 350px;
}

.section-title-ingredient {
  font-family: "Montserrat Alternates", sans-serif;
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
</style>
