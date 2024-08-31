## Regular Expression (Regex) - Biểu thức chính quy

- Biểu thức xử lý chuỗi nâng cao
+ So khớp
+ Cắt chuỗi
+ Thay thế

- Khi làm việc với regex, xây dựng lên 1 pattern (mẫu)

Cấu tạo pattern
/regex/modifier

Website test Regex :  https://regex101.com/

Các ký hiệu cơ bản:
string ==> so khớp chuỗi string trong biểu thức có nằm trong chuỗi cần kiểm tra không

^ (đặt ở đầu biểu thức, sau dấu phân cách /) ==> kiểm tra biểu thức nằm ở đầu chuỗi

$ (đặt ở cuối biểu thức, trước dấu phân cách /) ==> kiểm tra biểu thức nằm ở cuối chuỗi

[min,max] ==> kiểm tra các ký tự từ min đến max (A-Z, a-z, 0-9)

[char_list] ==> kiểm tra các ký tự ([abc])

Lưu ý:
-  Các biểu thức trong cặp [], kết hợp với nhau theo điều kiện HOẶC
-   Nếu các biểu thức không nằm trong cùng cặp [] ==> kết hợp vs nhau theo điều kiện AND và phải đúng thứ tự

- {min,} ==> độ dài của biểu thức lớn hơn hoặc bằng min
- {value} ==> độ dài của biểu thức bằng value
- {min,max} ==> độ dài của biểu thức từ min -> max

Ký hiệu viết tắt của độ dài:

+ ==> tương ứng với {1,} 
* ==> tương ứng với {0,}
? ==> tương ứng với {0,1}

Hoặc (|) - Phủ định (^)

- Phủ định ^ nằm trong []

- Ký hiệu đại diện cho tất cả ký tự (.) ==> nếu muốn kiểm tra có dấu (.) thì biểu thức regex sẽ có dạng \.

Các ký hiệu viết tắt
```
\w: Thường, hoa, số, _
\W: ngược lại của \w
\d: số
\D: ngược lại của số 
\s: khoảng trắng
\S: ngược lại của \s
```

Mofier: 
g - global

u - unicode

i - insensitive: không phân biệt hoa thường

