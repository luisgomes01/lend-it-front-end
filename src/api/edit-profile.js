import Api from ".";

<<<<<<< HEAD
export const editName = async (name) => {
  const id = localStorage.getItem("@lendit/user_id");
  const response = await Api.post("/usuarios/edit-name", { id }, name);

  return response;
};

export const editEmail = async (email) => {
  const id = localStorage.getItem("@lendit/user_id");
  const response = await Api.post("/usuarios/edit-email", { id }, email);
  return response.data;
};

export const editPassword = async (id, senha) => {
  const response = await Api.post("/usuarios/edit-password", id, senha);
=======
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
>>>>>>> 5b0f978c6dafd65a781c67adce3989ef04cf5884
  return response.data;
};
