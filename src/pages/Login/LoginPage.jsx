import "./LoginPage.css";
import "../LoginAndRegisterPages.css";

import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";

export default function LoginPage() {
  return (
    <main>
      <div className="login-page">
        <div className="title-page">
          <h1>
            Bem-vindo de volta ao <span> LEND.IT </span>
          </h1>
          <p>
            <span> Faça Login </span> preenchendo os campos abaixo:
          </p>
        </div>
          <form>
            <div className="inputs">
              <input type="text" placeholder="E-mail" id="E-mail"/>
              <input type="text" placeholder="Senha" id="Senha"/>
            </div>
            <div className="container">
              <button type="button" className="esquecer-senha">
                Esqueceu a senha?
              </button>
              <ButtonSubmit>
                Entrar
              </ButtonSubmit>
            </div>
          </form>
        <p className="redirect">
          Ainda não tem uma conta? <a href="/"> Registre-se </a>.
        </p>
      </div>
    </main>
  );
}
