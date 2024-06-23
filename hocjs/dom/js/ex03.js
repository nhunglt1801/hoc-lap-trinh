// DOM HTML: thao tác vs thẻ html
/**
 * - Nội dung:
 * - Thuộc tính
 * - Xóa
 * - Class
 *
 */

// var contentEl = document.querySelector(".content");

// Lấy nội dung thẻ html: innerHTML

// console.log(contentEl.innerHTML);
// contentEl.innerHTML = `<h2>Học lập trình không khó</h2>`;

// innerText

// console.log(contentEl.innerText);
// contentEl.innerText = `<h2>Học lập trình không khó</h2>`;

// textContent

// console.log(contentEl.textContent);

// contentEl.textContent = `
// <h2>Học lập trình không khó</h2>
// `;

// outerHTML
// console.log(contentEl.outerHTML);

// contentEl.outerHTML = `<h2>Học lập trình làm gì</h2>`;

// outerText
// console.log(contentEl.outerText);
// contentEl.outerText = `<h2>Học lập trình làm gì</h2>`;

var numberEl = document.querySelector(".number");
var minusBtn = document.querySelector(".minus-btn");
var plusBtn = document.querySelector(".plus-btn");
var handleMinusBtn = function () {
  numberEl.innerText--;
};
var handlePlusBtn = function () {
  numberEl.innerText++;
};
// console.log(numberEl);
// console.log(minusBtn);
// console.log(plusBtn);
minusBtn.addEventListener("click", handleMinusBtn);
plusBtn.addEventListener("click", handlePlusBtn);
// minusBtn.addEventListener("click", function () {
//   numberEl.innerText--;
// });
// plusBtn.addEventListener("click", function () {
//   numberEl.innerText++;
// });
