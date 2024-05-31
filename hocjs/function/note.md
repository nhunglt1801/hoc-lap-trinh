# Mọi thứ đều nằm trong Window

- Khi khởi tạo ra một biến, thì biến đó sẽ thuộc object là window

==> Mọi thứ được tạo ra trong JS đều nằm trong window (chỉ áp dụng với Client - chạy trên trình duyệt)

- Cú pháp truy cập:
  tenObject.tenham()
  hoặc tenObject.tenbien

# Hàm con

- Định nghĩa một hàm bên trong hàm khác:

* Chỉ được gọi hàm đó bên trong hàm khác (hàm Closure)
* Được phép sử dụng:
  - Biến toàn cục
  - Tham số của hàm cha
  - Biến cục bộ của hàm cha
  - Tham số của chính nó
* Tính đóng gói (chỉ sử dụng trong chính hàm cha)

* Ứng dụng khi sử dụng framework: React

* Để chủ động gọi được hàm con phía bên ngoài, thì trong hàm cha cần return hàm con

```
function display(){
    function showUser(){
        console.log("Học F8");
    }
    return showUser;
}

```

==> Chủ động gọi hàm con ở ngoài phạm vi

# Kỹ thuật Thunk Function

```
var sum = function (a) {
  return function (b) {
    return a + b;
  };
};

// Bước 1: Tạo hàm con
var add = sum(10);
// Bước 2: Gọi hàm con
var result1 = add(10);
console.log(result1);

var result2 = add(20);
console.log(result2);

var result3 = add(30);
console.log(result3);
```

# IIFE - Immediately Invoked Function Expressions

- Áp dụng trong async function
- Bắt buộc phải có hàm

# Giải thuật đệ quy

- Kỹ thuật HTTP long polling gửi request liên tục từ client lên server
- Client gửi yêu ầu lên server, server sẽ có 1 vòng lặp vs while(true), khi nào có dữ liệu thay đổi, break vòng lặp -> dữ liệu đc trả về từ server. Client sau đó sẽ gọi lại chính hàm đó, gọi là đệ quy

- long polling vs websockets là 2 kỹ thuật giải quyết bài toán dữ liệu realtime khi client request lên server và server response trong thời gian ngay lập tức

==> Áp dụng trong bài toán đa cấp

Nhược điểm:

- chạy chậm
- khó học vs ng mới
- dễ tràn stack
