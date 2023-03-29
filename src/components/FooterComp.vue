<template>
  <footer id="footer">
    <ul class="footer-ul">
      <div class="footer-wrapper">
        <div class="footer-ul-menu">
          <li class="footer-ul-li footer-ul-li-header">Menu</li>
          <li class="footer-ul-li">Refer a Friend</li>
          <li class="footer-ul-li">Privacy Policy</li>
          <li class="footer-ul-li">Refund Policy</li>
          <li class="footer-ul-li">Shipping Policy</li>
          <li class="footer-ul-li">Terms of Service</li>
        </div>
        <div class="footer-ul-contact-social-media">
          <li class="footer-ul-li footer-ul-li-header">Contact us</li>
          <li class="footer-ul-li">
            <img
              class="footer-ul-li-contact-img-styling"
              src="@/assets/telefon.png
            "
              alt="Telefon Icon"
            />
            &nbsp;+49 1234 567890
          </li>
          <li class="footer-ul-li">
            <img
              class="footer-ul-li-contact-img-styling"
              src="@/assets/email.png"
              alt="E-Mail Icon"
            />
            &nbsp; flying@kangaroo.com
          </li>
          <li class="footer-ul-li">&nbsp;</li>
          <li class="footer-ul-li footer-ul-li-header">Follow us</li>
          <div class="footer-ul-li-follow-positioning">
            <li class="footer-ul-li">
              <img src="@/assets/instagram.png" alt="" />
            </li>
            <li class="footer-ul-li">
              <img src="@/assets/facebook.png" alt="" />
            </li>
            <li class="footer-ul-li">
              <img src="@/assets/linkedin.png" alt="" />
            </li>
            <li class="footer-ul-li">
              <img src="@/assets/youtube.png" alt="" />
            </li>
          </div>
        </div>
        <div class="footer-ul-payment">
          <li class="footer-ul-li footer-ul-li-header">Payment methods</li>
          <div class="footer-ul-payment-positioning">
            <li class="footer-ul-li">
              <img
                class="footer-ul-li-img-styling"
                src="@/assets/american-express.png"
                alt=""
              />
            </li>
            <li class="footer-ul-li">
              <img
                class="footer-ul-li-img-styling"
                src="@/assets/apple-pay.png"
                alt=""
              />
            </li>
            <li class="footer-ul-li">
              <img
                class="footer-ul-li-img-styling"
                src="@/assets/google-pay.png"
                alt=""
              />
            </li>
            <li class="footer-ul-li">
              <img
                class="footer-ul-li-img-styling"
                src="@/assets/maestro.png"
                alt=""
              />
            </li>
            <li class="footer-ul-li">
              <img
                class="footer-ul-li-img-styling"
                src="@/assets/paypal.png"
                alt=""
              />
            </li>
            <li class="footer-ul-li">
              <img
                class="footer-ul-li-img-styling"
                src="@/assets/visa.png"
                alt=""
              />
            </li>
          </div>
        </div>
      </div>
    </ul>
  </footer>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

#footer {
  position: relative;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: #f2f2f2;
  color: #242430;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 14px;
}

.footer-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  gap: 8rem;
}

.footer-ul {
  list-style-type: none;
  outline: 1px solid #242430;
  margin: 0 0;
  padding: 3rem 0;
}

.footer-ul li {
  padding: 0.2rem;
}

.footer-ul-li-follow-positioning {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0.5rem;
}

.footer-ul-payment-positioning {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
}

.footer-ul-li-contact-img-styling {
  width: 16px;
  height: 16px;
}

.footer-ul-li-img-styling {
  width: 24px;
  height: auto;
}

.footer-ul-li-header {
  font-weight: bold;
  color: #242430;
  margin-bottom: 1rem;
}
</style>
