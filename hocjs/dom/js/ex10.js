var items = document.querySelectorAll(".menu a");
var calcHeightSubmenu = function (element) {
  var css = {
    position: "absolute",
    top: "-5000px",
    left: "-5000px",
    display: "initial",
    height: "auto",
  };
  Object.assign(element.style, css);
  element.initialHeight = element.clientHeight;
  var css = {
    position: null,
    top: null,
    left: null,
    display: null,
    height: null,
  };
  Object.assign(element.style, css);
};
items.forEach(function (item) {
  var subMenu = item.nextElementSibling;
  if (subMenu) {
    item.parentElement.classList.add("has-children");
    calcHeightSubmenu(subMenu);
  }
  item.addEventListener("click", function (e) {
    e.preventDefault();
    if (subMenu) {
      var menuItemActive = document.querySelector(".menu li.active");
      this.parentElement.classList.toggle("active");
      menuItemActive && menuItemActive.classList.remove("active");
      if (this.parentElement.classList.contains("active")) {
        subMenu.style.height = `${subMenu.initialHeight}px`;
      } else {
        subMenu.style.height = 0;
      }
    }
  });
});
