import "./LoginPage.css";

export default function LoginPage() {
  return (
    <main>
      <div className="login-page">
        <div className="title-login-page">
          <h1>
            Bem-vindo de volta ao <span> LEND.IT </span>
          </h1>
          <p>
            Faça Login preenchendo os campos abaixo:
          </p>
        </div>
          <form className="login">
            <div className="inputs">
              <input type="text" placeholder="E-mail ou n° de celular" id="E-mail"/>
              <input type="text" placeholder="Senha" id="Senha"/>
            </div>
            <div className="container">
              <button type="button" className="esquecer-senha">
                Esqueceu a senha?
              </button>
              <button type="submit" className="entrar" >
                Entrar
              </button>
            </div>
          </form>
        <p className="register">
          Ainda não tem uma conta? <a href="/"> Registre-se </a>.
        </p>
      </div>
    </main>
  );
}
