<template>
  <div class="three-cols-wrapper">
    <div class="three-cols-first-one">
      <img
        class="three-cols-image"
        src="@/assets/heart.png"
        alt="heart with hand image"
      />
      <h2 class="three-cols-first-header">Wellbeing</h2>
      <p class="three-cols-first-text">
        Leggings brunch air plant jianbing tofu portland small batch blog.
      </p>
    </div>
    <div class="three-cols-second-one">
      <img
        class="three-cols-image"
        src="@/assets/plants.png"
        alt="heart with hand image"
      />
      <h2 class="three-cols-second-header">Ethical</h2>
      <p class="three-cols-second-text">
        Leggings brunch air plant jianbing tofu portland small batch blog.
      </p>
    </div>
    <div class="three-cols-third-one">
      <img
        class="three-cols-image"
        src="@/assets/worldwide.png"
        alt="heart with hand image"
      />
      <h2 class="three-cols-third-header">Sustainable</h2>
      <p class="three-cols-third-text">
        Leggings brunch air plant jianbing tofu portland small batch blog.
      </p>
    </div>
  </div>
</template>

<style>
.three-cols-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--general-width);
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--third-background-color);
  border-top: 1px solid var(--third-background-color);
}

.three-cols-first-one,
.three-cols-second-one,
.three-cols-third-one {
  text-align: center;
}

.three-cols-first-header,
.three-cols-second-header,
.three-cols-third-header {
  font-family: var(--secondary-font-family);
}

.three-cols-first-text,
.three-cols-second-text,
.three-cols-third-text {
  width: 35ch;
  font-family: var(--primary-font-family);
}

.three-cols-image {
  width: 48px;
  height: auto;
}
</style>
