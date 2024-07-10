// Scroll Event: Sự kiện liên quan đến thanh cuộn

// scrollY: Lấy vị trí thanh cuộn theo trục Y
// scrollX: Lấy vị trí thanh cuộn theo trục X
/**
 * scroll ({
 * top: value1,
 * left: value2
 * })
 * =>> chuyển vị trí thanh cuộn tới vị trí đã chỉ định
 */

// Bài tập: kéo thanh cuộn xuống => Đổi body thành màu vàng, kéo thanh cuộn lên thì thành màu trắng

// window.addEventListener("scroll", function () {
//   console.log("Scroll event", window.scrollY);
// });
// var currentPosition = 0;
var btn = document.querySelector(".btn");
window.addEventListener("scroll", function () {
  //   if (window.scrollY > currentPosition) {
  //     document.body.style.backgroundColor = "yellow";
  //   } else {
  //     document.body.style.backgroundColor = null;
  //   }
  //   currentPosition = this.screenY;
  var position = window.scrollY;
  if (position >= 100) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});
btn.addEventListener("click", function () {
  window.scroll({ top: 0, behavior: "smooth" });
});
