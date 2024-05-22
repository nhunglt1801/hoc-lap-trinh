/**
 * Biến (variable)
 * - Cú pháp trong lập trình cho phép lưu trữ dữ liệu tạm thời
 * - Biến được lưu ở RAM
 * - Biến có thể đặt tên tùy ý theo nguyên tắc sau:
 *   + Chứa chữ thường, chữ hoa, số, dấu _ và $
 *   + Không được bắt đầu bằng số
 *   + Nên đặt tên biến theo quy tắc camelCase
 *   + Nên đặt tên biến tường minh
 *
 */

// Khai báo biến
var userId, customerName, username, userEmail;

var customer;
var customerEmail;

var course = "Fullstack",
  coursePrice = 12000;

customer = "Nhung Le";

// Hiển thị dữ liệu

// 1. Hiển thị ở tab console trình duyệt
console.log(customer);
console.log(course);
console.log(userEmail);

// 2. Hiển thị lên giao diện trình duyệt

// 2.1. dùng document.write()
document.write(customer);
// 2.2. dùng DOM (Document Object Model)

// Lưu ý: giá trị của biến có thể đưa vào 1 chuỗi HTML
// var welcome = "<h2>Học " + course + " không khó</h2>";

// Ký hiệu backtick (`) --> template string
var welcome = `<h2>Học ${course} không khó</h2>
<h2>Học ${course} không khó</h2>`;
document.write(welcome);

// 8 kiểu dữ liệu trong js

/**
 * 1. Chuỗi: Chuỗi
 * 2. Number: Số
 * 3. BigInt: Số nguyên lớn
 * 4. Boolean: logic (true/false)
 * 5. Undefined: không xác định
 * 6. Null: rỗng
 * 7. Symbol
 * 8. Object: đối tượng
 *
 * Chia làm 2 nhóm:
 * - Kiểu dữ liệu nguyên thuỷ
 * + string
 * + number
 * + bigint
 * + undefined
 * + null
 * + symbol
 * - Kiểu dữ liệu tham chiếu
 * + object
 */
