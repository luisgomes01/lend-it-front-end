import emptystate from "../../img/emptystate.svg";

import { Container } from "./EmptyState.js";

function EmptyState() {
  return (
    <Container>
      <img src={emptystate} alt="Nenhum empréstimo listado" />
      <p>
        Adicione um <span>novo objeto</span> em sua lista
        <br />
        clicando no botão de adicionar
      </p>
    </Container>
  );
}

export default EmptyState;
