import * as Api from "../../../api/list";

import { useState } from "react";
<<<<<<< HEAD
=======
import { useLend } from "../../../contexts/lendContext";
>>>>>>> 5b0f978c6dafd65a781c67adce3989ef04cf5884

import LateItem from "../../LateItem/LateItem.jsx";
import EmptyState from "../../../pages/EmptyState/EmptyState.jsx";

function ListLateItem() {
<<<<<<< HEAD
  const [leans, setLeans] = useState([]);

  const lists = async () => {
    const response = await Api.listLoan();
    console.log(response);
    setLeans(response);
    console.log(leans);
  };
  const actualDate = new Date().getTime();
  console.log(actualDate);
  if (leans.length === 0) {
    return <EmptyState />;
  }
  return (
    <>
      {leans.map((lean) => {
=======
  const { late, setLate } = useLend();
  const actualDate = new Date().getTime();

  if (late.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      {late.map((lean) => {
>>>>>>> 5b0f978c6dafd65a781c67adce3989ef04cf5884
        const dataEmprestimo = new Date(lean.data_devolucao).getTime();
        if (actualDate > dataEmprestimo) {
          <LateItem
            key={lean.id}
            id={lean.id}
            name_obj={lean.item_emprestado}
<<<<<<< HEAD
            name_resp={lean.nome_donoObj}
=======
            name_resp={lean.nome_responsável_atual}
>>>>>>> 5b0f978c6dafd65a781c67adce3989ef04cf5884
            celphone={lean.contato_celular_devolucao}
            email={lean.contato_email_devolucao}
            date_loan={lean.data_emprestimo}
            date_devolution={lean.data_devolucao}
            result_devolution={lean.resultado_devolucao}
          />;
        }
      })}
    </>
  );
}

export default ListLateItem;
