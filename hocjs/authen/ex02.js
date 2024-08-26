/**
 * Xử lý nhiều request bị failed cùng lúc
 */
let token = `My token`;
let isExpire = false;
let refreshTokenPromise = null;
const refreshToken = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`New token ${Math.random()}`);
    }, Math.random() * 1000);
  });
};
const callApi = (url) => {
  setTimeout(async () => {
    if (url === `/courses`) {
      isExpire = true;
    }
    if (isExpire) {
      // Hết hạn => Gọi refresh token
      if (!refreshTokenPromise) {
        refreshTokenPromise = refreshToken();
      }
      const newToken = await refreshTokenPromise;
      token = newToken;
      isExpire = false;
    }
    console.log(`Request ${url}`, `Token:  ${token}`);
  }, 1000);
};
callApi(`/profile`);
callApi(`/courses`);
callApi(`/products`);
callApi(`/post`);
