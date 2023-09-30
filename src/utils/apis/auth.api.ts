import { useMutation } from '@tanstack/react-query';
import { UserLogin, UserSignup, SignupRes, LoginUserRes } from 'utils/types/user.type';
import { client } from './api-client';

export const useLogin = () =>
    useMutation<LoginUserRes, Error, UserLogin>(data =>
        client('auth/login', {
            data,
        }),
    );

export const useSignUp = () =>
    useMutation<SignupRes, Error, UserSignup>(data =>
        client('auth/signup', {
            data,
        }),
    );

export const useGetOtp = (role: string) =>
    useMutation<unknown, Error, string>(email =>
        client(`auth/forgotPassword?role=${role}`, {
            data: { email },
        }),
    );

export const useVerifyEmail = (token: string | null) =>
    useMutation<string, Error, string>(() =>
        client(`auth/verify-email?token=${token}`, { data: {} }),
    );

export const useReSendOtp = () =>
    useMutation<unknown, Error, string>(email =>
        client('auth/resendOtp', {
            data: { email },
        }),
    );
