var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
var progressBarWidth = progressBar.clientWidth;

var offsetX = 0;
var initialClientX = 0;
var moveSpace = 0;
var lastMoveSpace = 0;
var isDragging = false;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which !== 1) return;
  offsetX = e.offsetX;
  var rate = (offsetX / progressBarWidth) * 100;
  progress.style.width = rate + "%";
  initialClientX = e.clientX;
  moveSpace = offsetX;
  lastMoveSpace = offsetX;
  isDragging = true;
  document.addEventListener("mousemove", handleDrag);
});
progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  initialClientX = e.clientX;
  lastMoveSpace = (audio.currentTime / audio.duration) * progressBarWidth;
  document.addEventListener("mousemove", handleDrag);
  isDragging = true;
});
document.addEventListener("mouseup", function () {
  lastMoveSpace = moveSpace;
  document.removeEventListener("mousemove", handleDrag);
  if (isDragging) {
    var rate = (moveSpace / progressBarWidth) * 100;
    audio.currentTime = (audio.duration * rate) / 100;
  }
  isDragging = false;
});
progressBar.addEventListener("mousemove", function (e) {
  var mouseOffsetX = e.offsetX;
  var rate = (mouseOffsetX / progressBarWidth) * 100;
  var currentTime = (rate / 100) * audio.duration;
  timer.style.left = mouseOffsetX + "px";
  timer.innerText = getTimeFormat(Math.round(currentTime));
});
progressSpan.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});
function handleDrag(e) {
  if (!isDragging) return;
  moveSpace = e.clientX - initialClientX + lastMoveSpace;
  var rate = (moveSpace / progressBarWidth) * 100;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  progress.style.width = rate + "%";
}
// Xử lý audio
var audio = document.querySelector("audio");
var durationEl = progressBar.nextElementSibling;
var currentTimeEl = progressBar.previousElementSibling;
var playActionEl = document.querySelector(".play-action i");
var timer = progressBar.querySelector(".timer");
var getTimeFormat = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};
window.addEventListener("load", function () {
  durationEl.innerText = getTimeFormat(audio.duration);
});
playActionEl.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
audio.addEventListener("play", function () {
  playActionEl.classList.replace("fa-play", "fa-pause");
});
audio.addEventListener("pause", function () {
  playActionEl.classList.replace("fa-pause", "fa-play");
});
audio.addEventListener("timeupdate", function () {
  var currentTime = audio.currentTime;
  currentTimeEl.innerText = getTimeFormat(currentTime);
  if (!isDragging) {
    var rate = (currentTime / audio.duration) * 100;
    progress.style.width = rate + "%";
  }
});
audio.addEventListener("ended", function () {
  playActionEl.classList.replace("fa-pause", "fa-play");
  currentTimeEl.innerText = getTimeFormat(0);
  progress.style.width = "0%";
});
