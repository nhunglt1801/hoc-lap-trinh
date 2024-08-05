// Arrow function
// const getMessage = (msg) => {
//   console.log("hello", msg);
// };
// getMessage("F8");

// const getTotal = (a, b) => a + b;
// console.log(getTotal(10, 20));

// const getUser = () => ({
//   email: "hoangan@gmail.com",
// });
// console.log(getUser());
// const getFullname = () => ["Hoang An"];
// console.log(getFullname());

// const users = [
//   {
//     id: 1,
//     name: "user 1",
//   },
//   {
//     id: 2,
//     name: "user 2",
//   },
//   {
//     id: 3,
//     name: "user 3",
//   },
// ];

// const getUser = (userId) => users.find(({ id }) => userId === id);
// console.log(getUser(2));

// Từ khóa this ==> Nhận từ khóa this của function cha
// Không có từ khóa arguments
// Không dùng làm Function Constructor
// Không có object prototype
// Không có hoisting

const contentEl = document.querySelector(".content");
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  const h1 = document.createElement("h1");
  h1.innerText = `Học JS làm gì`;
  contentEl.append(h1);
  h1.addEventListener("click", () => {
    console.log(arguments);
    console.log(this);
  });
});
// const something = () => {
//   console.log(arguments);
// };
// something();
// const User = () => {
//   this.email = "hoangan@gmail.com";
// };
// const user = new User();
