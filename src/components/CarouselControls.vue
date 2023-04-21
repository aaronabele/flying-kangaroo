<template>
  <button class="carousel-control left" @click="$emit('prev')">Prev</button>
  <button class="carousel-control right" @click="$emit('next')">Next</button>
</template>

<script>
export default {
  emits: ["prev", "next"],
};
</script>

<style scoped>
.carousel-control {
  font-family: var(--primary-font-family);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  display: inline-block;
  height: 50px;
  width: 70px;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 45%;
}

.left {
  left: 13.3%;
}

.right {
  right: 8.8%;
}
</style>
