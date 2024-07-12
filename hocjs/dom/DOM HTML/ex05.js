var inputEl = document.querySelector("input");
var btn = document.querySelector("button");
var ulEl = document.querySelector("ul");
var liList = document.querySelector("ul li");
var msgEl = document.querySelector(".msg");
var count = 0;
inputEl.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    btn.click();
  }
});
btn.addEventListener("click", function () {
  var value = inputEl.value;
  if (!value) {
    // Người dùng chưa nhập
    msgEl.innerHTML = "Vui lòng nhập tên";
    msgEl.classList.remove("success");
    msgEl.classList.add("error");
    return;
  }
  count++;
  ulEl.innerHTML += `<li><input type="checkbox" data-id="${count}"><span data-id="${count}">${value}</span></li>`;
  msgEl.innerHTML = "Đã thêm thành công";
  msgEl.classList.remove("error");
  msgEl.classList.add("success");
  inputEl.value = "";
  var inputCheckboxList = ulEl.querySelectorAll("input");
  inputCheckboxList.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      handleMarkCompleted(checkbox);
    });
  });
});
var handleMarkCompleted = function (checkbox) {
  var status = checkbox.checked;
  var id = checkbox.dataset.id;
  var spanEl = ulEl.querySelector(`span[data-id="${id}"]`);

  //   if (status) {
  //     spanEl.classList.add("completed");
  //   } else {
  //     spanEl.classList.remove("completed");
  //   }
  spanEl.classList.toggle("completed");
};
