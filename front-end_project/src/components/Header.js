import "../assets/header.css";
import headerStyle from "../assets/header.module.scss";
const Header = () => {
  return `<header>
        <h2 class="${headerStyle.title}">Header</h2>
    </header>`;
};
export default Header;
