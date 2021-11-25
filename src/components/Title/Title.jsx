import { Container } from "./Title.js";

function Title({ children }) {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  );
}

export default Title;
