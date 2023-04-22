<template>
  <header id="header">
    <nav class="header-comp-navigation">
      <div class="header-comp-navigation-delivery">
        <span class="header-comp-navigation-delivery-info"
          >Don't dink and drive, call kangaroo and fly. 🚚 guaranteed within 30
          minutes. If not, we pay for you ❤️</span
        >
      </div>
      <ul class="header-comp-navigation-ul">
        <div class="header-comp-navigation-positioning">
          <li class="header-comp-navigation-ul-li-company">
            <router-link to="/">flying-kangaroo</router-link>
          </li>
          <li class="header-comp-navigation-ul-li">
            <router-link to="/">Home</router-link>
          </li>
          <li class="header-comp-navigation-ul-li">
            <router-link to="/cocktails">Cocktails</router-link>
          </li>
          <li class="header-comp-navigation-ul-li">
            <router-link to="/cocktail-mixer">Cocktail-Mixer</router-link>
          </li>
          <li class="header-comp-navigation-ul-li">
            <router-link to="/about-us">About Us</router-link>
          </li>
          <li class="header-comp-navigation-ul-li">
            <router-link to="/contact">Contact</router-link>
          </li>
        </div>
        <div
          class="header-comp-navigation-ul-li header-comp-navigation-positioning"
        >
          <li>
            <img src="@/assets/lupe.png" alt="Lupe weiß" />
          </li>
          <li>
            <router-link to="/cart">
              <img
                src="@/assets/einkaufstasche.png"
                alt="Einkaufstasche weiß"
                class="cart-class"
              />

              {{ showCartLength }}
            </router-link>
          </li>
        </div>
      </ul>
    </nav>
    <router-view />
  </header>
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
  computed: {
    showCartLength() {
      let sum = 0;
      sum +=
        this.IngredientStore.completeCocktail.length +
        this.ProductStore.productCocktail.length;
      return sum;
    },
  },
};
</script>

<style scoped>
#header {
  width: 100%;
}

nav {
  background-color: var(--primary-background-color);
  height: 6rem;
}

nav a {
  color: var(--secondary-color);
  text-decoration: none;
}

.header-comp-navigation-delivery {
  color: var(--secondary-color);
  font-weight: 100;
  font-family: var(--primary-font-family);
  background-color: var(--secondary-background-color);
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

nav a.router-link-exact-active {
  text-decoration: none;
  color: var(--secondary-color);
  font-weight: bold;
}

.header-comp-navigation-positioning {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1.2rem;
}

.header-comp-navigation-ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0;
  padding: 1rem;
  width: var(--general-width);
  margin-left: auto;
  margin-right: auto;
}

.header-comp-navigation-ul-li {
  list-style-type: none;
  color: var(--secondary-color);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 100;
  font-family: var(--primary-font-family);
}

.header-comp-navigation-ul-li:after {
  display: block;
  content: "";
  border-bottom: solid 2px var(--secondary-color);
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}

.header-comp-navigation-ul-li:hover:after {
  transform: scaleX(1);
}

.header-comp-navigation-ul-li-company {
  list-style-type: none;
  color: var(--secondary-color);
  letter-spacing: 0.2em;
  font-family: var(--secondary-font-family);
  font-weight: bold;
  text-transform: lowercase;
  font-size: 1.3rem;
  padding-bottom: 0.5rem;
}
</style>
