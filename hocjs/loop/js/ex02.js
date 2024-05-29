// Vòng lặp while

/**
 * while(dieukien) {
 * câu lệnh
 * }
 *
 * Các bước chạy:
 * - Kiểm tra điều kiện
 * -> Nếu đúng => chạy câu lệnh
 * -> Nếu sai => dừng chạy
 */
// var i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// do while

/**
 * Cơ chế hoạt động:
 * - Sẽ thực thi câu lệnh ít nhất 1 lần
 * -> Kiểm tra điều kiện
 * -> Nếu đúng -> thực thi làn 2 -> kiẻm tra tới khi nào điều kiện sai
 * -> Nếu sai luôn -> dừng thực thi
 */

var i = 20;
do {
  console.log(i);
  i++;
} while (i <= 10);

/**
 * Từ khóa:
 * break: thoát vòng lặp khi chưa kết thúc
 * continue: bỏ qua lần lặp để đến lần lặp tiếp theo
 */
