function User(name, email, phone, password) {
  this.b = "F8";
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.password = password;
  this.getInfo = function () {
    return `Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
  };
  this.login = function () {
    console.log("đăng nhập");
  };
}
// Sử dụng quy tắc đặt tên PascalCase để đặt tên cho constructor
// Sử dụng danh từ
// Sử dụng quy tắc đặt tên snake_case để đặt tên cho method
// var number = 10;
// if (number >= 5) {
//   User.prototype.getNumber = function () {
//     return number;
//   };
// }

// var user = new User(
//   "Nguyen Van A",
//   "nguyenvanA@gmail.com",
//   "0987654321",
//   "123456"
// );
// console.log(user);
// console.log(user.getInfo());

// var product = {
//   name: "Sản phẩm",
//   price: 1200,
// };
// Kiểm tra một object thuộc Constructor nào?
// console.log(user.constructor.name);
// var product = null;
// console.log(product.constructor.name);
// if (
//   (product !== null) & (product !== undefined) &&
//   product.constructor.name === "Object"
// ) {
//   console.log("Constructor Object");
// }

// if (user instanceof User) {
//   console.log("Constructor User");
// }

// Class/ Constructor ==> Object ==> Instance

// Phương thức tĩnh, thuộc tính tĩnh
User.message = "Học js không khó";
User.getMessage = function () {
  var object = new this();
  //   console.log(new this().a);
  //   console.log(new this().b);
  console.log(object.a);
  console.log(object.b);
  return "Học lập trình không khó";
};
// console.log(User.message);
// console.log(User.getMessage());

// User.prototype.getMessage = function () {
//   // Đọc giá trị thuộc tính static message
//   console.log(this);
// };
// var user = new User();
// user.getMessage();

// User.prototype.a = "Xin chào các bạn"; // non-static

// User.getMessage();

function Person() {
  this.data = ["Item 1", "Item 2", "Item 3"];
}
Object.defineProperties(Person.prototype, {
  latest: {
    // getter
    get: function () {
      return this.data[this.data.length - 1];
    },
    // setter
    set: function (value) {
      this.data.push(value);
    },
  },
});
var person = new Person();
console.log(person);
console.log(person.latest); // Trả về phần tử mảng cuối cùng của thuộc tính data
person.latest = "Item 4";
console.log(person.data);

var a = ["Item 1", "Item 2", "Item 3"];
a.length = 2;
console.log(a);
