# Mô hình client - server

# Thẻ Block (khối)

- Luôn phát sinh ở hàng mới
- Chiều rộng mặc định bằng 100% so với thành phần cha

# Thẻ inline (trên dòng)

- Chiều rộng mặc định bằng với nội dung của thẻ
- Các thẻ inline đứng cạnh nhau sẽ nằm trên một dòng (trừ phi tổng chiều rộng các thẻ inline lớn hơn chiều rộng thành phần cha)

# Lưu ý

- Chú thích: comment

# Phương pháp học

- Chăm chỉ làm bài tập về nhà, luyện tập thực hành nhiều hơn
- Hỏi mentor hoặc trợ giảng khi gặp vấn đề khó khăn
- Phát triển các project cá nhân sau khi học được các kiến thức
- Dành thời gian học tập, tập trung học
- Kỷ luật với bản thân

# Nhóm Thẻ block

# heading

- Trên một trang web chỉ có một thẻ h1
- Nguyên tắc sử dụng thẻ heading là từ thẻ h1 > h2 > h3 > h4 > h5 > h6

# p

- p - paragraph là thẻ chứa nội dung

# br

- dùng để xuống dòng văn bản

# ul

# ol

# div

- thẻ không thay đổi định dạng
- thẻ không có ý nghĩa

# blockquote

- Thẻ trích dẫn, trích dẫn 1 phần nội dung của trang web được copy từ các nguồn khác
- Định dạng khác với những thẻ nội dung khác

# pre

- thường sử dụng để trình bày 1 đoạn mã máy tính - code
- để viết được thẻ html trong thẻ pre, sử dụng html entities với
- < (less than) = &lt;
- > (greather than) = &gt;

# html entities

Tác dụng:

- thể hiện được đoạn mã máy tính trong thẻ pre
- giải quyết bài toán liên quan đến bảo mật XSS

# Nhóm thẻ inline

# a

# Đường dẫn tuyệt đối, tương đối

1. Thế nào là Đường dẫn tuyệt đối? tương đối?

- tuyệt đối: là đường dẫn không phụ thuộc vào vị trí thư mục đang đứng hiện tại
- tương đối: là đường dẫn phụ thuộc vào vị trí đang thư mục đứng hiện tại

2. Phân biệt các loại đường dẫn
   ./duong-dan --> tương đối: phụ thuộc vào thư mục đang đứng
   duong-dan --> tương đối: phụ thuộc vào thư mục đang đứng
   ../duong-dan -> tương đối: đẩy ra ngoài 1 cấp (vân phụ thuộc)
   ../../duong-dan -> tương đối: đẩy ra ngoài 2 cấp (vẫn phụ thuộc)

   /duong-dan --> tuyệt đối (di chuyển về gốc của tên miền, sau port)
   //tenmien.com/duong-dan --> tuyệt đối
   https://tenmien.com/duong-dan --> tuyệt đối

# hash

- sử dụng trong thẻ a

# img

Thuộc tính:

- src: đường dẫn link ảnh
- width: độ rộng, chỉ thay đổi khung hiển thị của ảnh chứ không thay đổi kích thước ảnh
- title: tiêu đề của ảnh
- alt: chú thích khi ảnh lỗi, tối ưu cho bộ máy tìm kiếm

# span

- thẻ định dạng kiểu nhưng không làm thay đổi định dạng gốc

# b vs strong

-

# i vs em

# u vs ins

# s vs dell

# table

# thead

- Bọc tiêu đề

# tbody

- bọc phần thân của bảng

# tfoot

- bọc phần chân của bảng

# form

- action: chứa đường link để gửi thông tin tới server
- method: get - lây dữ liệu về / post - gửi dữ liệu đi

# lable

- for: focus tới id của thẻ input - nhập tên id
- focus ở đây là khi click vào label

# input

- type: loại input - text/submit/radio/...
- name:
- id:
- placeholder:
- value: giá trị của input
- readonly: chỉ đọc thông tin, nhưng vẫn được gửi lên server
- disabled: vô hiệu hóa, không gửi được thông tin lên server
- required: bắt buộc phải nhập
- maxlength: giới hạn ký tự là bn

# type

- text
- email
- password
- number: có thêm các thuộc tính min max step
- date => ít dùng vì chạy trên trình duyệt safari bị lỗi, không thay đôi được định dạng theo ý mình muốn, date picker là mặc định không thay đổi được
- avatar: Không thay đổi được choose file và no file chosen
- range:
- radio:
