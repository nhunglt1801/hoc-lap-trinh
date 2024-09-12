import moment from "moment";
import "moment/locale/vi";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/app.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import appStyle from "./assets/app.module.scss";
import config from "./config.json";
import image01 from "./image/265-200x300.jpg";
const { APP_NAME, API_KEY } = config;
const App = () => {
  const createdAt = "2024-08-10 20:00:00";

  return `
  <div class="container">
    ${Header()}
      <h1 class="${appStyle.title}">Học JS rất dễ</h1>
      <h2>${moment().format("DD/MM/YYYY HH:mm:ss")}</h2>
      <h2>Đăng lúc: ${moment(createdAt).fromNow()}</h2>
      <h2> ${APP_NAME}</h2>
      <h2> ${API_KEY}</h2>
      <h2>SERVER API: ${process.env.GOOGLE_CLIENT_ID}</h2>
      <div><img src="${image01}"></div>
      <button class="btn btn-primary">Đăng ký ngay</button>
    ${Footer()}
  </div>
  `;
};
export default App;
