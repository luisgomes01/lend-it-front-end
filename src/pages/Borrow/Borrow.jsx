import Title from '../../components/Title/Title.jsx'
import SubTitle from '../../components/SubTitle/SubTitle.jsx'
import ListLentItemBorrow from "../../components/ListComponents/ListBorrow/ListLentItemBorrow.jsx";
import ListLateItemBorrow from "../../components/ListComponents/ListBorrow/ListLateItemBorrow.jsx";
import AddModal from "../../components/AddModal/AddModal.jsx";

import {Container} from './Borrow.js'

function Borrow() {
  return ( 
    <Container>
      <div className="title">
        <Title>EMPRESTEI</Title>
      </div>

      <div className="container">
        <div className="left-content">
          <div className="left-content-header">
            <SubTitle>
              DEVOLUÇÕES ATRASADAS
            </SubTitle>
          </div>
            <ListLateItemBorrow/>
        </div>
        <div className="right-content">
          <div className="right-content-header">
          <SubTitle>
            LISTA DE EMPRÉSTIMOS
          </SubTitle>
          </div>
            <ListLentItemBorrow/>

        </div>
      </div>
      <AddModal />
    </Container>
  );
}

export default Borrow;