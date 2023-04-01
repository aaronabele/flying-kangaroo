<template>
  <Transition class="slide-in-active">
    <div
      class="carousel-item"
      v-show="currentSlide === index"
      @mouseenter="$emit('mouseenter')"
      @mouseleave="$emit('mouseleave')"
    >
      <img :src="slide.strDrinkThumb" :alt="slide.strDrink" />
    </div>
  </Transition>
</template>

<script>
export default {
  emits: ["mouseenter", "mouseleave"],
  props: ["slide", "currentSlide", "index"],
};
</script>

<style scoped>
.carousel-item {
  position: absolute;
  top: 0;
  left: 120px;
  right: 0;
  bottom: 0;
}
</style>
