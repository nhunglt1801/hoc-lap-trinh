// Spread Operator
// const course = {
//   courseName: "fullstack",
//   coursePrice: 1000,
// };

// const user = {
//   name: "Hoàng An",
//   email: "124@gmail.com",
//   //   ...course,
// };
// console.log(user);

// Copy biến user và lưu vào biến mới, đồng thời đổi giá trị của key name
// const newUser = { ...user, name: "Hoang An F8" };
// console.log(user, newUser);

// const state = {
//   msg: "OK chưa",
//   products: ["product1", "product2"],
// };

// Tạo 1 object mới copy từ object state và thực hiện các công việc sau
// - Giữ nguyên msg
// - Thêm Product 3 vào key products
// const newState = {
//   ...state,
//   products: [...state.products, "product3"],
// };
// console.log(newState);

// Enhanced Object Literal
// const fullname = "hoang an";
// const email = "1213@gmail.com";
// const age = undefined;
// const user = {
//   fullname,
//   email,
//   age,
//   getName() {
//     return this.fullname;
//   },
// };
// console.log(user);
// console.log(user.getName());

// name arguments

// const something = function (a, b = 0, c = false, d = null) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
// };
// something("F8");

const something = function ({ a, b = 0, c = false, d = null }) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
};
const a = "F8";
const c = true;
something({ a, c });

// Arrow function
// Class
// Module: export, import, commonJS, es6 module

// Bất đồng bộ
