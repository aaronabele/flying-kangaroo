<template>
  <section class="section-banner">
    <div class="banner-wrapper"></div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.section-banner {
  width: 1200px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
}

.banner-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/banner-picture.jpg");
  height: 100%;
  width: 100%;
  background-repeat: none;
  background-size: cover;
  background-position: 50% 75%;
}
</style>
