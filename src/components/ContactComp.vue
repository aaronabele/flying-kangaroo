<template>
  <div class="contact-wrapper">
    <div class="contact-block-positioning">
      <h1 class="contact-block-header">Share your Cocktail Story</h1>
      <p class="contact-block-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
      <span class="contact-block-hashtag">#callkangarooandfly</span>
    </div>
  </div>
  <div class="contact-area-wrapper">
    <h2 class="contact-area-header">Contact Us</h2>
    <div class="contact-area-form-wrapper">
      <div class="contact-area-name-email">
        <div class="contact-area-name">
          <label class="contact-area-label-styling" for="name">Name</label>
          <br />
          <br />
          <input type="text" id="name" />
        </div>
        <div class="contact-area-email">
          <label class="contact-area-label-styling" for="email">E-Mail</label>
          <br />
          <br />
          <input type="text" id="email" />
        </div>
      </div>
      <div class="contact-area-phone">
        <label class="contact-area-label-styling" for="phone"
          >Phone Number</label
        >
        <br />
        <br />
        <input type="text" id="phone" />
      </div>
      <div class="contact-area-message">
        <label class="contact-area-label-styling" for="message">Message</label>
        <br />
        <br />
        <input type="text" id="message" />
      </div>
      <button class="contact-area-button">Submit</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.contact-wrapper {
  width: 1200px;
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
}

.contact-block-positioning {
  text-align: center;
}

.contact-block-header {
  font-family: "Kaushan Script", cursive;
}

.contact-block-text {
  margin-left: auto;
  margin-right: auto;
  width: 75ch;
  font-family: "Montserrat Alternates", sans-serif;
}

.contact-block-hashtag {
  font-family: "Montserrat Alternates", sans-serif;
}
.contact-area-header {
  text-align: center;
  font-family: "Kaushan Script", cursive;
  font-size: 36px;
}
.contact-area-wrapper {
  width: 100%;
  height: 450px;
  background-color: #2a363c;
  color: white;
  font-family: "Montserrat Alternates", sans-serif;
  margin-bottom: 4rem;
}

.contact-area-form-wrapper {
  width: 600px;
  height: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
.contact-area-name-email {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-columns: 1;
  justify-content: space-between;
}

.contact-area-name-email,
.contact-area-phone {
  margin-bottom: 1rem;
  width: 100%;
}

#name,
#email {
  width: 90%;
}

#phone {
  width: 95%;
}

.contact-area-message {
  width: 100%;
  height: 40%;
}

#message {
  width: 95%;
  height: 60%;
}

.contact-area-button {
  margin-top: 1rem;
  padding: 0.3rem 1rem;
}
</style>
