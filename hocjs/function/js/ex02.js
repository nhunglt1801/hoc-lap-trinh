// var a = 10;
// console.log(a);
// var getA = function () {
//   console.log("GetA");
// };
// getA();

// console.log(window);
// console.log(window.a);
// window.getA();

// window.console.log("Helo ae");

// Hàm con
// function display() {
//   function showUser() {
//     console.log("Học Lập trình");
//   }
//   showUser();
// }
// display();
// // showUser(); // Không chạy
// // // Định nghĩa hàm ở đâu thì chạy ở đó

// // Ví dụ hàm con
// var a = 10;
// function display(c) {
//   var b = 20;
//   function showUser() {
//     console.log("Học lập trình");
//     console.log(b);
//     console.log(c);
//   }
//   showUser();
// }
// display("F8");

// function display() {
//   function showUser() {
//     console.log("Học F8");
//   }
//   return showUser;
// }

// var showUser = display();
// console.log(showUser);
// showUser();
// Chủ động gọi hàm con ở ngoài phạm vi

// Kỹ thuật thunk function
// var sum = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };

// // Bước 1: Tạo hàm con
// var add = sum(10);
// // Bước 2: Gọi hàm con
// var result1 = add(10);
// console.log(result1);

// var result2 = add(20);
// console.log(result2);

// var result3 = add(30);
// console.log(result3);

// IIFE (Immediately Invoked Function Expressions)
// (function (a) {
//   console.log("Học JS không khó", a);
// })("F8");

// Giải thuật đệ quy
// function showNumber(n) {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// }
// showNumber(10);

// S = 1+ 2+ 3+ 4+..+ N
// function getTotal(n) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return 1;
//   }
//   if (n > 1) {
//     return n + getTotal(n - 1);
//   }
// }
// var result = getTotal(10);
// console.log(result);

function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(10);
console.log(fibonacci(10));
