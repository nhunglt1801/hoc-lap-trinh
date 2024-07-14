// var imageEl = document.querySelector("image");
// var div = document.createElement("div");
// function createLoading() {
//   div.classList.add("loading");
//   div.innerText = "Loading...";
//   document.body.prepend(div);
// }
// function removeLoading() {
//   div.style.opacity = 0;
//   setTimeout(function () {
//     div.remove();
//   }, 500);
// }
// document.addEventListener("DOMContentLoaded", createLoading);
// window.addEventListener("load", removeLoading);

// onbeforeunload event =>
var beforeUnloadHandler = function (e) {
  e.preventDefault();
  e.returnValue = true;
};

var input = document.querySelector("input");
input.addEventListener("input", function (e) {
  var value = e.target.value;
  var defaultValue = e.target.defaultValue;
  if (defaultValue !== value) {
    window.addEventListener("beforeunload", beforeUnloadHandler);
  } else {
    window.removeEventListener("beforeunload", beforeUnloadHandler);
  }
});
