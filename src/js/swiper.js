export function swiper() {
    new Swiper(".typeSearch__swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",

      clickable: true,
    },

    grid: {
      rows: 2,
      fill: "row"
    },

    autoHeight: false,
    slidesPerView: 5,
    slidesPerGroup: 10,
    loop: true,
    loopedSlides: 5,
  });
}
