import { useLend } from "../../../contexts/lendContext";

import LateItem from "../../LateItem/LateItem.jsx";
import EmptyState from "../../../pages/EmptyState/EmptyState.jsx";
import { useMemo } from "react";

const actualDate = new Date().getTime();

function ListLateItemLent() {
  const { late } = useLend();

  const lateFiltered = useMemo(() => {
    return late.filter((lat) => {
      const dataEmprestimo = new Date(lat.data_devolucao).getTime();
      return actualDate > dataEmprestimo && dataEmprestimo > 0;
    });
  }, [late]);

  if (lateFiltered.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      {lateFiltered.map((lat) => (
        <LateItem
          key={lat.id}
          id={lat.id}
          name_obj={lat.item_emprestado}
          name_resp={lat.nome_responsável_atual}
          cellphone={lat.contato_celular_devolucao}
          email={lat.contato_email_devolucao}
          date_lent={lat.data_emprestimo}
          date_devolution={lat.data_devolucao}
          result_devolution={lat.resultado_devolucao}
        />
      ))}
    </>
  );
}

export default ListLateItemLent;
