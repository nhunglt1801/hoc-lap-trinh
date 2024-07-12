var boxEl = document.querySelector(".box");
console.log(boxEl.style);
// boxEl.style.color = "red";
// boxEl.style.textAlign = "center";
// boxEl.style.textTransform = "uppercase";
// boxEl.style.fontStyle = "italic";

// var css = {
//   color: "red",
//   textAlign: "center",
//   textTransform: "uppercase",
//   fontStyle: "italic",
//   backgroundImage: `url(https://picsum.photos/200/300)`,
// };
// css.color = null;
// Object.assign(boxEl.style, css);

// Bài tập: thêm thuộc tính background-image cho object css

// Bài tập: fade-in fade-out

var btnFadeIn = document.querySelector(".fade-in");
var btnFadeOut = document.querySelector(".fade-out");

// btnFadeIn.addEventListener("click", function () {
//   boxEl.classList.remove("in-active");
//   boxEl.classList.add("active");
// });
// btnFadeOut.addEventListener("click", function () {
//   boxEl.classList.remove("active");
//   boxEl.classList.add("in-active");
//   setTimeout(function () {
//     boxEl.classList.add("d-none");
//   }, 1000);
// });
boxEl.style.transition = `opacity 0.4s linear`;
btnFadeOut.addEventListener("click", function () {
  boxEl.style.opacity = 0;
  setTimeout(function () {
    boxEl.style.display = "none";
  }, 400);
});
btnFadeIn.addEventListener("click", function () {
  boxEl.style.display = null;
  setTimeout(function () {
    boxEl.style.opacity = 1;
  }, 200);
});
