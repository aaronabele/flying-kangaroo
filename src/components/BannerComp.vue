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

<style scoped>
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
  font-family: var(--primary-font-family);
  font-size: 3.5rem;
}

.banner-text-description {
  position: absolute;
  top: 135px;
  left: 120px;
  color: var(--secondary-color);
  font-family: var(--primary-font-family);
  font-size: 1.8rem;
}

.banner-button {
  position: absolute;
  top: 180px;
  left: 120px;
  font-family: var(--primary-font-family);
  border: none;
  border-radius: 15px;
  padding: 0.5rem 1rem;
  background-color: var(--white-background-color);
  font-size: 1.3rem;
  text-decoration: none;
  color: var(--primary-color);
}
</style>
