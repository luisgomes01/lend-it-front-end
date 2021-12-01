import Api from ".";

//Peguei Emprestado - Cedidos
export const destroyBorrow = async (id) => {
  // const response = await Api.delete("/cedidos/", id);
  // return response.data;
  console.log(id);
};
//Emprestei - Emprestados
export const destroyLent = async (id) => {
  const response = await Api.delete("/emprestimos/", id);
  return response.data;
};
