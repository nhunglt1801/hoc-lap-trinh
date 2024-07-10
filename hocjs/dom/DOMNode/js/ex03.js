var root = document.querySelector("#root");
var element = F8.createElement(
  "div",
  {
    className: "box",
    id: "box",
  },
  F8.createElement(
    "h1",
    {
      className: "box-title",
    },
    "Học JS không khó"
  )
);
root.append(element);
