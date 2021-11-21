import { Container } from "./ButtonSubmit";

function ButtonSubmit({ children, submit }) {
  return (
    <Container>
      <button type="submit" className="button-submit" onClick={submit}>
        {children}
      </button>
    </Container>
  );
}

export default ButtonSubmit;
