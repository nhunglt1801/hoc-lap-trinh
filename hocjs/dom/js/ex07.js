// Event Object
// Đối tượng chưa toàn bộ thông tin của sự kiện
var btn = document.querySelector(".btn");
// btn.addEventListener("mousedown", function (e) {
//   console.dir(e.target);
//   console.dir(this);
//   console.log(e.clientX, e.clientY);
//   console.log(e.offsetX, e.offsetY);
// });

// this => trả về nodeElement chính nó
// target => tác động sự kiện lên cái nào thì nó sẽ trả về nodeElement đó

// document.addEventListener("mousemove", function (e) {
//   console.log(e.clientX, e.clientY);
//   btn.style.translate = `${e.clientX}px ${e.clientY}px`;
// });
var boxEl = document.querySelector(".box");
var leftBoxEl = boxEl.querySelector(".left");
var rightBoxEl = boxEl.querySelector(".right");
var bodyWidth = document.body.clientWidth;

var offsetX = 0;
var offsetY = 0;
var currentX = 0;

btn.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    document.addEventListener("mousemove", handleDrag);
  }
});
document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
  if (currentX >= bodyWidth / 2) {
    Object.assign(btn.style, {
      top: 0,
      right: 0,
      left: "auto",
    });
  } else {
    Object.assign(btn.style, {
      top: 0,
      left: 0,
      right: "auto",
    });
  }
});

function handleDrag(e) {
  var x = e.clientX - offsetX;
  var y = e.clientY - offsetY;
  currentX = x;
  if (x >= bodyWidth / 2) {
    rightBoxEl.style.backgroundColor = "gray";
  } else {
    rightBoxEl.style.backgroundColor = "";
  }
  var css = {
    left: x + "px",
    top: y + "px",
    right: "auto",
  };
  Object.assign(btn.style, css);
}
