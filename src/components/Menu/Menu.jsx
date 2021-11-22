import lendit from "../../img/lendit.png";
import logo from "../../img/logo.png";

import { Link } from "react-router-dom";
import { useUsers } from "../../contexts/userContext";

import { Container } from "./Menu.js";

export default function Menu() {
  const { isLogged, setIsLogged } = useUsers();
  window.onload = function () {
    document.querySelector(".inicio").addEventListener("click", () => {
      window.scrollBy(0, -1000);
    });

    document
      .querySelector(".sobre-lendit")
      .addEventListener("click", function () {
        window.scrollBy(0, 1000);
      });
  };
  

    if (isLogged) {
      return <h1>olá</h1>;
    }
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
