// Date Object
// const today = new Date();
// console.dir(today);
// const date = new Date("2024-08-27 09:30:59");
// Hàm xử lý nhóm get
// console.log(today.getDate()); // ngày
// console.log(today.getDay()); // Thứ
// console.log(today.getFullYear()); // YYYY- Năm đầy đủ
// console.log(today.getYear()); // YY
// console.log(today.getHours()); // Giờ
// console.log(today.getMilliseconds()); // mili giây 0-999
// console.log(today.getMinutes()); //  phút 0-59
// console.log(today.getMonth()); // tháng 0-11
// console.log(today.getSeconds()); // số giây 0-59
// console.log(today.getTime()); // thời gian được convert sang dạng miliseconds

// Hàm xử lý nhóm set
// console.log(today.setDate()); // thiết lập ngày (1-31)
// console.log(today.setFullYear()); // YYYY- thiết lập năm đầy đủ
// console.log(today.setYear()); // YY - thiết lập năm 2 số cuối
// console.log(today.setHours()); // thiết lập số giờ 0-23
// console.log(today.setMilliseconds()); // mili giây 0-999
// console.log(today.setMinutes()); //  phút 0-59
// console.log(today.setMonth()); // tháng 0-11
// console.log(today.setSeconds()); // số giây 0-59
// console.log(today.setTime()); // thời gian được convert sang dạng miliseconds

// Bài tập
const targetDate = "2024-08-31 23:59:59";
const countdown = () => {
  let diffTime = (new Date(targetDate).getTime() - new Date().getTime()) / 1000;
  const days = Math.floor(diffTime / 86400);
  diffTime -= days * 86400;
  const hours = Math.floor(diffTime / 3600);
  diffTime -= hours * 3600;
  const minutes = Math.floor(diffTime / 60);
  diffTime -= minutes * 60;
  const seconds = Math.floor(diffTime);

  const daysEl = document.querySelector(".days .value");
  const hoursEl = document.querySelector(".hours .value");
  const minutesEl = document.querySelector(".minutes .value");
  const secondsEl = document.querySelector(".seconds .value");
  daysEl.innerHTML = days < 10 ? `0${days}` : days;
  hoursEl.innerHTML = hours < 10 ? `0${hours}` : hours;
  minutesEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  secondsEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
};
setInterval(countdown, 1000);
