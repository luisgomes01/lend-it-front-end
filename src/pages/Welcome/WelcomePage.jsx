import "./WelcomePage.css";
import lendit from "../../img/lendit.png";
export default function Welcome() {
  return (
    <main>
      <section className="nunca-esquece">
        <div className="title">
          <p>Aquele que nunca esquece!</p>
        </div>
        <div className="acessar">
          <p>LEND.IT</p>
          <div className="organize-se">
            <a href="#">
              <button>Organize-se Já</button>
            </a>
          </div>
        </div>
      </section>
      <section className="sobre">
        <img src={lendit} />
        <h2>CONHECENDO O LEND.IT</h2>
        <img src={lendit} />
      </section>
    </main>
  );
}
