// DOM Navigation

// Họ children => lấy tất cả element nodes

// 1. chọn thành phần cha: parentElement
// 2. chọn thành phần con: children (Trả về 1 danh sách các element con trong phần cha)
// 3. chọn thành phần kế tiếp: nextElementSibling
// 4. chọn thành phần phía trước: previousElementSibling
// 5. chọn element đầu tiên: firstElementChild
// 6. chọn element cuối cùng: lastElementChild

// Họ childNodes => lấy tất các node con, bao gồm text nodes, element nodes,...

// parentNodes
// childNodes
// nextSibling
// previousSibling

// var items = document.querySelectorAll("ul a");
// console.log(items);
// items.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     e.preventDefault();

// var li = this.parentElement;
// li.classList.add("active");

// Array.from(this.parentElement.children[1].children).forEach(function (li) {
//   li.classList.add("active");
// });

// console.log(this.nextElementSibling);

// console.log(this.previousElementSibling);

//   });
// });

// var lists = document.querySelector(".lists");

// console.log(lists.children);
// console.log(lists.childNodes);

// console.log(lists.firstChild);
// lists.firstChild.data = "F8";
// lists.childNodes[1].data = "Sửa comment";

var lists = document.querySelectorAll(".menu li");
function deactivateOtherMenus(currentLi) {
  lists.forEach(function (li) {
    if (li !== currentLi) {
      li.classList.remove("active");
    }
  });
}
lists.forEach(function (li) {
  if (li.children.length > 1) {
    li.classList.add("has-children");
  }
  li.addEventListener("click", function (e) {
    e.preventDefault();
    if (this.children.length > 1) {
      deactivateOtherMenus(this);
      this.classList.toggle("active");
    }
  });
});
