import Api from '.';


export const signIn = async (email, password) => {
  const response = await Api.post('/usuarios/auth', email, password);
  return response.data;
}