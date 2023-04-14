<template>
  <HeaderComp />
  <FooterComp />
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  components: {
    HeaderComp,
    FooterComp,
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
