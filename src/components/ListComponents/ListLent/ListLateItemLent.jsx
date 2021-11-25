import * as Api from "../../../api/list";

import { useState } from "react";

import { useLend } from "../../../contexts/lendContext";

import LateItem from "../../LateItem/LateItem.jsx";
import EmptyState from "../../../pages/EmptyState/EmptyState.jsx";

function ListLateItemLent() {
  const { late } = useLend();
  console.log(late);
  const actualDate = new Date().getTime();

  if (late.length === 0) {
    return <EmptyState />;
  }
  return (
    <>
      {late.map((lat) => {
        const dataEmprestimo = new Date(lat.data_devolucao).getTime();
        if ((actualDate > dataEmprestimo) && (dataEmprestimo > 0)) {
          return <LateItem
            key={lat.id}
            id={lat.id}
            name_obj={lat.item_emprestado}
            name_resp={lat.nome_responsável_atual}
            cellphone={lat.contato_celular_devolucao}
            email={lat.contato_email_devolucao}
            date_lent={lat.data_emprestimo}
            date_devolution={lat.data_devolucao}
            result_devolution={lat.resultado_devolucao}
          />;
        }
      })}
    </>
  );
}

export default ListLateItemLent;
