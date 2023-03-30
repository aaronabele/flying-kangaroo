<template>
  <HeaderComp />
  <BannerComp class="banner-comp-styling" />
  <CocktailCategorieComp />
  <FooterComp />
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";
import BannerComp from "./components/BannerComp.vue";
import CocktailCategorieComp from "./components/CocktailCategorieComp.vue";

export default {
  components: {
    HeaderComp,
    FooterComp,
    BannerComp,
    CocktailCategorieComp,
  },
};
</script>

<style>
html {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
}

.banner-comp-styling {
  margin-bottom: 3rem;
}
</style>
