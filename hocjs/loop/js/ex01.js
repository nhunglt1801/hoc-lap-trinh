// Vòng lặp
/**
 * Cú pháp trong lập trình cho phép 1 đoạn chương trình có thể lặp đi lặp lại theo số lần nhất định
 * 2 loại vòng lặp:
 * - Biết trước số lần lặp: for
 * - Không biết trước số lần lặp: while và do while
 * Lưu ý: Các vòng lặp áp dụng riêng cho các kiểu dữ liệu
 * => Học sau
 *
 */

// Vòng lặp for
/**
 * Cú pháp:
 * for ( giá trị khởi tạo; điều kiện dừng; bước nhảy) {}
 */

// for (var i = 10; i >= 1; i--) {
//   console.log("Lần lặp thứ " + i);
// }

// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= 5; j++) {
//     console.log(`i = ${i} - j = ${j}`);
//   }
// }

// Bài tập: Tính giá trị biểu thức sau
// Total = 1 + 2 + 3 + ... + n

// var n = 10;
// var total = 0;
// for (var i = 1; i <= n; i++) {
//   total += i;
// }
// console.log(`total = ${total}`);

// var n = 10;
// var factorial = 1;
// for (var i = 1; i <= n; i++) {
//   factorial *= i;
// }
// console.log(`factorial = ${factorial}`);

// var n = 5;
// var total = 0;
// var factorial = 1;
// for (var i = 1; i <= n; i++) {
//   factorial = 1;
//   for (var j = 1; j <= i; j++) {
//     factorial *= j;
//   }
//   total += factorial;
// }
// console.log(`total = ${total}`);

// var n = 5;
// var total = 0;
// var factorial = 1;
// for (var i = 1; i <= n; i++) {
//   factorial *= i;
//   console.log(`i = ${i} - factorial = ${factorial}`);
//   total += factorial;
// }
// console.log(`total = ${total}`);

// Bài tập kiểm tra số nguyên tố
/**
 * > 1
 * Chỉ chiahết cho 1 và chính nó
 */

var n = 127;
var check = true; //Giả sử n là số nguyên tố
// if (n < 2) {
//   check = false;
// } else {
//   for (var i = 2; i <= n / 2; i++) {
//     if (n % i === 0) {
//       check = false;
//       break;
//     }
//   }
// }
// if (check) {
//   console.log(`${n} là số nguyên tố`);
// } else {
//   console.log(`${n} không phải là số nguyên tố`);
// }
// if (n % 1 !== 0 || n <= 1) {
//   check = false;
// } else {
//   for (var i = 2; i < n; i++) {
//     if (n % i == 0) {
//       check = false;
//       break;
//     }
//   }
// }
// if (check) {
//   console.log(`${n} là số nguyên tố`);
// } else {
//   console.log(`${n} không phải là số nguyên tố`);
// }

for (var i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(`i = ${i}`);
}
