/**
 * 9 nhóm Toán tử trong JS
 */
// Biểu thức = Toán tử + Toán hạng
// total = a + b * c
// toán hạng total, a, b, c
// toán tử = + *

// 1. Toán tử số học + - * / % ++ --
// var a = 10;
// var b = "0";
// var c = a + b;
// console.log(c);
// var a = 10;
// var b = 2;
// var c = a ** b;
// console.log(c);

// var a = 10;
// // a = a + 1;
// a++;
// ++a;
// console.log(a);
/**
 * Phân biệt a++ và ++a
 * 1. Giống nhau:
 * - Đều tăng biến a lên 1 đơn vị
 * 2. Khác nhau:
 * - a++ ==> giá trị  biểu thức sẽ trả về trước khi biến a được tăng,
 * - ++a ==> giá trị biểu thức sẽ trả về sau khi biến a được tăng
 */

// var a = 1;
// var b = a++;
// console.log(`a = ${a}, b = ${b}`);

// var a = 1;
// var b = ++a;
// console.log(`a = ${a}, b = ${b}`);

// var count = 1;
// var total = count++ + ++count + 5 + count++ + ++count;
// console.log(total);

// 2. Toán tử so sánh: >, <, >=, <=, ==, ===, !=, !==
// Lưu ý: Kết quả khi sử dụng toán tử so sánh ==> Trả về kiểu dữ liệu boolean (true,false)

// ==, != so sánh giá trị
// ===, !== so sánh cả giá trị kiểu dữ liệu

// var a = 10;
// var b = 10;
// var c = a === b;
// console.log(c);

// 3. Toán tử gán =
// var a = 10;
// a += 5;
// a -= 5;
// a *= 5;
// a /= 5;
// a %= 5;
// a **= 5;
// console.log(a);

// 4. Toán tử lý luận:
// - and: &&
// - or: ||
// - not: !
// var a = 10;
// var b = a >= 5 && a <= 15;
// var b = a < 0 || a >= 10;
// var b = !(a < 0 || a >= 10);
// console.log(b);

// 5. Toán tử 3 ngôi
// điều kiện ? giá trị đúng : giá trị sai

// var a = 9;
// var b = a >= 10 ? 20 : 0;
// console.log(b);

// var a = 10;
// var b = 1 + 2 + 3 + (a >= 15 ? 20 : 10) + 5 + 2;
// console.log(b);

// 6. Toán tử nullish (??)
// Thực hiện kiểm tra xem giá trị có bằng null hoặc undefined hay không. Nếu bằng 1 trong 2 giá trị trên ==> lấy phía sau ??, ngược lại lấy phía trước
// var a = undefined;
// var b = a ?? "Không có giá trị";
// console.log(b);

// Bài tập: thể hiện toán tử nullish bằng toán tử 3 ngôi
// var a = 1;
// var b = a === null || a === undefined ? "F8" : a;
// console.log(b);

// 7. truthy và falsy
/**
 * Falsy: trong điều kiện cần phải ép kiểu dữ liệu sang boolean mà trả về false thì gọi là Falsy
 * - 0
 * - undefiend
 * - null
 * - false
 * - NaN
 *
 * Truthy: ngược lại
 */
// Ví dụ: Minh họa toán tử 3 ngôi
var a = 0;
// Nếu a là truthy gán b = 20, ngược lại là 0
var b = !a ? 20 : 30;
console.log(b);

// Đặt giá trị vào biểu thức logic thì cần ép kiểu nên ta sử dụng truthy và falsy
