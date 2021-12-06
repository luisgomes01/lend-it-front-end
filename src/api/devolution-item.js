import Api from ".";

//Peguei Emprestado - Cedidos
export const giveBackItemBorrow = async (id) => {
  const response = await Api.patch("/cedidos/back/", id);
  console.log(response.data);
  return response.data;
};
//Emprestei - Emprestados
export const giveBackItemLent = async (id) => {
  const response = await Api.patch("/emprestimos/back/", id);
  console.log(response.data);
  return response;
};
