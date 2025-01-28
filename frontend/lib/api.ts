import API from './axios-client';

type LoginType = {
  email: string;
  password: string;
};

type RegisterType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type ForgotPasswordType = {
  email: string;
};

type ResetPasswordType = {
  password: string;
  verificationCode: string;
}

export const loginMutationFn = async (data: LoginType) =>
  await API.post('/auth/login', data);

export const registerMutationFn = async (data: RegisterType) =>
  await API.post('/auth/register', data);

export const forgotPasswordMutationFn = async (data: ForgotPasswordType) =>
  await API.post('/auth/password/forgot', data);

export const resetPasswordMutationFn = async (data: ResetPasswordType) =>
  await API.post('/auth/password/reset', data);
