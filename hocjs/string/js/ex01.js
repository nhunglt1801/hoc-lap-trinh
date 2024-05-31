var fullName = "Nhung Le";
console.log(fullName);
if (typeof fullName === "string") {
  console.log("Kiểu chuỗi");
}
var number = 20;
// number = number + "";
number = String(number);
console.log(typeof number);

var a = 1;
a = Boolean(a);
console.log(a, typeof a);
console.log(String.prototype);
console.log(fullName.length);

// var a = null;
// console.log(a.null); // null không có object
