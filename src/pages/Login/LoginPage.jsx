import { useState } from "react";
import { LoginPageStyle } from "./LoginPage";
import { PageStyle } from "../LoginAndRegisterPages";
import * as Api from "../../api/auth";
import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit.jsx";
import ForgotPasswordModal from "../../components/ForgotPasswordModal/ForgotPasswordModal.jsx";
import { useUsers } from "../../contexts/userContext";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLogged, setIsLogged } = useUsers();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.signIn({ email, password });
      console.log(response);
      if (response.id) {
        localStorage.setItem("user_id", response.id);
      }
      window.location.href = "/board";
      setIsLogged(true);
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
              Ainda não tem uma conta? <a href="/"> Registre-se </a>.
            </p>
          </div>
        </LoginPageStyle>
      </PageStyle>
    </>
  );
}
