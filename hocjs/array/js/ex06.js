// findIndex: Tìm index đầu tiên dựa vào điều kiện trong callback

// findLastIndex: Tìm index cuối cùng dựa vào điều kiện trong callback

// find: Tìm phần tử đầu tiên dựa vào điều kiện trong callback

// findLast: Tìm phần tử cuối cùng dựa vào điều kiện trong callback

// var users = [
//   ["User 1", "user1@gmail.com"],
//   ["User 2", "user2@gmail.com"],
//   ["User 3", "user3@gmail.com"],
//   ["User 4", "user4@gmail.com"],
//   ["User 5", "user2@gmail.com"],
// ];
// console.log(users);
// var index = users.findIndex(function (user) {
//   return user.includes("user2@gmail.com");
// });
// console.log(index);
// var index = users.findLastIndex(function (user) {
//   return user.includes("user2@gmail.com");
// });
// console.log(index);

// Áp dụng trong trường hợp lấy index để xử lý điều kiện
// Ví dụ trên không lấy theo indexOf được vì không thể so sánh 2 mảng với nhau => trả về -1
// var index = users.indexOf(["User 2", "user2@gmail.com"]);
// console.log(index);

// reduce(callback, initialValue);
/**
 * callback có 4 tham số:
 * - prevValue
 * - currentValue
 * - index
 * - array -> mảng ban đầu
 *
 * initialValue: giá trị khởi tạo
 *
 * Cách hoạt động:
 * 1. Không có initialValue (không có tham số thứ 2)
 * - Vòng lặp reduce chạy từ phần tử thứ 2 cho đến hết
 * - prevValue của lần lặp đầu tiên chính là phần tử đầu tiên của mảng.
 * - currentValue là giá trị từng phần tử của mảng khi lặp
 * - prevValue của lần lặp sau sẽ là return của lần lặp trước
 * - giá trị của hàm reduce là lần return cuối cùng của callback
 *
 * 2. Có initalValue
 * - Vòng lặp reduce sẽ chạy từ phần tử đầu tiên
 * - prevValue của lần lặp đầu tiên chính là initalValue
 * - currentValue là giá trị từng phần tử của mảng khi lặp
 * - prevValue của lần lặp sau sẽ là return của lần lặp trước
 * - giá trị của hàm reduce là lần return cuối cùng của callback
 */

// var numbers = [5, 10, 15, 20, 25, 30];
// console.log(numbers);
// var result = number.reduce(function (prev, current, index) {
//   console.log(`prev: ${prev}, current: ${current}, index: ${index}`);
//   return current;
// }, 0);
// console.log(`result: ${result}`);
// var result = numbers.reduce(function (prev, current) {
//   return prev + current;
// }, 0);
// console.log(`result: ${result}`);

// var numbers = [2, 9, 5, 1, 0, -5];
// var maxValue = numbers.reduce(function (max, current) {
//   if (max > current) {
//     return max;
//   }
//   return current;
// });
// console.log(maxValue);

// var users = ["An", "Tùng", "Đạt", "Quân", "Tùng", "Nam"];
// Xóa các phần tử trùng trong mảng users
// Yêu cầu dùng reduce
// users = users.reduce(function (prev, current) {
//   if (!prev.includes(current)) {
//     prev.push(current);
//   }
//   return prev;
// }, []);
// console.log(users);

// Tìm phần tử khác nhau giữa 2 mảng (có trong mảng 1 nhưng không có mảng 2)

// var arr1 = [5, 2, 1, 6, 9];
// var arr2 = [2, 1, 6];
// var arr = arr1.reduce(function (prev, current) {
//   if (!arr2.includes(current)) {
//     prev.push(current);
//   }
//   return prev;
// }, []);
// console.log(arr);

// var numbers = [1, [2, 3], [4], 5, [[6, 7]], [[[[8]], 9]]];
// console.log(numbers);

// Yêu cầu: Làm phẳng mảng numbers
// Điều kiện:
// - dùng reduce
// - không dùng hàm flat

// function flatArray(arr) {
//   var newArr = arr.reduce(function (prev, current) {
//     if (Array.isArray(current)) {
//       return prev.concat(flatArray(current));
//     } else {
//       prev.push(current);
//       return prev;
//     }
//   }, []);
//   return newArr;
// }

// Chữa bài

// var flatArray = function (arr) {
//   return arr.reduce(function (prev, current) {
//     // Kiểm tra xem current có phải mảng không?
//     if (!Array.isArray(current)) {
//       return prev.concat(current);
//     }
//     return prev.concat(flatArray(current));
//   }, []);
// };

// console.log(flatArray(numbers));

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var size = 3;
// chunk arr với size tương ứng
// Output: [[1,2,3], [4,5,6],[7,8,9],[10,11]]

// ý tưởng: [[]]
var chunkArray = numbers.reduce(
  function (prev, current) {
    // Kiểm tra số lượng phần tử của mảng con cuối cùng
    if (prev[prev.length - 1].length < size) {
      prev[prev.length - 1].push(current);
    } else {
      prev.push([current]);
    }
    return prev;
  },
  [[]]
);
console.log(chunkArray);
