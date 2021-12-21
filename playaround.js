const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
});

const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".list");
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};
navSlide();

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
