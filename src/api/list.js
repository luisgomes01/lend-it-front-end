import Api from '.';

//Cedidos - Peguei emprestado
  export const listBorrow = async () => {
    const id = localStorage.getItem('@lendit/user_id');
    const response = await Api.post('cedidos/list/', {id});
    return response.data;
}

//Emprestimos - Emprestei
export const listLent = async () => {
    const id = localStorage.getItem('@lendit/user_id');
    const response = await Api.post('emprestimos/list/', {id});
    return response.data;
}