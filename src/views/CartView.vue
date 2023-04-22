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
                  <input
                    class="input-styling"
                    data-cy="drink-quantity"
                    type="number"
                    v-model.number="item[item.length - 1].totalQuantity"
                  />
                  <button
                    class="btn-delete"
                    data-cy="delete-item-btn"
                    @click="IngredientStore.deleteItem(index)"
                  >
                    delete
                  </button>
                </div>
                <div>
                  <span>
                    subtotal:
                    <span data-cy="subtotal-of-a-drink">
                      {{
                        new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "EUR",
                        }).format(IngredientStore.showSubtotalIngredients(item))
                      }}</span
                    ></span
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
                        Price per drink:
                        {{
                          new Intl.NumberFormat("de-DE", {
                            style: "currency",
                            currency: "EUR",
                          }).format(item.price[0])
                        }}
                      </div>
                      <div class="product-details-qty-del-sub">
                        <div>
                          Qty
                          <input
                            type="number"
                            min="0"
                            max="10"
                            v-model="item.quantity"
                            class="input-styling"
                          />
                          <button
                            class="btn-delete"
                            @click="ProductStore.deleteProduct(index)"
                          >
                            delete
                          </button>
                        </div>
                        <span
                          >subtotal:
                          {{
                            new Intl.NumberFormat("de-DE", {
                              style: "currency",
                              currency: "EUR",
                            }).format(ProductStore.showSubtotalProducts(item))
                          }}</span
                        >
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
          <span class="cart-section-sum">{{
            new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(calculateTotalSum)
          }}</span>
        </div>
        <div class="section-btn-section">
          <button class="btn-checkout">Check out</button>
          <router-link to="/cocktails" class="router-continue-shopping"
            >Continue shopping</router-link
          >
        </div>
      </div>
    </div>
    <SiteSeperatorComp class="cartview-siteseperator-styling">
      <template #siteseperator-slot>
        <div class="cartview-enjoy-your-drinks">
          <img
            class="cartview-img-styling"
            src="@/assets/Pop-art-girl-drinks-cocktail-and-shows-sign-ok-on-transparent-background-PNG.png"
            alt="pop art girl drinking cocktail"
          />
          <div class="cartview-cloud"></div>
          <div class="cartview-text-wrapper">
            <span class="cartview-text">Enjoy your Drinks!</span>
          </div>
        </div>
      </template>
    </SiteSeperatorComp>
  </section>
</template>

<script>
import { useIngredientStore } from "@/stores/IngredientStore.js";
import { useProductStore } from "@/stores/ProductStore";
import SiteSeperatorComp from "@/components/SiteSeperatorComp.vue";

export default {
  components: { SiteSeperatorComp },
  setup() {
    const IngredientStore = useIngredientStore();
    const ProductStore = useProductStore();
    return { IngredientStore, ProductStore };
  },
  computed: {
    calculateTotalSum() {
      let ProductSum = this.ProductStore.calculateSubtotalProducts;
      let Ingredientsum = this.IngredientStore.calculateSubtotalIngredients;
      let totalsum = 0;
      totalsum += ProductSum + Ingredientsum;
      return totalsum;
    },
  },
};
</script>

<style>
.cartview-enjoy-your-drinks {
  position: relative;
}

.cartview-siteseperator-styling {
  margin-top: 5em;
}

.cartview-img-styling {
  position: absolute;
  width: 450px;
  height: auto;
  top: -146px;
  left: 100px;
}

.cartview-text-wrapper {
  width: max-content;
  position: absolute;
  right: 100px;
  top: 20px;
  rotate: 15deg;
  padding: 2rem;
  border-radius: 100px 50px 100px 150px;
  background-color: var(--white-background-color);
  outline: 5px solid var(--primary-color);
}

.cartview-cloud {
  width: 2rem;
  height: 2rem;
  background-color: var(--white-background-color);
  outline: 2px solid var(--primary-color);
  border-radius: 100px 50px 100px 150px;
  position: absolute;
  left: 390px;
}

.cartview-text {
  font-size: 5rem;
  font-family: var(--secondary-font-family);
  color: var(--primary-color);
}

.cart-header {
  text-align: center;
  font-family: var(--secondary-font-family);
  font-size: 3rem;
}
.cart-section {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
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
  outline: 1px solid var(--third-background-color);
  padding: 0.5rem;
  margin: 1rem 0;
}

.cart-section-total-wrapper {
  padding: 1rem;
  margin: 1rem 0;
  width: 350px;
  height: 350px;
  font-family: var(--primary-font-family);
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
  color: var(--secondary-color);
}

.router-continue-shopping {
  width: 100%;
  height: 40px;
  border: 1px solid var(--primary-color);
  text-decoration: none;
  color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-title-ingredient {
  font-family: var(--secondary-font-family);
  font-weight: 800;
}

.cart-wrapper-styling {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.2rem;
  font-family: var(--primary-font-family);
}

.input-styling {
  width: 30px;
  margin-right: 0.5rem;
  font-family: var(--primary-font-family);
}

.btn-delete {
  background-color: transparent;
  text-decoration: underline;
  border: none;
  padding: 0.2rem;
  border-radius: 10px;
  font-family: var(--primary-font-family);
  margin-right: 0.5rem;
  cursor: pointer;
}

.qty-del-subtotal {
  position: absolute;
  padding: 1rem;
  right: 0px;
  bottom: 0px;
  width: 450px;
  font-family: var(--primary-font-family);
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
  outline: 1px solid var(--third-background-color);
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
  font-family: var(--primary-font-family);
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
  font-family: var(--primary-font-family);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-details-title {
  font-family: var(--secondary-font-family);
}
</style>
