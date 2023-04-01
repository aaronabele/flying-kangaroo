<template>
  <h2 class="diashow-header">Recent Customer's Creations</h2>
  <div class="carousel">
    <div class="carousel-inner">
      <CarouselItem
        v-for="(slide, index) in slides"
        :slide="slide"
        :key="`ìtem-${index}`"
        :current-slide="currentSlide"
        :index="index"
        @mouseenter="stopSlideTimer"
        @mouseleave="startSlideTimer"
      >
      </CarouselItem>
      <CarouselControls @prev="prev" @next="next" />
    </div>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
import CarouselControls from "@/components/CarouselControls.vue";

export default {
  props: ["slides"],
  components: { CarouselItem, CarouselControls },
  data() {
    return {
      currentSlide: 0,
      slideInterval: null,
    };
  },
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },
    _prev() {
      const index =
        this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length - 1;
      this.currentSlide = index;
    },
    _next() {
      const index =
        this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0;
      this.currentSlide = index;
    },
    startSlideTimer() {
      this.stopSlideTimer();
      this.slideInterval = setInterval(() => {
        this._next();
      }, 5000);
    },
    stopSlideTimer() {
      clearInterval(this.slideInterval);
    },
    prev() {
      this._prev();
      this.startSlideTimer();
    },
    next() {
      this._next();
      this.startSlideTimer();
    },
  },
  mounted() {
    this.startSlideTimer();
  },
  beforeUnmount() {
    this.stopSlideTimer();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.diashow-header {
  text-align: center;
  font-family: "Kaushan Script", cursive;
  margin-bottom: 4rem;
  font-size: 48px;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a363c;
  margin-bottom: 4rem;
}

.carousel-inner {
  position: relative;
  width: 900px;
  height: 700px;
  overflow: hidden;
}
</style>
