// const pattern = /^(0|\+84)[0-9]{9}$/;
// const phone = "+84987765432";
// console.log(pattern.test(phone));

// Phủ định
// Kiểm tra trong chuỗi có ký tự đặc biệt hay không?
// const str = "A$";
// const pattern = /[^A-Za-z0-9-_ ]/;
// console.log(pattern.test(str));

// Kiểm tra trong chuỗi có dấu (.) hay không? ==> \.

// Kiểm tra email hợp lệ
// username@domain.ext
/**
 * 1. username
 * - Bắt đầu bằng chữ cái
 * - Chấp nhận chữ hoa, thường, gạch dưới, gạch ngang, (.) và số
 * - Tối thiểu 3 ký tự trở lên
 * 2. domain
 * - Bắt đầu bằng chữ cái
 * - Chấp nhận chữ hoa, thường, gạch dưới, gạch ngang, (.) và số
 * - Tối thiểu 1 ký tự
 * 3. ext
 * - Chữ cái hoa, thường
 * - Tối thiểu 2 ký tự
 */

// Phân tích: fullstack-nodejs.fullstack.edu.vn

// Cắt chuỗi

// const str = `Hello anh em 0987654321 và 0123456789`;
// const pattern = /(0|\+84)\d{9}/g;
// const result = str.match(pattern);
// console.log(result);

// Capturing group

// Non-Capturing Group (?:)
// const str = `hoangan.web@gmail.com`;
// const pattern =
//   /^([A-Za-z][A-Za-z0-9-_.]+[A-Za-z0-9])@(?:(?:[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9]|[a-zA-Z])\.)+[a-zA-Z]{2,}$/;
// const result = str.match(pattern);
// console.log(result);

let content = `Lorem ipsum hoangan.web@gmail.com dolor, sit amet consectetur adipisicing elit. Dolores, provident libero mollitia distinctio hic eum tenetur nisi repellat ea molestiae exercitationem sint rem. hoangan.web@fullstack.edu.vn Laudantium reprehenderit fugit adipisci, tenetur sapiente ea!`;
const pattern =
  /([a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9]@((([a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9]|[a-zA-Z])\.)+[a-zA-Z]{2,}))/g;
content = content.replace(
  pattern,
  `<a href="mailto:$1" title="Domain: $2">$1</a>`
);
/**
 * Substitutions in Regular Expressions
 * $1 ==> Group 1
 * $2 ==> Group 2
 */
document.body.innerHTML = content;
