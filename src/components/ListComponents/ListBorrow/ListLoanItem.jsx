import * as Api from "../../../api/list";

import { useState } from 'react';

import LoanItem from '../../LoanItem/LoanItem.jsx'

function ListLoanItem() {
    const [leans, setLean] = useState([]);

    const lists = () => {
        const id = JSON.parse(localStorage.getItem('@lendit/user_id'));
        console.log(id);
        const response = Api.listBorrow(id);
        setLean(response);
    }
    return ( 
        <>
            {/* { leans.map(
                lean => (
                    <LoanItem key={lean.id}
                    id={lean.id}
                    name={lean.item_emprestado} 
                    contato_celular={lean.contato_celular_devolucao}
                    contato_email={lean.contato_email_devolucao}
                    data_emprestimo = {lean.data_emprestimo} 
                    data_devolucao = {lean.data_devolucao}
                    resultado_devolucao = {lean.resultado_devolucao}
                    />
                )
            )
            } */}
            <button onClick={() => lists()}>
                Chama a lista
            </button>
    </>
     );
}

export default ListLoanItem;