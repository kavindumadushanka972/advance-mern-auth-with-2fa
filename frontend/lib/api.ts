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
};

type VerifyEmailType = {
  code: string;
};

export type MfaType = {
  message: string;
  secretKey: string;
  qrImageUrl: string;
};

type VerifyMFAType = {
  code: string;
  secretKey: string;
};

export const loginMutationFn = async (data: LoginType) =>
  await API.post('/auth/login', data);

export const registerMutationFn = async (data: RegisterType) =>
  await API.post('/auth/register', data);

export const verifyEmailMutationFn = async (data: VerifyEmailType) =>
  await API.post('/auth/verify/email', data);

export const forgotPasswordMutationFn = async (data: ForgotPasswordType) =>
  await API.post('/auth/password/forgot', data);

export const resetPasswordMutationFn = async (data: ResetPasswordType) =>
  await API.post('/auth/password/reset', data);

export const mfaSetupQueryFn = async () => {
  const response = await API.get<MfaType>('/mfa/setup');
  return response.data;
};

export const verifyMFAMutationFn = async (data: VerifyMFAType) =>
  await API.post('/mfa/verify', data);

export const getUserSessionQueryFn = async () => await API.get('/session/');
