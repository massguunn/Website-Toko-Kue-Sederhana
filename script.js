const swiper = new Swiper(".tranding-slider", {
  loop: true,
  slidesPerView: "auto", // Biarkan ukuran slide menyesuaikan konten
  spaceBetween: 15, // Jarak antar slide
  centeredSlides: true, // Menengahkan slide aktif
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 5, // 4 slide untuk layar menengah
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 5, // 5 slide untuk layar besar
      spaceBetween: 20,
    },
  },
});
