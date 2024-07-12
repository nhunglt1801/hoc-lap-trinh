var aEl = document.querySelector("a");
aEl.addEventListener("click", function (e) {
  e.preventDefault();
  var link = this.href;
  console.log(link);
});
// thẻ có hành động mặc định: a khi bấm vào link, form khi submit
var ul = document.querySelector(".box ul");
ul.addEventListener("mousedown", function (e) {
  e.preventDefault();
});
var li = document.querySelectorAll(".box ul li");
li.forEach(function (item) {
  item.addEventListener("click", function () {
    console.log(this.innerText);
  });
});
var menu = document.querySelector(".menu");
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  var clientX = e.clientX;
  var clientY = e.clientY;
  Object.assign(menu.style, {
    top: clientY + "px",
    left: clientX + "px",
    display: "block",
  });
});
document.addEventListener("click", function () {
  menu.style.display = "none";
});
menu.addEventListener("click", function (e) {
  e.stopPropagation();
  menu.style.background = "red";
});
