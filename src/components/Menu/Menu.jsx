import lendit from "../../img/lendit.png";
import logo from "../../img/logo.png";

import { Container } from "./Menu.js";
import RegisterPage from "../../pages/Register/RegisterPage.jsx";
import { Link } from "react-router-dom";
export default function Menu() {
  document.querySelector(".inicio").addEventListener("click", function () {
    window.scrollBy(0, -1000);
  });

  document
    .querySelector(".sobre-lendit")
    .addEventListener("click", function () {
      window.scrollBy(0, 1000);
    });

  return (
    <Container>
      <div className="menu">
        <div className="app-intro">
          <img className="logo-img" src={lendit} alt="Stickman LEND.IT" />
          <img className="app-name" src={logo} alt="Logo LENDIT" />
        </div>
        <div className="nav">
          <ul>
            <li>
              <Link to="/" className="inicio">
                Início
              </Link>
            </li>
            <li>
              <Link to="/" className="sobre-lendit">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/register">Registro</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
