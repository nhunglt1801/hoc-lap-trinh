// Định nghĩa hàm tạo component
var F8 = {
  create: function (name, callback) {
    class Component extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.attributesCallback = {
          "v-length": "applyAttributesLength",
        };
        this.data = {};
      }
      connectedCallback() {
        this.shadowRoot.innerHTML = callback.call(this.shadowRoot);
        this.applyAttributes(this.shadowRoot);
      }
      applyAttributes(parentEl) {
        var elementList = parentEl.children;
        if (elementList.length) {
          Array.from(elementList).forEach(function (element) {
            var attributeList = element.attributes;
            for (var index = 0; index < attributeList.length; index++) {
              var attributeName = attributeList[index].name;
              var attributeValue = attributeList[index].value;
              var callbackName = this.attributesCallback[attributeName];
              if (callbackName) {
                this[callbackName].call(this, element, attributeValue);
              }

              if (attributeName === "v-data") {
                var dataObj = new Function(`return ${attributeValue}`).call();
                if (
                  typeof dataObj === "object" &&
                  !Array.isArray(dataObj) &&
                  dataObj !== null
                ) {
                  Object.assign(this.data, dataObj);
                }
              }
              if (attributeName === "v-text") {
                element.innerText = this.data[attributeValue] ?? "";
              }
              if (attributeName.startsWith("v-on:")) {
                var eventName = attributeName.replace("v-on:", "");
                element.addEventListener(
                  eventName,
                  function (e) {
                    var argumentNameList = ["event"];
                    var argumentValueList = [e];
                    Object.keys(this.data).forEach(function (key) {
                      argumentNameList.push(key);
                      argumentValueList.push(this.data[key]);
                    }, this);
                    argumentNameList.push(attributeValue);
                    var func = Function.apply(null, argumentNameList);

                    func.apply(this, argumentValueList);
                  }.bind(this)
                );
              }
            }
            // Đệ quy
            if (element.children.length) {
              this.applyAttributes(element);
            }
          }, this);
        }
      }
      applyAttributesLength(element, value) {
        var nextElement = element.nextSibling;
        var parentEl = element.parentNode;
        for (var i = 0; i < value; i++) {
          var newElement = element.cloneNode(true);
          if (!nextElement) {
            parentEl.append(newElement);
          } else {
            parentEl.insertBefore(newElement, nextElement);
          }
        }
        element.remove();
      }
    }
    customElements.define(name, Component);
  },
};
F8.create("hello-world", function () {
  //   console.log(this);
  // Chứa nội dung component
  //   this.innerHTML = `<h1>Hello World</h1>`;
  return `
   <div v-data="{count:0, title: 'Hoc JS Khong kho', user: {name:'Hoang An'}}">
        <h1>Hello World: <span v-text="count"></span></h1>
        <h2 v-text="title"></h2>
        <button v-on:click="title='Ok chưa??'; console.log(title)">Click Me</button>
        <ul>
            <li v-length="10">Item</li>
        </ul>
        Okkk chưa??
        <span>Chào anh em</span>
        1244
        <h2 v-length="2">123</h2>
   </div>
  `;
});
// var template = document.querySelector("template");
// console.dir(template.content);

// var a = "{count: 10}";
// var func = new Function(`return ${a}`);
// console.log(func());

// new Event js
// custom event
