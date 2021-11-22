import * as Api from "../../api/auth";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../../contexts/userContext";

import { LoginPageStyle } from "./LoginPage";
import { PageStyle } from "../LoginAndRegisterPages";

import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit.jsx";
import ForgotPasswordModal from "../../components/ForgotPasswordModal/ForgotPasswordModal.jsx";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLogged } = useUsers();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.signIn({ email, password });
      setIsLogged(true)
      
      if(response){
        localStorage.setItem("@lendit/user_id", JSON.parse(response.id));
        window.location.href = "/board";
      }
    } catch (error) {
      alert("Erro ao efetuar login!");
    }
  };

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
            <form method="POST">
              <div className="inputs">
                <input
                  type="text"
                  placeholder="E-mail"
                  id="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Senha"
                  id="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="container">
                <ForgotPasswordModal />
                <ButtonSubmit submit={onSubmit}>Entrar</ButtonSubmit>
              </div>
            </form>
            <p className="redirect">
              Ainda não tem uma conta? <Link to="/register"> Registre-se </Link>.
            </p>
          </div>
        </LoginPageStyle>
      </PageStyle>
    </>
  );
}
