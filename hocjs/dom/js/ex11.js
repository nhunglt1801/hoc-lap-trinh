var carouselInner = document.querySelector(".carousel-inner");
var nextBtn = document.querySelector(".carousel .next");
var prevBtn = document.querySelector(".carousel .prev");

// Tính width của carousel-inner

var itemWidth = carouselInner.clientWidth;
var position = 0;
var totalWidth = carouselInner.children.length * itemWidth;
nextBtn.addEventListener("click", function () {
  if (Math.abs(position) + itemWidth >= totalWidth) {
    return;
  }
  position -= itemWidth;
  carouselInner.style.translate = `${position}px`;
});
prevBtn.addEventListener("click", function () {
  if (Math.abs(position) === 0) {
    return;
  }
  position += itemWidth;
  carouselInner.style.translate = `${position}px`;
});
