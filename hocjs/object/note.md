## Object - Đối tượng

- Mô tả thông tin cụ thể của đối tượng cần
- Trong object có 2 phần:

* Thuộc tính: Đặc điểm đối tượng (biến)
* Phương thức: hành động của đối tượng (hàm)

- 2 cách tạo Object

* Object literal: Tạo một object từ Function Object --> Object nguyên bản
* Constructor: dùng ký hiệu {}

Lưu ý:

- Key trong Object là string, nếu không là string thì sẽ tự động chuyển sang string
- Key không được phép để số, nếu đặt số thì sẽ tự động chuyển sang string

- Key không được phép để gạch ngang -> muốn sử dụng gạch ngang thì phải dùng "" bọc ở ngoài
- Khi gọi ra có 2 cách:

* Gọi cách bằng dùng dấu chấm
* Gọi cách bằng dùng ngoặc vuông và truyền key vào

- Duyệt các key của object bằng for in

```
for (var key in user) {
  if (typeof user[key] === "function") {
    user[key]();
  } else if (typeof user[key] !== "object" || user[key] === null) {
    console.log(user[key]);
  }
}
```

## Method

- Object.keys() ==> trả về 1 array chưa các key của object

- Object.values() ==> trả về 1 mảng chứa các value của object

- Object.entries() ==> trả về 1 mảng 2 chiều chứa cả key và value của object

- Object.fromEntries() ==> trả về 1 object từ 1 mảng 2 chiều

- Object.assign() ==> nối các source vào target (thay đổi object ban đầu)

Object.assign(target,source1, source2,...)

## Từ khóa this (context)

- Thay đổi context cho hàm getEmail (Thay đổi giá trị this)

```
var user = {
  name: "Nhung Le",
  email: "nhunglt1801@gmail.com",
  getName: function () {
    // var _this = this;
    return {
      age: 18,
      address: "Hà Nội",
      getEmail: function () {
        // console.log(_this.email);
        // Thay đổi context cho hàm getEmail (Thay đổi giá trị this)
        console.log(this.email);
      },
    };
  },
};

user.getName().getEmail.bind(user).call();
```

## prototype

Object Wrap (Object bọc)

## Constructor

- Tình huống:
  - Xây dựng object user
    - name
    - email
    - phone
    - password
    - login()
  - Xây dựng object partner
    - name
    - email
    - phone
    - password
    - login()

==> Cấu trúc object giống nhau
==> Giải pháp: Tạo ra một bản thiết kế --> Tọa các object từ bản thiết kế đó

## Phương thức tĩnh, thuộc tính tĩnh

- không phụ thuộc vào object hoặc instance
  ==> phụ thuộc constructor, truy cập trực tiếp từ constructor

Ví dụ:
Về phương thức tĩnh: dữ liệu không bị thay đổi -> gọi là phương thức tĩnh (static method)

- Array.isArray()
- Number.isInteger()
- Number.isNaN()
- Number.isFinite()
- Number.isSafeInteger()
- Number.parseFloat()
- Number.parseInt()
- Number.toFixed()
- Number.toLocaleString()

Phương thức không tĩnh (non-static method)
