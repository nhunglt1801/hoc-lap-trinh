var root = document.querySelector("#root");
var h1 = document.createElement("h1");
h1.innerText = "Count: ";
// var span = document.createElement("span");
// span.innerText = 0;
// h1.append(span);
var countNumNode = document.createTextNode(0);
h1.append(countNumNode);
console.dir(countNumNode);
var plusBtn = document.createElement("button");
plusBtn.innerText = "+";
root.append(h1);
root.append(plusBtn);

plusBtn.addEventListener("click", function () {
  //   span.innerText++;
  countNumNode.data++;
  if (countNumNode.data >= 10) {
    countNumNode.remove();
  }
});
// countNumNode.addEventListener("click", function () {
//   console.log("Ok chưa");
// });

// Comment Node

var comment = document.createComment("Đây là comment Demo");
document.body.appendChild(comment);

// setTimeout(function () {
//     var commentLiveServer = Array.from(document.body.childNodes).find(function (
//         node
//       ) {
//         return (
//           node.nodeName === "#comment" && node.nodeValue.includes("live-server")
//         );
//       });
//       commentLiveServer.data = "Code injected by F8";
// }, 1000);
window.onload = function () {
  var commentLiveServer = Array.from(document.body.childNodes).find(function (
    node
  ) {
    return (
      node.nodeName === "#comment" && node.nodeValue.includes("live-server")
    );
  });
  //   console.log(commentLiveServer);
  commentLiveServer.data = "Code injected by F8";
};

// cloneNodes() ==> Sao chép một node
// var h1 = document.createElement("h1");
// h1.innerText = "Nhung Le";
// for (var i = 0; i < 10; i++) {
//   var h1 = h1.cloneNode(true);
//   root.appendChild(h1);
// }

// Lỗi bảo mật XSS
// Do người dùng nhập đoạn code dưới dạng html

var ul = document.createElement("ul");
var li = document.createElement("li");
var input = document.createElement("input");
input.placeholder = "Name...";
input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    var name = e.target.value;
    var todoItem = li.cloneNode(true);
    // todoItem.innerText = `${name}`;
    todoItem.innerHTML = `${name
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")}`;
    ul.appendChild(todoItem);
    this.value = "";
  }
});
root.appendChild(ul);
root.appendChild(input);
