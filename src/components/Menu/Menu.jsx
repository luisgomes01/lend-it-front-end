import lendit from "../../img/lendit.png";
import logo from "../../img/logo.png";
import "./menu.css";

export default function Menu() {
  return (
    <header>
      <div className="menu">
        <div className="app-intro">
          <img className="logo-img" src={lendit} />
          <img className="app-name" src={logo} />
        </div>
        <div className="nav">
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <li>
              <a href="#">Registro</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
