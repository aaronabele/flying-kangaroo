<template>
  <div class="site-seperator-wrapper">
    <div class="site-seperator-positioning">
      <slot name="siteseperator-slot">
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

<style scoped>
.site-seperator-wrapper {
  height: 21rem;
  background-color: var(--primary-background-color);
  margin-bottom: 4rem;
  color: var(--secondary-color);
  position: relative;
}

.site-seperator-positioning {
  text-align: center;
  padding: 2rem 0;
  position: relative;
}

.site-seperator-header {
  font-family: var(--secondary-font-family);
  font-size: 3rem;
}

.site-seperator-text {
  font-family: var(--primary-font-family);
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
  outline: 1px solid var(--secondary-color);
  width: 25px;
  height: 25px;
  rotate: 45deg;
}

.site-seperator-raute2 {
  outline: 1px solid var(--secondary-color);
  width: 25px;
  height: 25px;
  rotate: 45deg;
  margin-left: -7px;
}
</style>
