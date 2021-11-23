import Api from '.';

//Cedidos
  export const listBorrow = async () => {
    const id = localStorage.getItem('@lendit/user_id');
    const response = await Api.post('cedidos/list/', {id});
    return response.data;
}
//Emprestimos
export const listLoan = async () => {
    const id = localStorage.getItem('@lendit/user_id');
    const response = await Api.post('emprestimos/list/', {id});
    return response.data;
}