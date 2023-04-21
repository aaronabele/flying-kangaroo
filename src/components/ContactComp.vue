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

<style scoped>
.contact-wrapper {
  width: var(--general-width);
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
}

.contact-block-positioning {
  text-align: center;
}

.contact-block-header {
  font-family: var(--secondary-font-family);
}

.contact-block-text {
  margin-left: auto;
  margin-right: auto;
  width: 75ch;
  font-family: var(--primary-font-family);
}

.contact-block-hashtag {
  font-family: var(--primary-font-family);
}
.contact-area-header {
  text-align: center;
  font-family: var(--secondary-font-family);
  font-size: 36px;
}
.contact-area-wrapper {
  width: 100%;
  height: 450px;
  background-color: #2a363c;
  color: var(--secondary-color);
  font-family: var(--primary-font-family);
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
