// Destructuring ==> Áp dụng object, array
// Phá vỡ cấu trúc array, object để trả về 1 biến

// const user = {
//   name: "Hoang An",
//   email: "123@gmail.com",
//   shipping_address: "HCM",
//   age: 35,
// };

// const name = user.name;
// const email = user.email;
// const { name, email, shipping_address: shippingAddress, age = 32 } = user;
// Kỹ thuật đổi tên vs destructuring:  {key:key thay đổi}
// console.log(name, email, shippingAddress, age);

// const { name, ...rest } = user;
// console.log(name);
// console.log(rest);

// const user = {
//   displayName: "Hoang An F8",
//   emails: {
//     id: 1,
//     email: "123@gmail.com",
//   },
// };
// // Kỹ thuật destructuring trong destructuring
// const {
//   displayName,
//   emails: { email },
// } = user;
// console.log(displayName);
// console.log(email);

// const user = ["Hoàng An", "hoangan@gmail.com", 32, "Hà Nội"];
// console.log(user);
// // const [fullname, email, , address] = user;
// // console.log(fullname, email, address);
// const [fullname, ...rest] = user;
// console.log(fullname);
// console.log(rest);

// const something = function ({ name, email }) {
//   console.log(name, email);
// };
// something({ name: "Hoang An", email: "123@gmail.com" });

const users = [
  { name: "user 1", salary: 1000 },
  { name: "user 2", salary: 1200 },
  { name: "user 3", salary: 1500 },
];
const total = users.reduce(function (total, { salary }) {
  return total + salary;
}, 0);
console.log(total);
