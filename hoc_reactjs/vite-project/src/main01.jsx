import React from "react";
import ReactDOM from "react-dom/client";
// import React, {Fragment} from "react";
const rootEl = document.querySelector("#root");
// const h1 = React.createElement('h1',{
//   id: "title",
//   className: "title",
//   onClick: () => {
//     console.log("Ok chưa?")
//   }
// },"Học React không khó",
//   React.createElement("a",{
//     href: "https://fullstack.edu.vn",
//   },"Fullstack.edu.vn")
// );
// const h2 = React.createElement("h2", null, "Học frontend không khó");
// const liArray = Array.from(Array(100).keys()).map((_,index) => {
//   return React.createElement("li", null, `Item ${index + 1}`)
// })
// const ul = React.createElement("ul",{
//   className: "menu",
// },...liArray);

// const div = React.createElement(Fragment, null, h1, ul,h2);
// ReactDOM.createRoot(rootEl).render(div);

//  React.createElement('h1',null,"Học React không khó");
// Bài tập: Thêm đoạn mã html sau vào sau thẻ h1
/**
 * <ul class"menu">
 *  <li>Item 1</li>
 *  <li>Item 2</li>
 *  <li>Item 3</li>
 * </ul>
 * Có 100 thẻ li
 */
const isAuth = false;
const status = false;
const users = ["item 1", "item 2", "item 3"];
// const userJsx = users.map((item, index) => <h3 key={index}>{item}</h3>);
const getMessage = () => {
  return <h3>F8 -Fullstack</h3>;
};
const Alert = () => {
  return <h3>Không ổn rồi</h3>;
};
class Product extends React.Component {
  render() {
    return <h2>Sản phẩm</h2>;
  }
}
const title = (
  <>
    <i>Học frontend không khó</i>
    <b>Ok chưa?</b>
  </>
);
const div = (
  <>
    {isAuth ? <h1>Welcome</h1> : <h1>Vui lòng đăng nhập</h1>}
    <h1 className={`title ${status ? "active" : ""}`} id="title">
      Học React không khó
    </h1>
    <h2>{title}</h2>
    <Alert />
    <Alert></Alert>
    {getMessage()}
    <Product />
    {users.map((item, index) => (
      <h3 key={index}>{item}</h3>
    ))}
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
      exercitationem incidunt atque placeat distinctio iure pariatur recusandae
      voluptatem vitae possimus sunt explicabo asperiores alias temporibus,
      corrupti minus vero id ullam!
    </p>
  </>
);
ReactDOM.createRoot(rootEl).render(div);
