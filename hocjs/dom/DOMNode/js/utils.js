var F8 = {
  createElement: function (name, attributes = {}, ...children) {
    var element = document.createElement(name);
    Object.keys(attributes).forEach(function (key) {
      if (key.startsWith("on")) {
        var eventName = key.toLowerCase.replace("on", "");
        element.addEventListener(eventName, attributes[key]);
      } else {
        element[key] = attributes[key];
      }
    });
    if (children.length) {
      children.forEach(function (child) {
        element.append(child);
      });
    }
    return element;
  },
  render: function (rootEl, node) {
    root.innerText = ""; // Reset đảm bảo trong root không có gì
    rootEl.append(node);
  },
};
