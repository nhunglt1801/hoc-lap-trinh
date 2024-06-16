// var user = {
//   name: "Nhung Le",
//   email: "nhunglt1801@gmail.com",
//   getName: function () {
//     // var _this = this;
//     return {
//       age: 18,
//       address: "Hà Nội",
//       getEmail: function () {
//         // console.log(_this.email);
//         // Thay đổi context cho hàm getEmail (Thay đổi giá trị this)
//         console.log(this.email);
//       },
//     };
//   },
// };
// user.getName().getEmail.bind(user).call();

var user = {
  name: "Nhung Le",
  email: "nhunglt1801@gmail.com",
  age: 32,
};

// Nối các giá trị của các key không phải là hàm trong object user

var product = {
  name: "SP1",
  price: 1000,
};

Object.prototype.combineValue = function () {
  var arr = [];
  var _this = this;
  Object.keys(this).forEach(function (key) {
    var value = _this[key];
    if (typeof value !== "function") {
      arr.push(value);
    }
  });
  return arr;
};
console.log(user.combineValue());
console.log(product.combineValue());

Object.prototype.message = "Học JS không khó";
// var a = [];
// console.log(a);
// console.log(a.message);

// var a = "Hoang An F8"; // String
// console.log(a.message);
// var b = true; // Boolean
// console.log(b.message);
// var c = 10; // Number
// console.log(c.message);
// var d = BigInt(10); //BigInt
// console.log(d.message);
// var something = function () {
//   console.log("123");
// };
// //Function
// console.log(something.message);

// Array.prototype.a = "Hoang An";
// var arr = [];
// console.log(arr.a);

// var fullName = "F8";

// String.prototype.a = "hihi";
// console.log(fullName.a);

// var users = ["Item 1", "Item 2", "Item 3"];
// Array.prototype.lastest = function () {
//   return this[this.length - 1];
// };
// console.log(users.lastest());

// Bài tập:
// Viết lại vòng lặp map trong mảng
var users = ["User 1", "User 2", "User 3"];

Array.prototype.map2 = function (callback) {
  if (typeof callback !== "function") {
    return false;
  }
  var newArr = [];
  for (var i = 0; i < this.length; i++) {
    var value = this[i];
    var newValue = callback(value, i);
    console.log(newValue);
    newArr[newArr.length] = newValue;
  }
  return newArr;
};
var newArr = users.map2(function (user, index) {
  return `<h3>${index} - ${user}</h3>`;
});
console.log(newArr);
