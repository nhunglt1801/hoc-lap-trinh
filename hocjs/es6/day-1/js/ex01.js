// scope
// global scope và local scope

// từ khóa let vs const
// Chỉ hoạt động trong scope mà nó khai báo (Cả vs block scope);
/**
 * let:
 * - được phép gán lại
 * - không được khai báo lại trong cùng scope
 *
 * -------------------------
 *
 * const:
 * - không được gán lại
 * - khi khai báo phải gán luôn
 * - sử dụng const cho các kiểu dữ liệu tham chiếu: array, object, function
 * - xử lý bài toán trùng lặp hàm function
 */
// let a = 10;
// if (a >= 10) {
//   let b = 20;
//   console.log(b);
// }
// console.log(b); // => lỗi -> biến b chỉ có tác dụng trong scope (trong vòng lặp if)

// let a = 10;
// a = 20;
// console.log(a);
// const b = undefined;
// console.log(b);

// const user = {
//   name: "Hoang An",
//   email: "123@gmail.com",
// };
// user.name = "124";
// const something = function () {
//   console.log(124);
// };
// var something = function () {
//   console.log(8179);
// };
// something();

// Hoisting không áp dụng khi sử dụng let và const
// console.log(a);
// let a = 10;
