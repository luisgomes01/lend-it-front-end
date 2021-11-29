import * as Api from "../../../api/list";

import LentItem from "../../LentItem/LentItem.jsx";
import EmptyState from "../../../pages/EmptyState/EmptyState.jsx";
import { useLend } from "../../../contexts/lendContext";
import { useEffect } from "react";

export default function ListLentItemLent() {
  const { lends, setLends } = useLend();
  const { setLate } = useLend();

  useEffect(async () => {
    const response = await Api.listLent();
    setLends(response);
    setLate(response);
  }, []);

  if (lends.length === 0) {
    return <EmptyState />;
  }
  return (
    <>
      {lends.map((lean) => (
        <LentItem
          key={lean.id}
          id={lean.id}
          name_obj={lean.item_emprestado}
          name_resp={lean.nome_responsável_atual}
          cellphone={lean.contato_celular_devolucao}
          email={lean.contato_email_devolucao}
          date_lent={lean.data_emprestimo}
          date_devolution={lean.data_devolucao}
          result_devolution={lean.resultado_devolucao}
        />
        ))}
    </>
  );
}
