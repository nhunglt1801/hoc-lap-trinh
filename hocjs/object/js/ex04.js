function User() {
  this.name = "Nguyen Van A";
  this.email = "nguyenvana@gmail.com";
  this.find = function () {
    return {
      name: this.name,
      email: this.email,
    };
  };
}

function Authentication() {
  User.call(this);
  //   Thay đổi this của User thành đối tượng của Authentication
  this.getProfile = function () {
    console.log(this);
    return this.find();
  };
}
var auth = new Authentication();
// console.log(auth.getProfile());

// Gợi ý: Tìm hiểu hàm call()

// var user = {
//   name: "Hoang An",
//   email: "hoangan@gmail.com",
// };
// function something(a, b) {
//   console.log(a, b);
//   console.log(this);
// }
// something.call(user, 1, 2);

var users = [
  {
    id: 1,
    name: "User 1",
    email: "user1@gmail.com",
    status: true,
    createdAt: "2024-06-18 00:00:00",
    updatedAt: "2024-06-18 00:00:00",
  },
  {
    id: 2,
    name: "User 2",
    email: "user2@gmail.com",
    status: false,
    createdAt: "2024-06-18 00:00:00",
    updatedAt: "2024-06-18 00:00:00",
  },
  {
    id: 3,
    name: "User 3",
    email: "user3@gmail.com",
    status: true,
    createdAt: "2024-06-18 00:00:00",
    updatedAt: "2024-06-18 00:00:00",
  },
];

console.log(users);
function BaseTransformer(data) {
  var _this = this;
  return data.map(function (item) {
    return _this.response(item);
  });
}
// Xây dựng tầng transformer
function UserTransformer(data) {
  this.response = function (resource) {
    return {
      UID: resource.id,
      fullname: resource.name,
      email: resource.email,
      status: resource.status,
      statusText: resource.status ? "Active" : "Inactive",
      createdAt: resource.createdAt,
      updatedAt: resource.updatedAt,
    };
  };
  return BaseTransformer.call(this, data);
}
var output = new UserTransformer(users);
console.log(output);

// Toán tử Optional Chaining
// ?.

// var user = null;
// console.log(user?.message);

// var user = {};
// console.log(user.getName?.());

var users = null;
if (users?.length) {
  users.forEach?.(function (user) {
    console.log(user);
  });
}

// Tham chiếu

var a = {
  name: "Hoàng An",
  email: "hoangan@gmail.com",
};
// var b = a;
// var b = Object.assign({}, a); // Tạo ra 1 object mới
// var b = { ...a }; // spread object
var b = JSON.parse(JSON.stringify(a)); // dùng json
b.name = "Hoàng An F8";
console.log(a);
console.log(b); 

var data = {
  user: ["User 1"],
};
function getNewData() {
  var value = Object.assign({}, data);
  value.message = "Hello";
  return value;
}
console.log(getNewData());
console.log(data);
