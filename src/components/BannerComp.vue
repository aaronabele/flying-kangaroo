<template>
  <section class="section-banner">
    <div class="banner-wrapper">
      <span class="banner-text-header">Handcrafted Cocktails</span>
      <span class="banner-text-description">- Made to perfection -</span>
      <button class="banner-button">BUY NOW</button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.section-banner {
  width: 100%;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
}

.banner-wrapper {
  position: relative;
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

.banner-text-header {
  position: absolute;
  top: 30px;
  left: 120px;
  color: #fff;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 36px;
}

.banner-text-description {
  position: absolute;
  top: 80px;
  left: 120px;
  color: #fff;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 18px;
}

.banner-button {
  position: absolute;
  top: 120px;
  left: 120px;
  color: black;
  font-family: "Montserrat Alternates", sans-serif;
  border: none;
  border-radius: 15px;
  padding: 0.5rem 1rem;
  background-color: #fff;
  font-size: 18px;
}
</style>
