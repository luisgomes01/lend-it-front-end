import "./WelcomePage.css";
import sobre from "../../img/sobre.png";
export default function Welcome() {
  return (
    <main id="home">
      <section className="nunca-esquece">
        <div className="title">
          <p>Aquele que nunca esquece!</p>
        </div>
        <div className="acessar">
          <p>LEND.IT</p>
          <div className="organize-se">
            <a href="/">
              <button>Organize-se Já</button>
            </a>
          </div>
        </div>
      </section>
      <section id="sobre" className="sobre">
        <div className="title">
          <p>CONHECENDO O LEND.IT</p>
        </div>
        <div className="container">
          <div className="left-content">
            <div className="about-text">
              <p>
                Feito para os organizados e desorganizados que vivem emprestando
                coisas, o Lend.It é um site que ajuda a saber o que, quando e
                pra quem algo foi emprestado e diferentemente de quem pegou
                emprestado o nosso produto não esquece.
              </p>

              <p>
                Não somos um sistema de cobranças mas sim um sistema de
                auto-organização, quando se trata de algo que foi devolvido ou
                não. Perfeito para lembrar você daqueles "amigos" que nunca
                devolvem as coisas que foram emprestadas.
              </p>
            </div>
          </div>
          <div className="right-content">
            <img src={sobre} />
          </div>
        </div>
      </section>
    </main>
  );
}
