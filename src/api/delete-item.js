import Api from ".";

//Peguei Emprestado - Cedidos
export const destroyBorrow = async (id) => {
  const response = await Api.delete("/cedidos/", { data: id });
  return response.data;
};
//Emprestei - Emprestados
export const destroyLent = async (id) => {
  const response = await Api.delete("/emprestimos/", { data: id });
  return response.data;
};
