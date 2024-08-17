Authentication --> Quá trình xác minh danh tính: khai báo thông tin xem thông tin có trong hệ thống không? -> chức năng đăng nhập
Authorization --> Quá trình kiểm tra có quyền thao tác vs tài nguyên/ dữ liệu hay không?

Authentication: đăng nhập -> trả về thông tin
Authorization: kiểm tra quyền hạn -> trả về thông tin

Cookies --> Session Based Authentication

Token Based Authentication
JWT - json web tokens: tiêu chuẩn mã hóa và truyền dữ liệu an toàn giữa 2 bên (Dữ liệu mã hóa dưới dạng json)
Chuẩn RFC 7519:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDIwMzcyZjY3YTY0N2Q5NzZlY2NmYSIsImFsaWFzIjoicHJvLXN0b3JlIiwiZW52IjoicHJvZHVjdGlvbiIsImlhdCI6MTcyMTg4MjQ5NSwiZXhwIjoxODc5NTYyNDk1fQ.PgR0txEALr1z44LjhCbKf97UjRgytxkoZIeiOgTvtjY
JWT không thể xóa được trừ khi hết hạn

Refesh token:



