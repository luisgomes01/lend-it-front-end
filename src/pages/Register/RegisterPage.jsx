import "./RegisterPage.css";
import "../LoginAndRegisterPages.css";

import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";

export default function RegisterPage() {
  return (
    <main>
      <div className="register-page">
        <div className="title-page">
          <h1>
            Bem-vindo ao <span> LEND.IT </span>
          </h1>
          <p>
            <span> Crie uma conta </span> preenchendo os campos abaixo:
          </p>
        </div>
          <form>
            <div className="inputs">
              <input type="text" placeholder="E-mail" id="E-mail"/>
              <input type="text" placeholder="Nome Completo" id="E-mail"/>
              <input type="text" placeholder="Senha" id="Senha"/>
              <input type="text" placeholder="Confirme sua senha" id="Senha"/>
            </div>
              <div className="criar-conta">
                <ButtonSubmit>
                  Criar Conta
                </ButtonSubmit>
              </div>
          </form>
        <p className="redirect">
          Já possui uma conta? <a href="/"> Entre com seu login </a>.
        </p>
      </div>
    </main>
  );
}
