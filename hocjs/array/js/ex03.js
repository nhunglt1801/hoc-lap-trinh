// Hàm xử lý mảng

console.log(Array.prototype);
// var users = ["User 1", "User 2", "User 3", "User 4", "User 2"];
// console.log(users);

// 1. includes() ==> Kiểm tra 1 phần tử có nằm trong 1 mảng hay không?

// console.log(users.includes("User 2"));
// console.log(users.includes("User 21"));

// 2. indexOf() ==> Kiểm tra 1 phần tử có nằm trong 1 mảng hay không? ==> trả về index đầu tiên

// console.log(users.indexOf("User 2"));

// 3. lastIndexOf() ==> Kiểm tra 1 phần tử có nằm trong 1 mảng hay không? ==> trả về index cuối cùng

// console.log(users.lastIndexOf("User 2"));
// 4. slice(start, end) ==> cắt mảng từ index start -> end - 1

// console.log(users.slice(1, 3)); // Lấy từ phần tử thứ 1 đến phần tử 3 - 1 = 2
// console.log(users.slice(1)); // Lấy toàn bộ phần tử tính từ phần tử 1 trở đi
// console.log(users.slice(-2)); // Lấy 2 phần tử cuối cùng

// 5. join(str) ==> nổi mảng thành chuỗi

// console.log(users.join(" - "));

// 6. sort() ==> Sắp xếp mảng theo thứ tự tăng dần (sắp xếp ký tự và thay đổi mảng ban đầu)
/**
 *
 * Có thêm tham số là callback
 * sort(function(a,b){
 * a: phần tử sau
 * b: phần tử trước
 * })
 *
 * Nếu hàm call back trả về giá trị âm ==> Đổi chỗ a và b
 */
// var arr = ["An", "Dũng", "Nam", "Bảo"];
// arr.sort();
// console.log(arr);
// var numbers = [1, 100, 10, 2, 8, 9];
// console.log(numbers);
// // numbers.sort();
// numbers.sort(function (a, b) {
//   //   console.log(`a = ${a}, b = ${b}`);
//   //   if (b > a) {
//   //     return -1;
//   //   }
//   return a - b;
// });
// console.log(numbers);

// Bài tập
var users = [
  "Tạ Hoàng An",
  "Đặng Ngọc Sơn",
  "Lưu Anh Quân",
  "Lê Đức Nam",
  "Trung Tuyển",
];
// Sắp xếp danh sách người dùng trên tăng dần theo tên

// Lấy ra tên của phần tử
var getFirstName = function (name) {
  return name.split(" ").slice(-1).join();
};
// Sắp xếp lại các phần tử theo tên
users.sort(function (a, b) {
  if (getFirstName(a) < getFirstName(b)) {
    return -1;
  }
});
// console.log(users);

// 7. reverse() ==> Đảo ngược mảng
// console.log(users.reverse());

// 8. push() ==> thêm phần tử vào cuối mảng
// var count = users.push("Item 5", "Item 6", "Item 7");
// console.log(count); // trả về số lượng phẩn tử mới
// console.log(users); // thay đổi mảng ban đầu

// 9. unshift() ==> thêm phần tử vào đầu mảng
// var count = users.unshift("Item 5", "Item 6", "Item 7");
// console.log(count);
// console.log(users);

// 10. pop() ==> xóa phần tử cuối mảng
// var value = users.pop(); // trả về phần tử được xóa
// console.log(users); // thay đổi mảng ban đầu
// console.log(value);

// 11. shift() ==> xóa phần tử đầu mảng
var value = users.shift(); // trả về phần tử được xóa
console.log(users); // thay đổi mảng ban đầu
console.log(value);
