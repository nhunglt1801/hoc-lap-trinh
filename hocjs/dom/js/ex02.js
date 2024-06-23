// JS sẽ định nghĩa sẵn các sự kiện tương ứng vs các thẻ HTML

// Mỗi thẻ html sẽ có những sự kiện riêng

// Việc lập trình viên: lắng nghe sự kiện

// Cách 1: Event Handler
var btn = document.querySelector(".btn");
var btnRemove = document.querySelector(".btn-remove");
// btn.onclick = function () {
//   console.log("Click Me");
// };

// btn.onmouseover = function () {
//   console.log("Di chuột vào");
// };
// btn.onmouseout = function () {
//   console.log("Di chuột ra");
// };

// btn.onmousemove = function () {
//   console.log("Di chuột trong nút");
// };

var nameElement = document.querySelector(".name");
// nameElement.oninput = function () {
//   console.log("Bạn đang nhập vào");
// };

// nameElement.onfocus = function () {
//   console.log("Bạn vừa focus");
// };
// nameElement.onblur = function () {
//   console.log("Bạn vừa blur");
// };

// nameElement.onchange = function () {
//   console.log("Bạn vừa thay đổi");
// };

// Cách 2: Event Listener

// btn.addEventListener("click", function () {
//   console.log("Click Me");
// });
// btn.addEventListener("click", function () {
//   console.log("Click Me 2");
// });

// Xóa sự kiện
var count = 0;
var handleClickBtn = function () {
  //   console.log(`Count`, ++count);
  console.log("Click Me");
  console.log(this); //this trả về element
  console.log(e); //trả về tên sự kiện
};
btn.addEventListener("click", handleClickBtn);
// btnRemove.addEventListener("click", function () {
// Cóa sự kiện click và listener handleClickBtn ra khỏi element bnt
//   btn.removeEventListener("click", handleClickBtn);
// });
nameElement.addEventListener("keyup", function (e) {
  console.log(e);
  var value = this.value;
  console.log(value);
  if (e.key === "Enter") {
    document.body.style.background = "yellow";
  }
  if (e.ctrlKey && e.key === "Enter") {
    document.body.style.background = "red";
  }
});
