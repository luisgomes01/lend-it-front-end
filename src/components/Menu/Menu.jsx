import lendit from "../../img/lendit.png";
import logo from "../../img/logo.png";

import { Link } from "react-router-dom";
import { useUsers } from "../../contexts/userContext";

import { Container } from "./Menu.js";

export default function Menu() {
  const { isLogged, setIsLogged } = useUsers();

  function toHomeSection() {
    window.scrollBy(0, -1000);
  }

  function toAboutSection() {
    if (window.location.href !== "/") {
      window.scrollBy(0, 1000);
    }
  }

  function logout() {
    localStorage.removeItem("@lendit/user_id");
    setIsLogged(false);
  }

  if (isLogged) {
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
                <Link to="/emprestei" className="emprestei">
                  Emprestei
                </Link>
              </li>
              <li>
                <Link to="/emprestado" className="peguei-emprestado">
                  Peguei emprestado
                </Link>
              </li>
              <li>
                <Link to="/profile">Perfil</Link>
              </li>
              <li>
                <Link to="/" onClick={logout} className="leave">
                  Sair
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    );
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
              <Link to="/" onClick={toHomeSection} className="inicio">
                Início
              </Link>
            </li>
            <li>
              <Link to="/" onClick={toAboutSection} className="sobre-lendit">
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
