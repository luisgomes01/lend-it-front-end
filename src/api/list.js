import Api from '.';

//Cedidos
  export const listBorrow = async (id) => {
      console.log(id)
    const response = await Api.post('cedidos/list/', id);
    console.log(response.data)
    // return response.data;
}
//Emprestimos
export const listLoan = async (id) => {
    const response = await Api.post('emprestimos/list/', id);
    console.log(response.data)
  //   return response.data;
}