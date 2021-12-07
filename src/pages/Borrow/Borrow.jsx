import Title from "../../components/Title/Title.jsx";
import SubTitle from "../../components/SubTitle/SubTitle.jsx";
import ListLentItemBorrow from "../../components/ListComponents/ListBorrow/ListLentItemBorrow.jsx";
import ListLateItemBorrow from "../../components/ListComponents/ListBorrow/ListLateItemBorrow.jsx";
import BorrowModal from "../../components/Modals/BorrowPageModal.jsx";
import SortDropDown from "../../components/SortDropDown/SortDropDown.jsx";

import { Container } from "./Borrow.js";

function Borrow() {
  return (
    <Container>
      <div className="title">
        <Title>PEGUEI EMPRESTADO</Title>
      </div>

      <div className="container">
        <div className="left-content">
          <div className="left-content-header">
            <SubTitle>DEVOLUÇÕES ATRASADAS</SubTitle>
            <SortDropDown/>
          </div>
          <ListLateItemBorrow />
        </div>
        <div className="right-content">
          <div className="right-content-header">
            <SubTitle>LISTA DE EMPRÉSTIMOS</SubTitle>
            <SortDropDown/>
          </div>
          <ListLentItemBorrow />
        </div>
      </div>
      <BorrowModal />
    </Container>
  );
}

export default Borrow;
