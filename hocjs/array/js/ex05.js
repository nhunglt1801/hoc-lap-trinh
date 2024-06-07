// 1. some(callback)
/**
 * - Duyệt qua từng phần tử của mảng ban đầu
 * - Trả về giá trị true, false
 * - trả về True -> nếu có ít nhất 1 lần return trong callback là truthy
 */
// var numbers = [1, 2, 3, 5, 6, 9];
// // Kiểm tra trong mảng numbers có số chẵn hay không?
// var check = numbers.some(function (item) {
//   return item % 2 === 0;
// });
// console.log(check);

// 2. every(callback)
/**- Duyệt qua từng phần tử của mảng ban đầu
 * - Trả về giá trị true, false
 * - trả về True -> nếu tất cả các phần tử đều return trong callback là truthy
 *
 */

// var numbers = [1, 3, 5, 7, 9];
// // Kiểm tra trong mảng numbers có phải tất cả là số lẻ không?

// var check = numbers.every(function (value) {
//   return value % 2 !== 0;
// });
// console.log(check);

// 3. find(callback)
/**
 * - Cách hoạt động giống filter
 * - Khác: trả về phần tử đầu tiên tìm được
 *
 */

// var users = ["User 1", "User 2", "User 3", "User 4"];
// var result = users.filter(function (value, index) {
//   return index >= 1;
// });
// console.log(result);

// var result = users.find(function (value, index) {
//   return index >= 1;
// });
// console.log(result);

// 4. findLast(callback)
/**
 * - Cách hoạt động giống filter
 * - Khác: trả về phần tử cuối cùng tìm được
 *
 */
// var result = users.findLast(function (value, index) {
//   return index >= 1;
// });
// console.log(result);

// Bài tập

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var arr = [];
// Tìm phần tử giao giữa 2 mảng
arr = arrA.filter(function (value) {
  return arrB.includes(value);
});
console.log(arr);
