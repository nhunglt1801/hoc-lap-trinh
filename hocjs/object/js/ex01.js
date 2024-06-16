console.log(Object);
var user = {
  name: "Nhung Le",
  email: "nhunglt1801@gmail.com",
  getName: function () {
    return this.name;
  },
  course: null,
  profile: {
    age: 32,
    address: "Hà Nội",
    shippingAddress: "Hà Nam",
    "billing-Address": "Hồ Chí Minh",
  },
};
// console.log(user);
// console.log(user.name);
// console.log(user.email);
// console.log(user.getName());
// console.log(user.profile.age);
// console.log(user.profile.address);
// console.log(user.profile["address"]);
// console.log(user.profile["billing-Address"]);

// user.email = "file@gmail.com";
// console.log(user.email);
// user.course = "Fullstack";
// console.log(user);

// delete user.getName;
// console.log(user);

// for (var key in user) {
//   if (typeof user[key] === "function") {
//     user[key]();
//   } else if (typeof user[key] !== "object" || user[key] === null) {
//     console.log(user[key]);
//   }
// }

// Nối 2 object (Không dùng hàm có sẵn của object)

// var obj1 = {
//   name: "Hoang An",
//   email: "hoangan@gmail.com",
// };
// var obj2 = {
//   age: 32,
//   role: "Teacher",
// };
// var obj3 = {};
// for (var key in obj1) {
//   obj3[key] = obj1[key];
// }
// for (var key in obj2) {
//   obj3[key] = obj2[key];
// }
// obj1.email = "nhunglt1801@gmail.com";
// console.log(obj3);

var user = {
  name: "Hoang An",
  email: "hoangan@gmail.com",
  age: 32,
};
// console.log(Object.keys(user));

// Kiểm tra 1 object có empty hay không?
// if (Object.keys(user).length) {
//   console.log("Not Empty");
// } else {
//   console.log("empty");
// }

// Object.values() ==> trả về 1 mảng chứa các value của object
// console.log(Object.values(user));

// Object.entries() ==> trả về 1 mảng 2 chiều chứa cả key và value của object
// console.log(Object.entries(user));

// Object.fromEntries() ==> trả về 1 object từ 1 mảng 2 chiều
// var arr = [
//   ["name", "Hoàng An"],
//   ["email", "hoangan@gmail.com"],
//   ["age", 32],
// ];
// console.log(Object.fromEntries(arr));

// Bài tập: chuyển object thành query string
// Không dùng hàm có sẵn
// var query = {
//   category: 1,
//   keyword: "Khóa học Fullstack",
//   status: true,
// };
// console.log(query);

// var queryString = Object.entries(query)
//   .map(function (item) {
//     return (item[0] + "=" + item[1]).replaceAll(" ", "+");
//   })
//   .join("&");

// var queryString = Object.entries(query)
//   .map(function (item) {
//     return item.join("=");
//   })
//   .join("&")
//   .replaceAll(" ", "+");
// console.log(queryString);

// Bài tập: chuyển query string với object

// var query = [];
// var allowArr = ["true", "false"];
// query = queryString.split("&").map(function (item) {
//   var arr = item.split("=");
//   if (!isNaN(+arr[1])) {
//     arr[1] = +arr[1];
//   } else if (allowArr.includes(arr[1])) {
//     arr[1] = arr[1] === "true";
//   } else {
//     arr[1] = arr[1].replaceAll("+", " ");
//   }
//   return arr;
// });
// query = Object.fromEntries(query);
// console.log(query);
var user = {
  name: "Hoang An",
  email: "hoangan@gmail.com",
};
var course = {
  courseName: "Fullstack",
  coursePrice: 120000,
};
var result = Object.assign({}, user, course);
console.log(result);
console.log(user);
