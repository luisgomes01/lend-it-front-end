import { RegisterPageStyle } from "./RegisterPage";
import { PageStyle } from "../LoginAndRegisterPages";

import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit.jsx";

export default function RegisterPage() {
  return (
    <PageStyle>
      <RegisterPageStyle>
        <div className="page">
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
              <input type="text" placeholder="E-mail" id="E-mail" required />
              <input
                type="text"
                placeholder="Nome Completo"
                id="E-mail"
                required
              />
              <input type="text" placeholder="Senha" id="Senha" required />
              <input
                type="text"
                placeholder="Confirme sua senha"
                id="Senha"
                required
              />
            </div>
            <div className="criar-conta">
              <ButtonSubmit>Criar Conta</ButtonSubmit>
            </div>
          </form>
          <p className="redirect">
            Já possui uma conta? <a href="/"> Logar.</a>
          </p>
        </div>
      </RegisterPageStyle>
    </PageStyle>
  );
}
