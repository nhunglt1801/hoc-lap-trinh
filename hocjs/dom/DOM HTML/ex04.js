var a = document.querySelector("a");
console.log(a);
console.log(a.href);
console.log(a.title);
console.log(a.target);
console.log(a.id);
console.log(a.className); //

a.href = "https://google.com";
// console.log(a.width); // kết quả là undefined do thuộc tính width không có trong thẻ a
// Lưu ý: chỉ khả dụng với các thuộc tính hợp lệ của thẻ html

// getAttribute(tenthuoctinh): không cần thuộc tính trong thẻ html
// console.log(a.getAttribute("width"));

// setAttribute(tenthuoctinh, giatri): thay đổi thuộc tính trong thẻ html
// a.setAttribute("width", 300);

// removeAttribute(tenthuoctinh): xóa thuộc tính trong thẻ html
// a.removeAttribute("width");
a.removeAttribute("target");

// Trong html có một loại thuộc tính do lập trình viên tự thêm và xử lý bằng js => gọi là data attribute (data-*)

console.log(a.getAttribute("data-width"));
a.setAttribute("data-width", 400);

// Ngoài ra có thể truy cập vào data attribute bằng dataset object

console.log(a.dataset);
console.log(a.dataset.width);

a.dataset.height = 100;

// Thêm thuộc tính data-animation-duration = "1s";
a.dataset.animationDuration = "1s";
a.dataset.animationTimingFunction = "ease-in";

delete a.dataset.width;

// Classlist

console.log(a.className);
// a.className = a.className + " new-class";

console.log(a.classList);
a.classList.add("text-1", "text-2"); // thêm class
console.log(a.classList);
a.classList.remove("text-2"); // xóa class
console.log(a.classList);
a.classList.replace("text-1", "text-3"); // thay đổi class
console.log(a.classList);
a.classList.toggle("content"); // thay đổi class (khôngc ó thì thêm, có thì xóa)
a.classList.toggle("content");
console.log(a.classList.contains("text"));
console.log(a.classList);

var liList = document.querySelectorAll("ul li");

liList.forEach(function (li) {
  li.addEventListener("click", function () {
    console.log(this);
  });
});
