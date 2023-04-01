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
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.carousel-control {
  font-family: "Montserrat Alternates", sans-serif;
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
