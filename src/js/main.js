import "../scss/style.scss";

import { swiper1, swiper2} from "./swiper.js";
console.log(window.innerWidth);

swiper2();

if (window.innerWidth > 1023) {
  swiper1();
}
