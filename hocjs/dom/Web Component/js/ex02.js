class TodoApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
    this.loadStyle();
    this.addEventChangeTheme();
    this.addEventAddItem();
  }
  addEventChangeTheme() {
    var todoAppEl = this.shadowRoot.querySelector(".todo-app");
    var lightBtn = this.shadowRoot.querySelector(".light-btn");
    var darkBtn = this.shadowRoot.querySelector(".dark-btn");
    lightBtn.addEventListener("click", function () {
      todoAppEl.classList.remove("dark-theme");
    });
    darkBtn.addEventListener("click", function () {
      todoAppEl.classList.add("dark-theme");
    });
  }
  addEventAddItem() {
    // var todoAppEl = this.querySelector(".todo-app");

    var addBtn = this.shadowRoot.querySelector(".add-btn");
    addBtn.addEventListener("click", this.handleAddTodo.bind(this));
  }
  handleAddTodo() {
    var ulEl = this.shadowRoot.querySelector(".lists");
    var inputEl = this.shadowRoot.querySelector("input[type='text']");
    var inputValue = inputEl.value;
    if (!inputValue) {
      return alert("Vui lòng nhập");
    }
    ulEl.innerHTML += `<li>${inputValue}</li>`;
    inputEl.value = "";
  }
  loadStyle() {
    var style = document.createElement("style");
    style.textContent = `
    *{
    padding: 0;
    margin: 0;
    }
    .todo-app {
    border: 1px solid red;
    padding: 20px;
    }
    .dark-theme {
    background: #000;
    color: #fff;
    }
    `;
    this.shadowRoot.append(style);
  }
  render() {
    this.shadowRoot.innerHTML = `<div class="todo-app">
    <h1>Todo App</h1>
    <div>
        <ul class="lists">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        </ul>
        <input type="text" placeholder="Enter Todo">
        <button class="add-btn">Add</button>
    </div>
    <button class="light-btn">Light Theme</button>
    <button class="dark-btn">Dark Theme</button>
    </div>`;
  }
}
customElements.define("todo-app", TodoApp);

// Tạo shadow root

// var box = document.querySelector(".box");
// var shadowRoot = box.attachShadow({ mode: "open" });
// shadowRoot.innerHTML = `<h1>Học lập trình không khó</h1>`;
// var style = document.createElement("style");
// style.textContent = `
// h1 {
// color: red;
// }
// `;
// shadowRoot.append(style);

// Từ box ==> Thay đổi text của h1
// var h1 = box.shadowRoot.querySelector("h1");
// console.log(h1);

// Khi element đã được attachShadow ==> không loại bỏ shadow, không attach lại được
// box.attachShadow({ mode: "open" });

// Tìm hiểu Template, Slot
// Custom thư viện nhỏ
// eval()
