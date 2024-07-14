/**
 * 1. build giao diện
 * 2. bấm vào section nào thì chuyển tới section đó
 */

var navbar = document.querySelector(".nav");
var btnList = navbar.querySelectorAll(".btn");
var navbarHeight = navbar.clientHeight;
var section1 = document.querySelector("#section-1");
var body = document.body;
document.addEventListener("DOMContentLoaded", function () {
  body.style.paddingTop = `${navbarHeight}px`;
});
btnList.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    var targetSectionID = this.dataset.target;
    var section = document.querySelector(`${targetSectionID}`);
    var lastBtnActive = document.querySelector(".btn.active");
    if (lastBtnActive) {
      lastBtnActive.classList.remove("active");
    }
    this.classList.add("active");
    var offsetTop = section.offsetTop;
    window.scrollTo({
      top: offsetTop - navbarHeight,
      behavior: "smooth",
    });
  });
});
