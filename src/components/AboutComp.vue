<template>
  <BannerComp />
  <div class="about-comp-wrapper">
    <h1 class="about-comp-main-header">Who We are</h1>
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
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.about-comp-wrapper {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.about-comp-main-header {
  text-align: center;
  font-size: 48px;
  padding: 1rem 0;
  font-family: "Kaushan Script", cursive;
}
.about-comp-image-founder {
  height: 400px;
  margin-right: 4rem;
}

.about-comp-image-cofounder {
  height: 400px;
  margin-left: 4rem;
}

.about-comp-founder,
.about-comp-cofounder {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  margin-top: 2rem;
  background-color: lightgray;
  padding: 2rem;
  border-radius: 15px;
}

.about-comp-cofounder {
  margin-bottom: 4rem;
}

.about-comp-founder-name {
  font-size: 32px;
  font-family: "Montserrat Alternates", sans-serif;
  text-decoration: underline;
}
.about-comp-text {
  width: 40ch;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 16px;
}
</style>
