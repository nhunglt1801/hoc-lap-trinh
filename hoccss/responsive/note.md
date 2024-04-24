# Responsive 
- Thiết kế web đáp ứng trên mọi thiết bị
- Dựa theo kích thước màn hình để thay đổi giao diện
- Sử dụng CSS thông qua một at-rule @media (Media Queries)


## Breakpoints
- Là điểm dừng tọa độ mà tại điểm đó sẽ thay đổi giao diện.
- Không có breakpoint cố định trong mọi dự án 
- Chỉ có các breakpoint phổ biến
Ví dụ: https://polypane.app/blog/css-breakpoints-used-by-popular-css-frameworks/
- 576px
- 768px
- 992px
- 1200px
- 1400px

## Meta viewport
- Đảm bảo tỷ lệ của khung nhìn khi chuyển sang các thiết bị có kích thước màn hình khác
- <meta name="viewport" content="width=device-width, initial-scale=1.0">
https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag


## Media Query
- Cú pháp của CSS 
```
css
@media all | screen | print and (min-width: gia tri) and (max-width: gia tri) {
    Selector {
        code css
    }
}
```
## Trường phái Responsive
1. Desktop First: Đi từ màn hình lớn nhất
```
<= 1399.98px
<= 1199.98px
<= 991.98px
<= 767.98px
<= 575.98px
```
2. Mobile First: Đi từ màn hình nhỏ nhất

```
>= 575.98px
>= 767.98px
>= 991.98px
>= 1199.98px
>= 1399.98px
```