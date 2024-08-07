// setTimeout(function () {
//   console.log("Học lập trình");
// }, 0);
// console.log("Để đi làm");

// Xử lý bất đồng bộ
// 1.callback
// 2.promise
// 3. async await

// const getUser = (callback) => {
//   setTimeout(() => {
//     const users = ["user 1", "user 2", "user 3"];
//     if (typeof callback === "function") {
//       callback(users);
//     }
//   }, 1000);
// };
// getUser((users) => {
//   console.log(users);
// });

// Promise ==> Xử lý các tác vụ bất đồng bộ theo cách viết chaining

// a.getB().getC().getD();

// Trạng thái của promise
// 1. pending => trạng thái mà gửi yêu cầu rồi nhưng chưa trả về
// 2. fulfilled => thành công
// 3. rejected => thất bại

// Bước 1: định nghĩa object promise
// Bước 2: hiển thị kết quả

const getUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = ["user 1", "user 2", "user 3"];
      // Nếu xử lý thành công ==> Gọi hàm resolve để trả về kết quả
      resolve(users);
      // Nếu xử lý thất bại ==> Gọi hàm reject để trả về thông báo lỗi
      reject("Lỗi rồi");
    }, 1000);
  });
};
// getUsers()
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Xong");
//   });
const getImage = () => {
  return new Promise((resolve, result) => {
    setTimeout(() => {
      resolve("Demo Image");
    }, 1000);
  });
};
const result = getUsers()
  .then((users) => {
    console.log(users);
    return getImage();
  })
  .then((response) => {
    console.log(response);
    return "B";
  });
// console.log(result);

// Promise chaining
