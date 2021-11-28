import Title from "../../components/Title/Title.jsx";
import SubTitle from "../../components/SubTitle/SubTitle.jsx";
import ListLentItemLent from "../../components/ListComponents/ListLent/ListLentItemLent.jsx";
import ListLateItemLent from "../../components/ListComponents/ListLent/ListLateItemLent.jsx";
import LendModal from "../../components/Modals/LendModal.jsx";
import { Container } from "./Lent.js";

export default function Lent() {
  return (
    <Container>
      <div className="title">
        <Title>EMPRESTEI</Title>
      </div>

      <div className="container">
        <div className="left-content">
          <div className="left-content-header">
            <SubTitle>DEVOLUÇÕES ATRASADAS</SubTitle>
          </div>
          <ListLateItemLent />
        </div>
        <div className="right-content">
          <div className="right-content-header">
            <SubTitle>LISTA DE EMPRÉSTIMOS</SubTitle>
          </div>
          <ListLentItemLent />
        </div>
      </div>
      <LendModal />
    </Container>
  );
}
