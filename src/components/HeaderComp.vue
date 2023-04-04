<template>
  <header id="header">
    <nav class="header-comp-navigation">
      <div class="header-comp-navigation-delivery">
        <span class="header-comp-navigation-delivery-info"
          >Don't dink and drive, call kangaroo and fly. 🚚 guaranteed within 30
          minutes. If not, we pay for you ❤️</span
        >
      </div>
      <ul class="header-comp-navigation-ul">
        <div class="header-comp-navigation-positioning">
          <li class="header-comp-navigation-ul-li-company">
            <router-link to="/">flying-kangaroo</router-link>
          </li>
          <li class="header-comp-navigation-ul-li">
            <router-link to="/">Home</router-link>
          </li>
          <li class="header-comp-navigation-ul-li">
            <router-link to="/cocktails">Cocktails</router-link>
          </li>
          <li class="header-comp-navigation-ul-li">
            <router-link to="/cocktail-mixer">Cocktail-Mixer</router-link>
          </li>
          <li class="header-comp-navigation-ul-li">
            <router-link to="/about-us">About Us</router-link>
          </li>
          <li class="header-comp-navigation-ul-li">
            <router-link to="/contact">Contact</router-link>
          </li>
        </div>
        <div
          class="header-comp-navigation-ul-li header-comp-navigation-positioning"
        >
          <li>
            <img src="@/assets/lupe.png" alt="Lupe weiß" />
          </li>
          <li>
            <router-link to="/cart">
              <img src="@/assets/einkaufstasche.png" alt="Einkaufstasche weiß"
            /></router-link>
          </li>
        </div>
      </ul>
    </nav>
    <router-view />
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

#header {
  width: 100%;
}

nav {
  background-color: #2a363c;
  height: 6rem;
}

nav a {
  color: white;
  text-decoration: none;
}

.header-comp-navigation-delivery {
  color: white;
  font-weight: 100;
  font-family: "Montserrat Alternates", sans-serif;
  background-color: black;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

nav a.router-link-exact-active {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

.header-comp-navigation-positioning {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1.2rem;
}

.header-comp-navigation-ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0;
  padding: 1rem;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.header-comp-navigation-ul-li {
  list-style-type: none;
  color: white;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 100;
  font-family: "Montserrat Alternates", sans-serif;
}

.header-comp-navigation-ul-li:after {
  display: block;
  content: "";
  border-bottom: solid 2px #fff;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}

.header-comp-navigation-ul-li:hover:after {
  transform: scaleX(1);
}

.header-comp-navigation-ul-li-company {
  list-style-type: none;
  color: white;
  letter-spacing: 0.2em;
  font-family: "Kaushan Script", cursive;
  font-weight: bold;
  text-transform: lowercase;
  font-size: 20px;
  padding-bottom: 0.5rem;
}
</style>
