// Câu lệnh rẽ nhánh
/**
 * Giúp thực thi các đoạn code dựa vào điều kiện
 * Chia thành 4 trường hợp:
 * - Câu lệnh rẽ nhánh thiếu
 * - Câu lệnh rẽ nhánh đầy đủ
 * - Câu lệnh rẽ nhiều nhánh
 * - Câu lệnh rẽ nhánh lồng nhau
 *
 */

/**
 * Câu lệnh:
 * - if else
 * - switch case
 */

// var number = 10;
// if (number >= 10) {
//   console.log("Đúng");
// } else {
//   console.log("Sai");
// }
// if (number < 0) {
//   console.log("số âm");
// } else if (number >= 0 && number < 5) {
//   console.log("số siêu nhỏ");
// } else if (number >= 5 && number < 10) {
//   console.log("số nhỏ");
// } else if (number >= 10 && number < 15) {
//   console.log("số trung bình");
// } else {
//   console.log("số lớn");
// }

// var email = "";
// var password = "";

// if (!email || !password) {
//   if (!email) {
//     console.log("Vui lòng nhập email");
//   } else {
//     console.log("Vui lòng nhập password");
//   }
// } else {
//   console.log("Thông tin đầy đủ");
// }
// var salary = -1;
// var tax; // Phần trăm thuế
// var income = 0; // Thu nhập
// if (salary > 0) {
//   if (salary > 0 && salary <= 5000000) {
//     tax = 0;
//   } else if (salary < 15000000) {
//     tax = 3;
//   } else {
//     tax = 5;
//   }
//   income = salary - (salary * tax) / 100;
//   console.log("Tổng tiền thực nhận:", income);
// } else {
//   console.log("Không hợp lệ");
// }
// var saleRate = 5;
// var salePrice = 1000000; // Giảm 5%
// // Tìm giá gốc
// // salePrice = priceProduct - priceProduct * saleRate / 100;
// // salePrice = priceProduct *(1 - saleRate/100);
// // priceProduct = salePrice/(1 - saleRate/100)
// var priceProduct = salePrice / (1 - saleRate / 100);
// console.log(priceProduct);
