<template>
  <BannerComp>
    <template #banner-slot>
      <div class="banner-wrapper">
        <h1 class="about-comp-main-header">Who We are</h1>
      </div>
    </template>
  </BannerComp>
  <div class="about-comp-wrapper">
    <section class="about-comp-founder">
      <img
        class="about-comp-image-founder"
        src="@/assets/austin-distel-IUitg35kAH0-unsplash.jpg"
        alt=""
      />
      <div>
        <h2 class="about-comp-founder-name">Amadeus Mozart</h2>
        <div class="about-comp-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </div>
      </div>
    </section>
    <section class="about-comp-cofounder">
      <div>
        <h2 class="about-comp-founder-name">Immanuel Kant</h2>
        <div class="about-comp-text">
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua.
        </div>
      </div>
      <img
        class="about-comp-image-cofounder"
        src="@/assets/brooke-cagle-qpirSKdJDUw-unsplash.jpg"
        alt=""
      />
    </section>
  </div>
</template>

<script>
import BannerComp from "./BannerComp.vue";
export default {
  components: {
    BannerComp,
  },
};
</script>

<style scoped>
.about-comp-wrapper {
  width: var(--general-width);
  margin-left: auto;
  margin-right: auto;
}

.about-comp-main-header {
  text-align: center;
  font-size: 4.5rem;
  padding: 1rem 0;
  font-family: var(--primary-font-family);
  color: var(--secondary-color);
  text-shadow: 5px 5px silver;
  margin-top: 6rem;
  margin-left: 1em;
}
.about-comp-image-founder {
  height: var(--banner-height);
  margin-right: 4rem;
}

.about-comp-image-cofounder {
  height: auto;
  width: 500px;
  margin-left: 4rem;
}

.about-comp-founder,
.about-comp-cofounder {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  margin-top: 2rem;
  background-color: var(--third-background-color);
  padding: 2rem;
  border-radius: 15px;
}

.about-comp-cofounder {
  margin-bottom: 4rem;
}

.about-comp-founder-name {
  font-size: 32px;
  font-family: var(--primary-font-family);
  text-decoration: underline;
}
.about-comp-text {
  width: 40ch;
  font-family: var(--primary-font-family);
  font-size: 1.2rem;
}

.banner-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/aboutUs.jpg");
  height: 100%;
  width: 100%;
  background-repeat: none;
  background-size: cover;
  background-position: 50% 70%;
}
</style>
