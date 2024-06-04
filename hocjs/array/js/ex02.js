console.log(Array.prototype);
var users = ["User 1", "User 2", "User 3", "User 4"];
console.log(users);
// at(index) => trả về phần tử theo index
// console.log(users.at(2));

// concat() => nối nhiều mảng thành một mảng
// var arr1 = ["A", "B", "C"];
// var arr2 = [1, 2, 3];
// var arr3 = [7, 8, 9, ["F8"]];
// var arr = arr1.concat(arr2, [4, 5, 6], arr3);
// console.log(arr);

// fill() ==> cập nhật tất cả các phần tử mảng thành một giá trị
console.log(users.fill(10, 0, 2));
