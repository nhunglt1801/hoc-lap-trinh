## Chuỗi và các kỹ thuật xử lý chuỗi

# Chuỗi là gì?

- là tập hợp các ký tự
  VD: var fullName = 'Nhung Le';
- để kiểm tra kiểu dữ liệu chuỗi ta sử dụng typeof
  VD: typeof tenChuoi === "string" -> OK
- ép kiểu dữ liệu khác về chuỗi

* cộng vs 1 chuỗi
  // number = number + "";

* đưa vào hàm String()
  // number = String(number);

- String, Boolean, Number ==> Hàm tạo (Function Constructor)

* Định nghĩa ra các phương thức và thuộc tính

- Dữ liệu nguyên thủy sẽ có cơ chế tạo object tạm thời (trừ null vs undefined)
  --> Khi nào sử dụng dấu chấm thì sẽ được bọc bên ngoài là object để truy cập vào các phương thức và thuộc tính để xử lý cho kiểu dữ liệu đó.

==> Cơ chế wrap object js / autoboxing js

## Các phương thức của String

1. length: Lấy độ dài của chuỗi

```
var str = "Học lập trình F8 khó";
console.log(str.length);
```

2. charAt(index): lấy kí tự theo index
   // console.log(str.charAt(4));

3. charCodeAt(index): Lấy ký tự theo index và chuyển mã ASCII
   // console.log(str.charCodeAt(0));

4. concat(): nối chuỗi
   // console.log(str.concat(" F8 Training"));

5. includes(subString): Kiểm tra chuỗi subString có ở trong chuỗi cha hay không? Nếu có trả về true, không có trả về false
   // console.log(str.includes("Học"));

6. indexOf(subString): Kiểm tra chỗi subString có ở trong chuỗi cha hay không? Nếu có trả về index đầu tiên tìm được, không có trả về -1
   // console.log(str.indexOf("khó"));

7. lastIndexOf(subString): Kiểm tra chỗi subString có ở trong chuỗi cha hay không? Nếu có trả về index cuối cùng tìm được, không có trả về -1
   // console.log(str.lastIndexOf("khó"));

8. slice(start, end): cắt chuỗi từ vị trí start đến end-1

- Cắt từ vị trí 3 -> 9
  // console.log(str.slice(3, 10));
- Cắt từ vị trí 5 trở đi
  // console.log(str.slice(5));
- Cắt từ vị trí -5 trở đi (từ index cuối cùng lật về trước 5)
  // console.log(str.slice(-5));

9. replace(str1, str2): thay thế chuỗi: str1, bằng str2 (Thay chuỗi đầu tiên)
   // console.log(str.replace("khó", "không khó"));

10. replaceAll: thay thế chuỗi str1 bằng str2 (Thay tất cả)
    // console.log(str.replaceAll("khó", "không khó"));

11. repeat(): lặp chuỗi theo số lần xác định
    // console.log(str.repeat(5));

12. split(): tách chuỗi thành mảng
    // console.log(str.split(" "));

13. toUpperCase(): chuyển thành chữ hoa
    // console.log(str.toUpperCase());
14. toLowerCase(): chuyển thành chữ thường
    // console.log(str.toLowerCase());

15. trim(): xóa khoảng trắng đầu và cuối chuỗi
    // var str1 = " Nhung Le ";
    // console.log(str1.trim());

16. trimStart(): xóa khoảng trắng đầu chuỗi
    // console.log(str1.trimStart());

17. trimEnd(): xóa khoảng trắng cuối chuỗi
    // console.log(str1.trimEnd());

18. startsWith(subString): kiểm tra chuỗi subString có ở đầu chuỗi không?
    // var path = "/khoa-hoc/fullstack";
    // console.log(path.startsWith("/khoa-hoc"));

19. endWith(subString): kiểm tra chuỗi subString có ở cuối chuỗi không?
    // console.log(path.endsWith("/fullstack"));

20. match(pattern): cắt chuỗi dựa vào biểu thức chính quy (Regex)
    // var str = "Hello ae, sdt của tôi là 0876543212 hoặc +84766436510";
    // var pattern = /(0|\+84)\d{9}/g;
    // console.log(str.match(pattern));
