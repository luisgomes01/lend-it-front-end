import Api from '.';


export const editLent = async (
  id, 
  item_emprestado,
  nome_responsavel_atual,
  contato_celular_devolucao,
  contato_email_devolucao,
  data_emprestimo,
  data_devolucao,
  ) => {
  const response = await Api.put('/emprestimos/', 
      {
      id, 
      item_emprestado,
      nome_responsavel_atual,
      contato_celular_devolucao,
      contato_email_devolucao,
      data_emprestimo,
      data_devolucao
      });
  return response.data;
}

export const editBorrow = async (
  id, 
  item_emprestado,
  nome_donoObj,
  contato_celular_devolucao,
  contato_email_devolucao,
  data_emprestimo,
  data_devolucao,
  ) => {
  const response = await Api.put('/cedidos/', 
      {
      id, 
      item_emprestado,
      nome_donoObj,
      contato_celular_devolucao,
      contato_email_devolucao,
      data_emprestimo,
      data_devolucao
      });
  return response.data;
}