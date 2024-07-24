class Person {
  // Thuộc tính
  //   Hàm constructor sẽ tự động chạy khi khởi tạo từ khóa new, chứa các tham số và tham số là tham số của Đối tượng
  constructor(name, email) {
    this.name = name;
    this.email = email;
    console.log("Hàm constructor sẽ chạy đầu tiên");
  }
  //   Phương thức
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
}
// Enhanced Object Literal
// var person = new Person("Nhung Le", "nhunglt1801@gmail.com");
// console.log(person);

// Kế thừa
class User extends Person {
  constructor(name, email) {
    console.log("Constructor của User");
    super(name, email);
  }
  getInfo() {
    return [this.getName(), this.getEmail()];
  }
}
var user = new User("Nhung Le", "nhunglt1801@gmail.com");
console.log(user);
console.log(user.getInfo());
