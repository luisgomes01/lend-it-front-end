import { useState } from "react";
import { LoginPageStyle } from "./LoginPage";
import { PageStyle } from "../LoginAndRegisterPages";

import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit.jsx";
import ForgotPasswordModal from "../../components/ForgotPasswordModal/ForgotPasswordModal.jsx";

export default function LoginPage() {
  return (
    <>
      <PageStyle>
        <LoginPageStyle>
          <div className="page">
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
                <input type="text" placeholder="E-mail" id="E-mail" />
                <input type="text" placeholder="Senha" id="Senha" />
              </div>
              <div className="container">
                <ForgotPasswordModal />
                <ButtonSubmit>Entrar</ButtonSubmit>
              </div>
            </form>
            <p className="redirect">
              Ainda não tem uma conta? <a href="/"> Registre-se </a>.
            </p>
          </div>
        </LoginPageStyle>
      </PageStyle>
    </>
  );
}
