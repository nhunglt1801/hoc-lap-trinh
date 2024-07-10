// DOM Nodes

// HTML => DOM Tree => Tạo Nodes

// JS => Tạo node => Update DOM Tree (Render)

var root = document.querySelector("#root");
// Tạo element node mới: document.createElement()

var h1 = document.createElement("h1");
console.log(h1);
h1.classList.add("title");
h1.innerHTML = "Hoc JS không khó";
var btn = document.createElement("button");
btn.innerText = "Click Me";
btn.addEventListener("click", function () {
  h1.innerText = "Hoc JS làm gì";
  //   var h2 = document.createElement("h2");
  //   h2.innerText = `Hello: ${Math.random()}`;
  //   root.append(h2);
});
root.append(h1);
root.append(btn);

// Thêm nút vào DOM: document.body.appendChild()
// Xóa nút: document.body.removeChild()
// Sửa thuộc tính: node.setAttribute()
// Lấy thuộc tính: node.getAttribute()

// Bài tập:

/**
    <ul class="menu">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>
    <button>Add</button>
     */
// - Thêm đoạn html dưới đây vào sau nút click me
// - Khi click vào nút "Add" thêm li mới vào tự động tăng số thứ tự

var ul = document.createElement("ul");
ul.classList.add("menu");
for (var i = 0; i < 4; i++) {
  var li = document.createElement("li");
  li.innerText = `Item ${i + 1}`;
  ul.appendChild(li);
}
var addBtn = document.createElement("button");
addBtn.innerText = "Add";
addBtn.addEventListener("click", function () {
  //   var li = document.createElement("li");
  //   li.innerText = `Item ${++i}`;
  //   ul.appendChild(li);
  var h2 = document.createElement("h2");
  h2.innerText = `Hello`;
  //   root.insertBefore(h2, ul);
  //   var nextUlEl = ul.nextElementSibling;
  //   console.log(nextUlEl);
  //   if (!nextUlEl) {
  //     return;
  //   }
  //   root.insertBefore(h2, nextUlEl);

  //   Thay thế phần tử replaceChild(el1, el2);
  //   root.replaceChild(h2, h1);
  //   root.append(h1);

  // Xóa phần tử
  root.removeChild(h1);
});
// root.append("<h2>hihi</h2>"); // append thì nhận cả node cả text
// root.appendChild("<h2>hihi</h2>"); //appendChild chỉ nhận node
root.appendChild(ul);
root.appendChild(addBtn);
