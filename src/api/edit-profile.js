import Api from ".";

export const infoUser = async () => {
  const id = localStorage.getItem("@lendit/user_id");
  const response = await Api.post("usuarios/info/", { id });
  return response.data;
};

export const edit = async ({ name, email }) => {
  const id = localStorage.getItem("@lendit/user_id");
  const response = await Api.put("usuarios/", { id, name, email });
  return response;
};

export const editPassword = async (id, senha) => {
  const response = await Api.post("usuarios/edit-password", id, senha);
  return response;
};
