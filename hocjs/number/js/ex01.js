// Number: là kiểu dữ liệu nguyên thủy, thể hiện các giá trị số

// Hàm tạo: Number()
console.dir(Number);

// var a = 12;
// console.log(a, typeof a);

// Kiểm tra một biến có phải number không

/**
 * Các tình huống:
 * - typeof = number
 * - không phải NaN (Not a Number)
 * - không phải infinity
 *
 */
// Ép kiểu:
/**
 * 1. Dùng hàm Number()
 */
// var a = "12";
// a = +a;
// a = Number(a); // kết quả của ép kiểu thất bại -> NaN
// console.log(a, typeof a);

// 2. Dùng hàm parseInt() và parseFloat()
// var a = "a12.55";
// a = Number.parseInt(a);
// a = Number.parseFloat(a);
// console.log(a, typeof a);

// Tự động ép kiểu: khi gặp các toán tử số học (trừ phép +)
// var a = 10;
// var b = "5a";
// console.log(a - b);

// Số NaN (Not A Number) => giá trị khi ép kiểu/ tính toán thất bại

// var a = NaN;
// if (isNaN(a)) {
//   console.log("Số NaN");
// }

// Số Infinity: vượt quá khả năng lưu trữ

// var a = 1000 ** 1000;
// var b = 2000 ** 2000;
// console.log(a);
// console.log(b);
// console.log(a === b);

// Tìm hiểu về các hàm

// toFixed(number) ==> Lấy số chữ số phần thập phân sau dấu chấm và tự động làm tròn nếu giá trị thập phân >= 5.

var price = 123436.12549;
// console.log(price.toFixed(0));

// toPrecision() ==> Lấy số chữ số phần thập phân từ đầu và tự động làm tròn nếu giá trị cuối cùng cần làm tròn >= 5.

// console.log(price.toPrecision(5));
// ==> dùng hàm toFixed và toPrecision => trả về chuỗi, nếu cần tính toàn thì cần ép kiểu

// toLocaleString() ==> định dạng số theo quốc gia/ khu vực

var price = 12000000000;
console.log(price.toLocaleString("en-US"));

// Math: các hàm toán học

console.dir(Math);

// Viết hàm trả về số ngẫu nhiên từ min -> max
// từ khóa: js random range

// so sánh giữa null vs undefined
