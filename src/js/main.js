import "../scss/style.scss";

import { swiper } from "./swiper.js";
console.log(window.innerWidth);

if (window.innerWidth > 1023) {
  swiper();
}
