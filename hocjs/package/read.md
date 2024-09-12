# Package
- Cài đặt thủ công
- Cập nhật thủ công
- Gỡ bỏ thủ công (Quên gỡ thư viện nếu không dùng)
- Di chuyển -> nặng
- Xung đột thư viện

==> Giải pháp: Công cụ quản lý thư viện
+ Thao tác thông qua giao diện dòng lệnh (CLI = Commandline Interface)
+ Thư viện sẽ được lưu trữ trên store


## Các công cụ

- Node Package Manager (NPM)
- Yarn

## Lưu ý:

- Khi cài thư viện ==> sinh ra folder node_modules

## Khởi tạo dự án

npm init -y ==> tạo ra file package.json

## Cài đặt dependencies

npm i hoặc npm install

## Cài đặt 1 package

npm i ten_package hoặc npm install ten_package

## Cài đặt nhiều package

npm i package1 package2 package3 ...

## Gỡ bỏ Dependencies

npm uninstall ten_package

## Các loại dependencies

- Simple Dependency ==> npm i ten_package
- Dev Dependency ==> npm i ten_package --save-dev

## Chỉ cài đặt dependencies phục vụ production

npm i --product

## Các loại cài đặt package

- Local: npm i ten_package
- Global: npm i ten_package -g

npm root -g ==> Kiểm tra đường dẫn chưa các dependencies global
npm list -g ==> Liệt kê các dependencies được cài đặt global

## Phiên bản

8.2.6 version 
8 ==> Major version: Update toàn bộ, thay đổi nhiều nhất, có thể gây lỗi cho dự án
2 ==> Minor version: tính năng mới nhưng không loại bỏ tính năng cũ và ảnh hưởng tới tính năng cũ
6 ==> Patch: Fix bug số lần vá, sửa lỗi thứ 6

major.minor.patch ==> Khi chạy lệnh update của npm ==> Chỉ update minor và patch 
- Nếu dấu ^ thì update 2 số cuối là mới nhât
- Nếu dấu ~ thì update số cuối cùng 

## Cập nhật phiên bản

npm update ten_package

npm update ==> cập nhật tất cả package

## Cài đặt dependencies theo phiên bản

npm i ten_package@phienban hoặc npm install ten_package@phienban

## File package-lock vs package

- package-lock ==> có thì npm sẽ cài trong package-lock không thì sẽ cài trong package
- Nếu sử dụng npm update ==> thì sẽ cài trong package