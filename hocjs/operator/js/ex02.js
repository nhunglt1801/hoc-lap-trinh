// 8. &&
// var a = 10;
// var b = a && "F8";
// var b = true;
// var c = 0;
// var d = "F8";
// var result = a && b && c !== 0 && d;
// console.log(result);
// && áp dụng để tìm giá trị biểu thức falsy ( duyệt biểu thức từ trái qua phải )

// 9. || áp dụng để tìm giá trị biểu thức truthy
var a = 10;
var b = true;
var c = 0;
var d = "F8";
var result = a || b || c || 0 || d;
console.log(result);
