import { config } from "./config.js";
import { httpClient } from "./httpclient.js";
const { SERVER_API } = config;
const authClient = httpClient.create({
  baseUrl: SERVER_API,
});
// console.log(httpClient);
authClient.request(function (config) {
  // Viết logic sửa request ở đây
  try {
    if (localStorage.getItem("user_token")) {
      const { access_token: accessToken } = JSON.parse(
        localStorage.getItem("user_token")
      );
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
  } catch (e) {
    console.log(e);
  }
  return config;
});
authClient.response(async function (response) {
  // console.log(response);
  try {
    if (
      localStorage.getItem("user_token") &&
      !response.ok &&
      response.url.includes("auth/refresh-token")
    ) {
      const { refresh_token: refreshToken } = JSON.parse(
        localStorage.getItem("user_token")
      );
      const newToken = await requestRefreshToken(refreshToken);
      if (newToken) {
        localStorage.setItem("user_token", JSON.stringify(newToken));
        return authClient;
      } else {
        throw new Error("Unauthorize");
      }
    }
  } catch (e) {
    // xử lý logout
    localStorage.removeItem("user_token");
    return false;
  }
  return response;
});
export const requestLogin = async (data) => {
  // try {
  //   const response = await fetch(`${SERVER_API}/auth/login`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   if (!response.ok) {
  //     throw new Error("Unauthenticated");
  //   }
  //   return response.json();
  // } catch {
  //   return false;
  // }
  const response = await authClient.post(`/auth/login`, data);
  if (response.ok) {
    return response.data;
  }
  return false;
};
export const requestProfile = async (accessToken) => {
  // try {
  //   const response = await fetch(`${SERVER_API}/auth/profile`, {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });
  //   if (!response.ok) {
  //     throw new Error("Unauthorize");
  //   }
  //   return response.json();
  // } catch {
  //   return false;
  // }
  const response = await authClient.get(`/auth/profile`);
  if (!response.ok) {
    return false;
  }
  return response.data;
};
export const requestRefreshToken = async (refreshToken) => {
  // try {
  //   const response = await fetch(`${SERVER_API}/auth/refresh-token`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ refreshToken }),
  //   });
  //   if (!response.ok) {
  //     throw new Error("Unauthorize");
  //   }
  //   return response.json();
  // } catch {
  //   return false;
  // }
  const response = await authClient.post(`/auth/refresh-token`, {
    refreshToken,
  });
  if (!response.ok) {
    return false;
  }
  return response.data;
};
