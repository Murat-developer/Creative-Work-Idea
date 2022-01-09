var swiper = new Swiper(".mySwiper", {
  // cssMode: true,
  speed: 750,
  parallax: true,
  navigation: {
    nextEl: ".fa-chevron-right",
    prevEl: ".fa-chevron-left",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    414: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
  mousewheel: true,
  keyboard: true,
});

// .Media Block
const collapsibles = document.querySelectorAll(".collapsible__container");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// .Menu Icon
const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", function () {
  this.classList.toggle("active");
});
