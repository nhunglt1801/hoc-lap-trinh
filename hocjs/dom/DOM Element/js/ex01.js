// DOM = Document Object Model

/**
 * Mô hình hóa tài liệu HTML thành các đối tượng
 * - Cho phép JS chỉnh sửa HTML trên trang web
 *
 * - Các loại DOM
 *  + DOM Document
 *  + DOM Element
 *  + DOM HTML
 *  + DOM CSS
 *  + DOM Navigation
 *  + DOM Event
 *  + DOM Event Listener
 *  + DOM Node
 *
 * Bổ sung thêm:
 *  + Shadow DOM, Custom Element, Web Component, Custom Event,...
 */

// DOM Tree

// Khi một trang html đc trinh duyệt tải xong, trang web sẽ hình thành dưới dạng 1 cây DOM, dựa vào node
// Document: Gốc

// DOM Element: Truy xuất tới các thẻ html để trả về Object

var head = document.head;
// console.dir(head);
// console.log(head);
var title = document.title;
// console.log(title);
var body = document.body;
// console.log(body);

// chọn theo id => chỉ trả về 1 element đầu tiên
// var h2 = document.getElementById("title");
// console.log(h2);

// Chọn theo class: trả về 1 danh sách các element tìm đc dưới dạng list Object, muốn duyệt phải duyệt qua for thường hoặc ép kiểu sang Array.from()

// var h2List = document.getElementsByClassName("title");
// console.log(h2List);

// Chọn theo tagName => trả về 1 danh sách các element tìm được theo tên thẻ

// var h2 = document.getElementsByTagName("h2");
// console.log(h2);

// Chọn theo CSS Selector
// 1. Dùng querySelector -> trả về element đầu tiên tìm được
// var h2 = document.querySelector("#title");
// console.dir(h2);

// 2. Dùng querySelectorAll -> trả về danh sách các element tìm được
// var h2List = document.querySelectorAll(".title");
// console.log(h2List);

// => trả về nodeLists => có thể sử dụng forEach()

// var username = document.querySelector('[name="username"]');
// var username = document.login_form.username;
// document.(Tên của form).(Tên của input);
// console.log(username);

var box = document.querySelector(".box");
var title = box.querySelector(".title");
console.log(title);
