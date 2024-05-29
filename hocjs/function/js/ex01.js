// Hàm trong js
/**
 * - Cú pháp trong lập trình dùng để thể hiện các chức năng (Động từ)
 * - Hàm sẽ nhóm các đoạn chương trình con để dễ dàng gọi lại => tái sử dụng
 *
 * Hàm trong js có 2 loại:
 * - Hàm tự định nghĩa bởi lập trình viên
 * - Hàm có sẵn: trình duyệt, engine
 *
 * function tenham(thamso1, thamso2,...) {
 * Nội dung hàm
 * }
 * Lưu ý: Đặt tên hàm
 * - Quy tắc camelCase
 * - Sử dụng động từ:
 * + get
 * + set
 * + make
 * + build
 * + call
 * + remove
 * + create
 * + insert
 *
 *
 * Định nghĩa hàm => tham số (parameter)
 * Gọi hàm => Đối số (argument)
 *
 * - Hàm có giá trị trả về (hàm return)
 * - Hàm không có giá trị trả về (hàm void)
 *
 */

// function getMessage(msg, type = "success") {
//   console.log("Học js không khó");
//   console.log(msg);
//   console.log(type);
//   return "F8";
// }
// var result = getMessage("F8 - Fullstack", "error"); // Lời gọi hàm chủ động
// console.log(result);

// function division(a, b) {
//   if (b !== 0) {
//     return a / b;
//   }
//   return "Không tính được";
// }
// var result = division(10, 4);
// console.log(result);

/**
 * Biến toàn cục và biến cục bộ
 * - Biến toàn cục: Biến khai báo ở phạm vi ngoài hàm
 * - Biến cục bộ: Biến khai báo ở phạm vi trong 1 hàm, chỉ được sử dụng trong phạm vi của hàm đó
 * Lưu ý: trong js không có khái niệm tham chiếu, tham trị
 */

// var data = "F8";
// function getData() {
//   return data;
// }
// function setData(value) {
//   data = value;
// }
// setData("Fullstack");
// var result = getData();
// console.log(result);

// function getTotal(a, b) {
//   var total = a + b;
//   return total;
// }
// var result = getTotal(10, 20);
// console.log(result);

// Anonymous function: hàm ẩn danh, hàm không tên
/**
 * Muốn thực thi:
 * Cách 1: Gán vào 1 biến (Expression Function). Lưu ý bắt buộc phải định nghĩa trước.
 * Cách 2: Đưa vào 1 hàm khách dưới dạng đối số
 */

// function getMsg() {
//   console.log("Học js không khó");
// }
// var getMessage = getMsg();
// getMessage;

// var display = function (callback, args) {
//   /*
//   callback = function(){
//   console.log("Học js để làm gì");
//   }
//    */
//   //   if (typeof callback === "function") {
//   //     callback();
//   //   }
//   console.log("Học JS");
//   typeof callback === "function" && callback(args);
// };
// display(function () {
//     console.log("Học js để làm gì");
//   });
// var handleDisplay = function (text) {
//   console.log("Học js để làm gì");
//   console.log(text);
// };
// display(function () {
//   handleDisplay("F8");
// });
// display(handleDisplay, "F8");

// Từ khóa arguments:
// function max(a, b) {
//   console.log(a, b);
//   console.log(arguments);
// }
// max(5, 19, 18, 3, 5, 30);
// Rest Parameter (Tham số còn lại)
// function display(value1, value2, value3, value4) {
//   console.log(value1);
//   console.log(value2);
//   console.log(value3);
//   console.log(value4);
// }
// function max(a, b, ...args) {
//   console.log(a, b);
//   //   display(...args); // Spread Operator
//   display.apply({}, args);
// }
// max(5, 19, 18, 3, 5, 30);

// Hàm setTimeout, setInterval => hàm sử dụng callback và là hàm bất đồng bộ

// setTimeout(
//   function (value1, value2, value3) {
//     console.log("Học lập trình không khó");
//     console.log(value1);
//     console.log(value2);
//     console.log(value3);
//   },
//   1000,
//   "F8",
//   "F9",
//   "F10"
// );

// setInterval
// var count = 0;
// var id = setInterval(function () {
//   console.log("Học lập trình không khó", ++count);
//   if (count === 5) {
//     clearInterval(id);
//   }
// }, 1000);

var getA = function (callback) {
  setTimeout(function () {
    console.log("getA");
    typeof callback === "function" && callback();
  }, 1000);
};
var getB = function (callback) {
  setTimeout(function () {
    console.log("getB");
    typeof callback === "function" && callback();
  }, 500);
};
var getC = function () {
  setTimeout(function () {
    console.log("getC");
  }, 1500);
};

getA(function () {
  getB(getC);
});

/**
 * Nội dung buổi sau:
 * - Định nghĩa hàm con*
 * - Closure*
 * - Kỹ thuật thunk function
 * - IIFE
 * - Giải thuật đệ quy
 *
 * Tìm hiểu:
 * - Async function
 * - Generator Function
 */
