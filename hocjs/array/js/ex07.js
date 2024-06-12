// var users = [
//   ["User 1", "user1@gmail.com"],
//   ["User 2", "user2@gmail.com"],
//   ["User 3", "user3@gmail.com"],
// ];
// console.log(users);
// Yêu cầu sửa tên của user có email là user2@gmail.com

// users.map(function (user) {
//   if (user[1] === "user2@gmail.com") {
//     user[0] = "User 2 update";
//   }
//   return user;
// });
// console.log(users);

// var user = users.find(function (user) {
//   return user[1] === "user2@gmail.com";
// });
// console.log(user);
// user[0] = "User Update";
// console.log(users);

var a = ["Hoang An", "hoangan@gmail.com"];

// var b = a;
// b[1] = "hoangan@fullstack.edu.vn";
// console.log(a);

// Sao chép mảng (Copy)

// Shallow Copy: copy được 1 cấp
/**
 * 1. Dùng các phương thức xử lý mảng mà trả về một mảng mới: slice, map, filter
 */

// var b = a.map(function (item) {
//   return item;
// });

/**
 * 2.Sử dụng cú pháp Spread (ES6)
 */

// var b = [...a];
// b[1] = "hoangan@fullstack.edu.vn";
// console.log(a);
// console.log(b);

// Deep Copy: copy được tất cả các cấp
// Chuyển thành định dạng JSON, sau đó chuyển ngược lại
// var json = JSON.stringify(a);
// var b = JSON.parse(json);

// b[1] = "hoangan@fullstack.edu.vn";
// console.log(a);
// console.log(b);

function test() {
  // Array-Like Object: một object có cấu trúc giống mảng
  //   Muốn sử dụng các phương thức xửl ý mảng
  // => Ép về kiểu mảng ==> Array.from()
  console.log(arguments);
  console.log(Array.prototype);
  Array.from(arguments).forEach((element) => {
    console.log(element);
  });
}
test(5, 10, 15, 20);

var arr2 = {
  0: 5,
  1: 10,
  2: 15,
  3: 20,
};
console.log(arr2);
Array.from(arr2).forEach(function (item) {
  console.log(item);
});
