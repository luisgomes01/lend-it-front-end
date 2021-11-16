import lendit from "../../img/lendit.png";
import logo from "../../img/logo.png";
import "./Menu.css";

export default function Menu() {
  return (
    <header>
      <div className="menu">
        <div className="app-intro">
          <img className="logo-img" src={lendit} alt="Stickman LEND.IT"/>
          <img className="app-name" src={logo} alt="Logo LENDIT"/>
        </div>
        <div className="nav">
          <ul>
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="/register">Registro</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
