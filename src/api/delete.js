import Api from '.';

//Peguei Emprestado - Cedidos
export const destroyBorrow = async (id) => {
  console.log("id" + id);
  const response = await Api.delete('/cedidos/', id);
  return response.data;
}
//Emprestei - Emprestados
export const destroyLent = async (id) => {
  const response = await Api.delete('/emprestimos/', id);
  return response.data;
}