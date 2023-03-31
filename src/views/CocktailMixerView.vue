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
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
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
