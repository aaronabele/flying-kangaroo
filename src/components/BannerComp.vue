<template>
  <section class="section-banner">
    <slot name="banner-slot">
      <div class="banner-wrapper">
        <h1 class="banner-text-header">Handcrafted Cocktails</h1>
        <span class="banner-text-description">- Made to perfection -</span>
        <router-link to="/cocktails" class="banner-button">BUY NOW</router-link>
      </div>
    </slot>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.section-banner {
  width: 100%;
  height: 620px;
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
  text-shadow: 5px 5px silver;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 52px;
}

.banner-text-description {
  position: absolute;
  top: 130px;
  left: 120px;
  color: #fff;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 28px;
}

.banner-button {
  position: absolute;
  top: 180px;
  left: 120px;
  color: black;
  font-family: "Montserrat Alternates", sans-serif;
  border: none;
  border-radius: 15px;
  padding: 0.5rem 1rem;
  background-color: #fff;
  font-size: 18px;
  text-decoration: none;
  color: black;
}
</style>
