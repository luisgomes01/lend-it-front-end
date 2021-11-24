import Api from '.';


  export const infoUser = async () => {
    const id = localStorage.getItem('@lendit/user_id');
    const response = await Api.post('usuarios/info/', {id});
    return response.data;
}

export const editName = async (name) => {
  const id = localStorage.getItem('@lendit/user_id');
  const response = await Api.post('usuarios/edit-name', {id}, name);
  return response;
}

export const editEmail = async (email) => {
  const id = localStorage.getItem('@lendit/user_id');
    const response = await Api.post('usuarios/edit-email', {id}, email);
    return response.data;
  }

export const editPassword = async (id, senha) => {
    const response = await Api.post('usuarios/edit-password', id, senha);
    return response.data;
  }