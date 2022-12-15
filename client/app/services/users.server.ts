import { login } from '~/utils';

export const userLogIn = async (email: string, password: string) => {
  const response = await login({
    email,
    password,
  });
  return response.data.login;
};
