
import Title from '../../components/Title/Title.jsx'
import SubTitle from '../../components/SubTitle/SubTitle.jsx'
import ListLentItemLent from "../../components/ListComponents/ListLent/ListLentItemLent.jsx";
import ListLateItemLent from "../../components/ListComponents/ListLent/ListLateItemLent.jsx";
import AddModal from "../../components/AddModal/AddModal.jsx";
import { Container } from "./Lent.js";

export default function Lent() {
  return (
    <Container>
      <div className="title">
        <Title>EMPRESTEI</Title>
      </div>

      <div className="container">
        <div className="left-containt">
          <div className="left-containt-header">
            <SubTitle>
              DEVOLUÇÕES ATRASADAS
            </SubTitle>
          </div>
            <ListLateItemLent/>
        </div>
        <div className="right-containt">
          <div className="right-containt-header">
          <SubTitle>
            LISTA DE EMPRÉSTIMOS
          </SubTitle>
          </div>
            <ListLentItemLent/>

        </div>
      </div>
      <AddModal />
    </Container>
  );
}
