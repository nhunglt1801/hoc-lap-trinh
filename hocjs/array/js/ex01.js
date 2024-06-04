// Khai báo mảng

var users = ["User 1", "User 2", "User 3", "User 4"];
// console.log(users);

// var username = [];
// console.log(username);

// Kiểm tra số lượng phần tử
// console.log(users.length);

// Kiểm tra một biến có phải là mảng hay không
// console.log(Array.isArray(users));

// Thêm phần tử vào cuối mảng
// users[users.length] = "User 5";
// users[users.length] = "User 6";

// Lấy giá trị phần tử
// console.log(users[2]);

// Sửa giá trị phần tử
// users[2] = "User Update";

// Duyệt mảng: Lặp qua từng phần tử của mảng
// console.log(users);
// for thường
// for (var i = 0; i < users.length; i++) {
//   var value = users[i];
//   console.log(value);
// }

// for in: duyệt qua từng index của mảng/ object
// for (var index in users) {
//   //   console.log(index, typeof index);
//   console.log(users[index]);
// }

// for of: áp dụng với mảng, nhược điểm không có index
// for (var value of users) {
//   console.log(value);
// }

// Xóa mảng: tạo ra một mảng mới không có phần tử đã xóa
// console.log(users);
// var indexDelete = 2;
// var newUsers = [];
// for (var index in users) {
//   if (+index === indexDelete) {
//     continue;
//   }
//   var value = users[index];
//   newUsers[newUsers.length] = value;
// }
// console.log(newUsers);

// console.log(users);
// var newValue = "User 0";
// var newUsers = [newValue];
// for (var value of users) {
//   newUsers[newUsers.length] = value;
// }
// console.log(newUsers);

// Bài tập

// var users = [
//   "Tạ Hoàng An",
//   "Nguyễn Tuấn Anh",
//   "Nguyễn Văn Dũng",
//   "Phạm Văn Hiếu",
// ];
// var keyword = "an";
// // Yêu cầu: Xóa tất cả phần tử mảng có chứa keyword (Không phân biệt hoa, thường)
// var newUsers = [];
// for (var index in users) {
//   if (users[index].toLowerCase().includes(keyword.toLowerCase())) {
//     continue;
//   }
//   newUsers[newUsers.length] = users[index];
// }
// console.log(newUsers);

var numbers = [5, 2, 11, 9, 6, 10];
// Yêu cầu: tìm phần tử lớn nhất trong mảng và đổi chỗ phần tử đó với phần tử đầu tiên
var max = numbers[0];
var indexMax = 0;
for (var index in numbers) {
  var value = numbers[index];
  if (max < value) {
    max = value;
    indexMax = index;
  }
}
numbers[indexMax] = numbers[0];
numbers[0] = max;
console.log(numbers);
