import Api from '.';


export const signIn = async (email, password) => {
  const response = await Api.post('/usuarios/auth', email, password);
  console.log(response);
  return response.data;
}