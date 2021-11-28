import Api from '.';

//Cedidos - Peguei Emprestado
export const createBorrow = async (
  {
    item_emprestado,
    nome_donoObj,
    contato_celular_devolucao,
    contato_email_devolucao,
    data_emprestimo,
    data_devolucao,
    resultado_devolucao
  }) => {
  const id_usuario_n_donoObj = localStorage.getItem("@lendit/user_id");
  const response = await Api.post('/cedidos/', 
    {
      id_usuario_n_donoObj,
      item_emprestado,
      nome_donoObj,
      contato_celular_devolucao,
      contato_email_devolucao,
      data_emprestimo,
      data_devolucao,
      resultado_devolucao
    });
  return response.data;
}

//Emprestimos - Emprestei
export const createLent = async (
  {
    item_emprestado,
    nome_responsável_atual,
    contato_celular_devolucao,
    contato_email_devolucao,
    data_emprestimo,
    data_devolucao,
    resultado_devolucao
  }) => {

    const id_usuario_donoObj = localStorage.getItem("@lendit/user_id");
    const response = await Api.post('/emprestimos/', 
      {
        id_usuario_donoObj,
        item_emprestado,
        nome_responsável_atual,
        contato_celular_devolucao,
        contato_email_devolucao,
        data_emprestimo,
        data_devolucao,
        resultado_devolucao
      });
    return response.data;
}