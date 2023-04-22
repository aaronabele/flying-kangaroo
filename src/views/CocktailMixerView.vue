<template>
  <BannerComp>
    <template #banner-slot>
      <div class="banner-wrapper">
        <h1 class="cocktailmixer-comp-main-header">Mix it your way</h1>
      </div>
    </template>
  </BannerComp>
  <MixerComp />
</template>

<script>
import BannerComp from "@/components/BannerComp.vue";
import MixerComp from "@/components/MixerComp.vue";

export default {
  components: {
    BannerComp,
    MixerComp,
  },
};
</script>

<style scoped>
.banner-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/kobby-mendez-xBFTjrMIC0c-unsplash.jpg");
  height: 100%;
  width: 100%;
  background-repeat: none;
  background-size: cover;
  background-position: 50% 50%;
}
</style>
