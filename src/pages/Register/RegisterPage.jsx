import * as Api from "../../api/register";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../../contexts/userContext";

import { RegisterPageStyle } from "./RegisterPage";
import { PageStyle } from "../LoginAndRegisterPages";

import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit.jsx";


export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("")
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirm] = useState("");
  const { isLogged, setIsLogged } = useUsers();
  
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.registerAccount({ email, name, password, password_confirmation});
      console.log(response);
      if (response.id) {
        localStorage.setItem("user_id", response.id);
      }
      window.location.href = "/login";
      setIsLogged(true);
      console.log(isLogged);
    } catch (error) {
      alert(error.message);
    }
  };

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
              <input type="text" placeholder="E-mail" id="E-mail" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
              <input
                type="text"
                placeholder="Nome Completo"
                id="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input 
                type="password" 
                placeholder="Senha" 
                id="Senha" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
              <input
                type="password"
                placeholder="Confirme sua senha"
                id="Senha"
                value={password_confirmation}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
              />
            </div>
            <div className="criar-conta">
              <ButtonSubmit submit={onSubmit}>Criar Conta</ButtonSubmit>
            </div>
          </form>
          <p className="redirect">
            Já possui uma conta? <Link to="/">Logar</Link>.
          </p>
        </div>
      </RegisterPageStyle>
    </PageStyle>
  );
}
