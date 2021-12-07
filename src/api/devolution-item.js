import Api from ".";

//Peguei Emprestado - Cedidos
export const giveBackItemBorrow = async (id) => {
  const response = await Api.patch("/cedidos/back/", id);
  return response;
};
//Emprestei - Emprestados
export const giveBackItemLent = async (id) => {
  const response = await Api.patch("/emprestimos/back/", id);
  return response;
};
