// Định nghĩa các event vs các element tương ứng
var inputRangeList = document.querySelectorAll("input[type='range']");
var finishEvent = new Event("finish");
inputRangeList.forEach(function (inputEl) {
  inputEl.addEventListener("input", function () {
    var value = this.value;
    if (+value === 100) {
      this.dispatchEvent(finishEvent);
    }
  });
});
