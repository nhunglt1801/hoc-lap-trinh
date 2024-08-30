// Bộ nhớ trình duyệt
// LocalStorage, SessionStorage, Cookies
// Cách làm việc

/* 
1. localStorage
- Dung lượng lưu trữ lớn: 4-5mb
- Chỉ lưu trữ text
- Thời gian lưu trữ không giới hạn
- Server không thể can thiệp
- Dễ bị tấn công XSS
- Phân biệt theo origin
Cấu tạo origin: scheme + hostname + port
Chỉ cần khác 1 trong các cấu trúc trên thì origin sẽ khác

Code: 
localStorage.getItem(key)
localStorage.setItem(key, value)
localStorage.removeItem(key)
localStorage.clear()



2. sessionStorage
- Dung lượng lưu trữ lớn: 10mb
- Chỉ lưu trữ text
- Thời gian lưu trữ theo phiên (Tắt trình duyệt là mất)
- Server không thể can thiệp
- Dễ bị tấn công XSS
- Phân biệt theo origin

Code:
sessionStorage.getItem(key)
sessionStorage.setItem(key, value)
sessionStorage.removeItem(key)
sessionStorage.clear()

3. cookies
- Dung lượng lưu trữ thấp 4kb
- Chia sẻ dữ liệu tới các subdomain 
- Chỉ lưu trữ được text
- Phân biệt theo path
- Server có thể đọc được cookie và set cookie
- Có chế độ bảo mật: 
+ HttpOnly: Chỉ server mới đọc được cookie, chỉ server mới set được cookie đó. nếu cookie không được đánh httpOnly thì client cũng đọc được. ==> Khi làm việc với cookie sẽ thường gắn httpOnly
+ Secure: Chỉ hoạt động trong giao thức https
- Dễ bị tấn công CSRF nhưng tránh được XSS
- Quy định được thời gian lưu trữ:
+ session cookie: tắt trình duyệt đi là mất
+ persistent cookies: cookies liên tục -> quy ước được thời gian

Cấu tạo của cookies
key=value;path=/;expires|max-age=thoi-han;domain=tenmien;secure;httpOnly

*/
