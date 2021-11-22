import Api from '.';

export const editName = async (id, name) => {
  const response = await Api.post('/usuarios/edit-name', id, name);
  return response;
}

export const editEmail = async (id, email) => {
    const response = await Api.post('/usuarios/edit-email', id, email);
    return response.data;
  }

export const editPassword = async (id, senha) => {
    const response = await Api.post('/usuarios/edit-password', id, senha);
    return response.data;
  }