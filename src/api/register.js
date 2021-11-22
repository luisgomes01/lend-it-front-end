import Api from '.';


export const registerAccount = async (email, name, password, password_confirmation) => {
  const response = await Api.post('/usuarios/register', email, name, password, password_confirmation);
  return response.data;
}