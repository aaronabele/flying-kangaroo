<template>
  <div class="site-seperator-wrapper">
    <div class="site-seperator-positioning">
      <slot name="siteseperatr-slot">
        <h2 class="site-seperator-header">Kangaroo's Zero Waste Cocktails</h2>
        <p class="site-seperator-text">
          Mixtape hella blackbird spyplane, DIY sriracha microdosing knausgaard
          aesthetic messenger bag shaman. Iceland you probably haven't heard of
          them next level poke, vexillologist gluten-free fanny pack.
        </p>
        <div class="site-seperator-raute-positioning">
          <div class="site-seperator-raute1"></div>
          <div class="site-seperator-raute2"></div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.site-seperator-wrapper {
  height: 15rem;
  background-color: #2a363c;
  margin-bottom: 4rem;
  color: white;
  position: relative;
}

.site-seperator-positioning {
  text-align: center;
  padding: 2rem 0;
  position: relative;
}

.site-seperator-header {
  font-family: "Kaushan Script", cursive;
}

.site-seperator-text {
  font-family: "Montserrat Alternates", sans-serif;
  margin-left: auto;
  margin-right: auto;
  width: 60ch;
}

.site-seperator-raute-positioning {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.site-seperator-raute1 {
  outline: 1px solid white;
  width: 25px;
  height: 25px;
  rotate: 45deg;
}

.site-seperator-raute2 {
  outline: 1px solid white;
  width: 25px;
  height: 25px;
  rotate: 45deg;
  margin-left: -7px;
}
</style>
