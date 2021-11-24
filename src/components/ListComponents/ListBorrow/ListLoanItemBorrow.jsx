import * as Api from "../../../api/list";

import { useLend } from "../../../contexts/lendContext";

import EmptyState from "../../../pages/EmptyState/EmptyState.jsx";
import LoanItem from "../../LoanItem/LoanItem.jsx";

function ListLoanItemBorrow() {
  const { leans, setLeans } = useLend();

  const lists = async () => {
    const response = await Api.listBorrow();
    setLeans(response);
  };

  if (leans.length === 0) {
    return <EmptyState />;
  }
  return (
    <>
      {leans.map((lean) => (
        <LoanItem
          key={lean.id}
          id={lean.id}
          name_obj={lean.item_emprestado}
          name_resp={lean.nome_donoObj}
          celphone={lean.contato_celular_devolucao}
          email={lean.contato_email_devolucao}
          date_loan={lean.data_emprestimo}
          date_devolution={lean.data_devolucao}
          result_devolution={lean.resultado_devolucao}
        />
      ))}
      <button onClick={() => lists()}>Chama a lista</button>
    </>
  );
}

export default ListLoanItemBorrow;
