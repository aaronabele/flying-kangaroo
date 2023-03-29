<template>
  <HeaderComp />
  <BannerComp />
  <FooterComp />
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";
import BannerComp from "./components/BannerComp.vue";

export default {
  components: {
    HeaderComp,
    FooterComp,
    BannerComp,
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
</style>
