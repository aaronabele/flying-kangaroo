<template>
  <div class="diashow-wrapper">
    <ul>
      <li v-for="cocktail in sourceData" :key="cocktail.idDrink">
        <img
          class="diashow-single-picture"
          :src="cocktail.strDrinkThumb"
          :alt="cocktail.strDrink"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sourceData: [],
    };
  },
  created() {
    fetch(
      "https://www.thecocktaildb.com/api/json/V2/9973533/randomselection.php"
    )
      .then((response) => response.json())
      .then((data) => (this.sourceData = data.drinks));
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-image-repeat: none;
}

.diashow-single-picture {
  width: 100%;
}

.prev {
  position: absolute;
  top: 235px;
  left: 70px;
  rotate: 180deg;
  padding: 0.4rem 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  cursor: pointer;
}

.next {
  position: absolute;
  top: 235px;
  right: 70px;
  padding: 0.4rem 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  cursor: pointer;
}
</style>
