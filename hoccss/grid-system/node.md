# Grid System
- Kỹ thuật chia layout
- Chia thành 12/ 24 cột
- Xác định 1 cột chiếm bao nhiêu ô
-> Tổng số ô = 12
- Mỗi 1 ô sẽ quy ước thành 1 class

# Quy ước
container --> row (flex container) --> col (flex item)
- container: thùng chứa/ bộ khung chứa các phần tử của section
- row: hàng, trong 1 container sẽ có thể có nhiều hàng
- col: cột trên một hàng

Gutter: Tạo khoảng cách giữa các cột và hàng
--> Thay đổi lại theo từng section 
.g-0 --> 0px
.g-1 --> 1rem * 0.25
.g-2 --> 1rem * 0.5
.g-3 --> 1rem
.g-4 --> 1rem * 1.5
.g-5 --> 1rem * 3

# Class
1. Container: .container
2. Row: .row
3. Col: .col-{number}

# Responsive

Quy ước:
.col-{number} --> Màn hình nhỏ nhất < 576px
.col-sm-{number} --> Màn hình >= 576px
.col-md-{number} --> Màn hình >= 768px
.col-lg-{number} --> Màn hình >= 992px
.col-xl-{number} --> Màn hình >= 1200px
.col-xxl-{number} --> Màn hình >= 1400px