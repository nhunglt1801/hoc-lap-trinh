// Bài 1: Chuyển họ và tên viết sai thành viết đúng quy tắc
// var fullname = "tạ    hoàng an";
// Output: Tạ Hoàng An
// Không được dùng mảng
// fullname = fullname.trim();
// var index = 0;
// var position = 0;
// var newContent = "";
// while (position !== -1) {
//   position = fullname.indexOf(" ", index);
//   newContent +=
//     fullname[index].toUpperCase() + fullname.slice(index + 1, position + 1);
//   console.log(newContent);
//   index = position + 1;
// }
// newContent = newContent + fullname[fullname.length - 1];
// console.log(newContent);

// fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);

// for (var i = 0; i < fullname.length; i++) {
//   var char = fullname.charAt(i);
//   var charNext = fullname.charAt(i + 1);
//   if (char === " " && charNext !== " ") {
//     var index = i + 1;
//     fullname =
//       fullname.slice(0, index).trim() +
//       " " +
//       fullname.charAt(index).toUpperCase() +
//       fullname.slice(index + 1);
//   }
// }
// console.log(fullname);

// Bài 2: kiểm tra độ mạnh, yếu mật khẩu

/**
 * >= 8 ký tự
 * Phải có ít nhất 1 ký tự viết Hoa
 * Phải có ít nhất 1 ký tự viết thường
 * Phải có ít nhất 1 ký tự số
 * Phải có ít nhất 1 ký tự đặc biệt: !@#$%^&*()
 *
 * Lưu ý: Không dùng regex, mảng
 */

var password = "Nhungle1801@a";
var isLength = false;
var isUpper = false;
var isLower = false;
var isNumber = false;
var isSpecial = false;
var number = "0123456789";
var special = "!@#$%^&*()";
if (password.length >= 8) {
  isLength = true;
  for (var i = 0; i < password.length; i++) {
    var char = password.charAt(i);
    if (char >= "A" && char <= "Z") {
      isUpper = true;
    }
    if (char >= "a" && char <= "z") {
      isLower = true;
    }
    if (number.includes(char)) {
      isNumber = true;
    }
    if (special.includes(char)) {
      isSpecial = true;
    }
  }
}
if (isLength && isUpper && isLower && isNumber && isSpecial) {
  console.log("Mật khẩu mạnh");
} else {
  console.log("Mật khẩu yếu");
}
