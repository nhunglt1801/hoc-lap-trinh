// HTMLElement.prototype.css = function (style) {
//   Object.assign(this.style, style);
// };
// var title = document.querySelector(".title");

// title.css({
//   color: "red",
//   background: "yellow",
//   fontSize: "2rem",
// });

// Cách tạo ra 1 Web Component: Thành phần trên 1 trang web
// Bước 1: Khởi tạo class kế thừa từ HTMLElement

class HelloWorld extends HTMLElement {
  static observedAttributes = ["color", "size"];
  //   constructor() {
  //     super();
  //   }
  connectedCallback() {
    console.log("connectedCallback");
    this.innerHTML =
      "<h1>Học lập trình không khó<button>Click Me</button></h1>";
    var btn = this.querySelector("button");
    var _this = this;
    btn.addEventListener("click", function () {
      _this.setAttribute("color", "red");
      _this.setAttribute("size", "m");
    });
  }
  disconnectedCallback() {
    console.log("disconnectedCallback");
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log("attributeChangedCallback", name, oldValue, newValue);
  }
}
// Bước 2: Đăng ký component
customElements.define("hello-world", HelloWorld);

// WYSIWYG Editor
// callback lifecycle

var btn = document.querySelector(".btn");
var root = document.querySelector("#root");
var isStatus = false;
var helloWorldEl = document.createElement("hello-world");
// helloWorldEl.setAttribute("color", "red");
btn.addEventListener("click", function () {
  if (!isStatus) {
    root.append(helloWorldEl);
    isStatus = true;
  } else {
    // root.removeChild(helloWorldEl);
    helloWorldEl.remove();
    isStatus = false;
  }
});
