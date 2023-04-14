<template>
  <BannerComp class="banner-comp-styling" />
  <CocktailCategorieComp />
  <SiteSeperatorComp />
  <ThreeColsComp />
  <DiashowComp :slides="slides"> </DiashowComp>
</template>

<script>
import BannerComp from '@/components/BannerComp.vue'
import CocktailCategorieComp from '@/components/CocktailCategorieComp.vue'
import SiteSeperatorComp from '@/components/SiteSeperatorComp.vue'
import ThreeColsComp from '@/components/ThreeColsComp.vue'
import DiashowComp from '@/components/DiashowComp.vue'

export default {
  name: 'HomeView',
  components: {
    BannerComp,
    CocktailCategorieComp,
    SiteSeperatorComp,
    ThreeColsComp,
    DiashowComp
  },
  data() {
    return {
      slides: []
    }
  },
  computed: {
    comptedArr() {
      return this.slides.slice(0, 5)
    }
  },
  created() {
    fetch('https://www.thecocktaildb.com/api/json/V2/9973533/randomselection.php')
      .then((response) => response.json())
      .then((data) => (this.slides = data.drinks))
  }
}
</script>

<style>
.banner-comp-styling {
  margin-bottom: 3rem;
}
</style>
