// Event => không có detail
// Custom Event => có detail nhưng detail không thay đổi được

// var rangeEl = document.querySelector("input");
// var finishEvent = new CustomEvent("finish", {
//   detail: {
//     name: "F8",
//   },
// });
// finishEvent.msg = "Hello";
// finishEvent.detail = {
//   name: "F9",
// };
// rangeEl.addEventListener("input", function (e) {
//   var value = this.value;
//   console.log(value);
//   if (+value === 100) {
//     console.log("Success");
//     this.dispatchEvent(finishEvent);
//   }
// });

/**
 * Các bước tạo Event
 * - Xác định logic event
 * - Xác định element lắng nghe event đó
 * - Xác định tên event và tạo object
 * - Xử lý logic và dispatch
 *
 */

// var input = document.querySelector("input");
// input.addEventListener("finish", function (e) {
//   console.log(e);
//   console.log(e.msg);
//   console.log("Success");
// });

// var slider1 = document.querySelector(".slider-1");
// slider1.addEventListener("finish", function () {
//   console.log("OK chưa");
// });
// var slider2 = document.querySelector(".slider-2");
// slider2.addEventListener("finish", function () {
//   console.log("OK rồi");
// });

// Trigger Event

// var imgUrl = "./image/anh01.jpg";
// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   var a = document.createElement("a");
//   a.href = imgUrl;
//   a.download = "anh01.jpg";
//   a.click();
//   //   window.open(imgUrl); // mở ảnh
// });

// var formEl = document.querySelector("form");
// formEl.addEventListener("submit", function (e) {
//   e.preventDefault();
//   var input = this.querySelector("input").value;
//   console.log(input);
// });
// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function (e) {
//   formEl.submit();
// });

HTMLElement.prototype.change = function () {
  var changeEvent = new Event("change");
  this.dispatchEvent(changeEvent);
};
var quantityInput = document.querySelector(".quantity input");
console.dir(quantityInput);

var plusBtn = document.querySelector(".plus-btn");
var minusBtn = document.querySelector(".minus-btn");
plusBtn.addEventListener("click", function () {
  quantityInput.value++;
  //   quantityInput.dispatchEvent(changeEvent);
  quantityInput.change();
});
minusBtn.addEventListener("click", function () {
  if (quantityInput.value > 1) {
    quantityInput.value--;
    // quantityInput.dispatchEvent(changeEvent);
    quantityInput.change();
  }
});
quantityInput.addEventListener("change", function () {
  console.log(this.value);
});
