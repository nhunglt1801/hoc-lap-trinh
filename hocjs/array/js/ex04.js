// Vòng lặp trong mảng
var users = ["User 1", "User 2", "User 3", "User 4"];
// 1. forEach(callback) ==> dùng để duyệt mảng
// users.forEach(function (value, index) {
//   console.log(value, index);
// });

// 2. map(callback)
/*
    - Duyệt qua từng phần tử của mảng ban đầu
    - Trả về một mảng mới có số phần tử bằng số phần tử mảng ban đầu
    - Giá trị các phần tử của mảng mới là giá trị của callback (callback return giá trị gì, lưu vào mảng mới)
    */

// var newArr = users.map(function (value, index) {
//   console.log(value, index);
//   return `${value} - ${index + 1}`; //callback return gì thì sẽ trả về giá trị đó
// });
// console.log(newArr);

// 3. filter(callback) ==>
/**
 * - Duyệt qua từng phần tử
 * - Trả về một mảng mới, giá trị phần tử của mảng mới sẽ là các phần tử của mảng ban đầu nếu callback trả về truthy
 */
// var result = users.filter(function (value, index) {
//   return index > 1; // trả về mảng mới nếu điều kiện là truthy
// });
// console.log(result);

// 4. splice( ) ==> Xóa phần tử trong mảng: splice(index, number) => Xóa phẩn tử từ vị trí index với số lượng là number
// console.log(users);
// var result = users.splice(1, 2);
// // users.splice(1, 2, "Item 1", "Item 2", "Item 3");
// console.log(users);
// console.log(result);

// Bài tập
// Xóa khách hàng có email là Customer2@gmail.com
// var customers = [
//   ["Customer 1", "Customer1@gmail.com", 32],
//   ["Customer 2", "Customer2@gmail.com", 28],
//   ["Customer 3", "Customer3@gmail.com", 31],
//   ["Customer 4", "Customer4@gmail.com", 29],
// ];
// console.log(customers);
// var customers = customers.filter(function (value) {
//   return !value.includes("Customer2@gmail.com");
// });

// Tăng tuổi của khách hàng có email Customer2@gmail.com
// Gợi ý: Dùng vòng lặp map
// customers = customers.map(function (customer) {
//   //   if (customer.includes("Customer2@gmail.com")) {
//   //     customer[2] += 2;
//   //   }
//   //   return customer;

//   return (
//     customer.includes("Customer2@gmail.com") && (customer[2] += 2), customer
//   );
// });
// console.log(customers);
var data = [];
var addData = function (value, status) {
  var insertItem = function (item) {
    if (!data.includes(item)) {
      data.push(item);
    }
  };
  var removeItem = function (item) {
    data = data.filter(function (itemData) {
      return itemData !== item;
    });
  };
  if (status) {
    insertItem(value);
  } else {
    removeItem(value);
  }
  //   if (status && !data.includes(value)) {
  //     data.push(value);
  //   } else if (!status && data.includes(value)) {
  //     data.splice(data.indexOf(value));
  //   }
};
/**
 * Giải thích:
 * Nếu status = true => thêm value vào mảng data (kiểm tra trùng)
 * Nếu status = false => Xóa phần tử có value
Ví dụ:
addData("An", true);
addData("An", true);
addData("Quân", true);
addData("Quân", false);

 */
addData("An", true);
addData("An", true);
addData("Quân", true);
addData("Quân", false);
addData("Quân", false);
addData("Nhung", false);
console.log(data);
