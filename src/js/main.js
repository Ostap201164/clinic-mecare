import "../scss/style.scss";

const width = document.documentElement.clientWidth

import { swiper1, swiper2} from "./swiper.js";
console.log(width);

swiper2();

if (width > 1023) {
  swiper1();
}
