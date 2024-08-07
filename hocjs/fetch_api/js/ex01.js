/**
 * API Application Programming Interface
 * Khi làm việc với web API ==> Học HTTP
 * Client (Front-end) ==> API ==> Server (Back-end)
 *
 * Để giao tiếp giữa client và server ==> có 2 cách:
 * - XHR
 * - Fetch
 *
 * Chuẩn bị server:
 * - Tìm dịch vụ fake
 * - Cài thư viện và tự fake trên máy local
 *
 * HTTP Request:
 * - URL
 * - METHOD
 * - HEADER
 * - BODY
 *
 * HTTP Response
 * - BODY
 * - STATUS : code, text
 * - HEADER
 */

const url = `http://localhost:3000/users`;
const userPromise = fetch(url, {
  method: "GET",
  header: {
    "x-api-key": "ahihi",
  },
});
userPromise
  .then((response) => {
    return response.json();
  })
  .then((users) => console.log(users));
