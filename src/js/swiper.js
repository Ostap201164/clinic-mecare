export function swiper() {
  new Swiper(".designed-for__swiper-container", {
    navigation: {
      nextEl: ".designed-for__swiper-button_next",
      prevEl: ".designed-for__swiper-button_prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoHeight: false,
    slidesPerView: 3.1,
    slidesPerGroup: 1,
    spaceBetween: 20,

    breakpoints: {
      1280: {
        slidesPerView: 3.6,
      },
      1440: {
        slidesPerView: 4.2,
      },
      1920: {
        slidesPerView: 5.6,
      },
    },
  });
}
