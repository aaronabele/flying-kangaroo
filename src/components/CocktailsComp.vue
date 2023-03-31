<template>
  <BannerComp class="banner-comp-cocktails-comp">
    <template #banner-slot>
      <div class="banner-wrapper">
        <h1 class="about-comp-main-header">All Cocktails</h1>
      </div>
    </template>
  </BannerComp>
  <FilterComp />
</template>

<script>
import BannerComp from "./BannerComp.vue";
import FilterComp from "./FilterComp.vue";

export default {
  components: {
    BannerComp,
    FilterComp,
  },
};
</script>

<style scoped>
.banner-comp-cocktails-comp {
  height: 400px;
  width: 100%;
  margin-bottom: 4rem;
}
.banner-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/helena-yankovska-7EbGkOm8pWM-unsplash.jpg");
  height: 100%;
  width: 100%;
  background-repeat: none;
  background-size: cover;
  background-position: 50% 60%;
}

.about-comp-main-header {
  position: absolute;
  text-align: center;
  font-size: 52px;
  padding: 1rem 0;
  font-family: "Montserrat Alternates", sans-serif;
  color: white;
  text-shadow: 5px 5px silver;
  bottom: -40px;
  left: 350px;
}
</style>
