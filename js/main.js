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

// Plan Card Slider

let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector(".slider-container");
const track = document.querySelector(".slider-track");
const item = document.querySelector(".slider-item");
const btnPrev = document.querySelector(".bnt-prev");
const btnNext = document.querySelector(".btn-next");
const items = document.querySelectorAll(".slider-slide");
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = "${itemWidth}px";
});

btnNext.addEventListener("click");
{
  const itemsLeft =
    itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
}

btnPrev.addEventListener("click");
{
  const itemsLeft = Math.abs(position) / itemWidth;
  position +=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
}

const setPosition = () => {
  track.style.transform = "translateX(${position}px)";
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();
