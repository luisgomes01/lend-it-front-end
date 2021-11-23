import * as Api from "../../../api/list";
import { useState } from "react";
import LateItem from "../../LateItem/LateItem.jsx";
import EmptyState from '../../../pages/EmptyState/EmptyState.jsx'

function ListLateItemBorrow() {
    const [leans, setLeans] = useState([]);

    const lists = async () => {
        const response = await Api.listBorrow();
        console.log(response);
        setLeans(response);
        console.log(leans);     
    }
    const actualDate = new Date().getTime();
    console.log(actualDate)
    return ( 
        <>
        {leans.map(lean =>  
        {  
            const dataEmprestimo = new Date(lean.data_devolucao).getTime()
            if(actualDate > dataEmprestimo){
                return (
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
                );
            } else {
                return(
                <EmptyState/>
                );
            }
        }
            )
        }
            <button onClick={() => lists()}>
                Chama a lista de atrasados
            </button>
    </>
     );
}

export default ListLateItemBorrow;