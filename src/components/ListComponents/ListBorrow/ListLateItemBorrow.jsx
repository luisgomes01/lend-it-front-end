import * as Api from "../../../api/list";
import { useState } from "react";
import { useLend } from "../../../contexts/lendContext";

import LateItem from "../../LateItem/LateItem.jsx";
import EmptyState from '../../../pages/EmptyState/EmptyState.jsx'

function ListLateItemBorrow() {
    const { leans } = useLend();

    const actualDate = new Date().getTime();
    
    if(leans.length === 0){
        return(
            <EmptyState/>
        )
    }
    return (
        <>
            { leans.map(lean =>  {  
                const dataEmprestimo = new Date(lean.data_devolucao).getTime();
                if(actualDate > dataEmprestimo){
                    <LateItem key={lean.id}
                    id={lean.id}
                    name_obj={lean.item_emprestado}
                    name_resp={lean.nome_donoObj} 
                    celphone={lean.contato_celular_devolucao}
                    email={lean.contato_email_devolucao}
                    date_loan = {lean.data_emprestimo} 
                    date_devolution = {lean.data_devolucao}
                    result_devolution = {lean.resultado_devolucao}
                    />
                    }
                })
            }
        </>
    );
}

export default ListLateItemBorrow;