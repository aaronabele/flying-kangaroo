<template>
  <BannerComp class="banner-comp-styling" />
  <CocktailCategorieComp />
  <SiteSeperatorComp />
  <ThreeColsComp />
  <DiashowComp />
</template>

<script>
import BannerComp from "@/components/BannerComp.vue";
import CocktailCategorieComp from "@/components/CocktailCategorieComp.vue";
import SiteSeperatorComp from "@/components/SiteSeperatorComp.vue";
import ThreeColsComp from "@/components/ThreeColsComp.vue";
import DiashowComp from "@/components/DiashowComp.vue";

export default {
  name: "HomeView",
  components: {
    BannerComp,
    CocktailCategorieComp,
    SiteSeperatorComp,
    ThreeColsComp,
    DiashowComp,
  },
};
</script>

<style>
.banner-comp-styling {
  margin-bottom: 3rem;
}
</style>
