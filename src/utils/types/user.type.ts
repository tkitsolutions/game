export interface UserSignup {
    email: string;
    password: string;
    confirmPassword?: string;
    fullName: string;
    username: string;
    phone: string;
}

export interface VerifyEmail {
    email: string;
    otp?: string;
    password?: string;
}

export interface UserLogin {
    email: string;
    password: string;
}

export interface LoginUserRes {
    tokens: {
        access: {
            token: string;
            expires: string;
        };
    };
    user: {
        fullName: string;
        email: string;
        username: string;
        emailVerified: boolean;
        createdAt: string;
        updatedAt: string;
        id: string;
        role: string;
    };
}

export interface User {
    user: {
        fullName: string;
        email: string;
        username: string;
        emailVerified: boolean;
        createdAt: string;
        updatedAt: string;
        id: string;
        role: string;
    };
    assets: UserAsset[];
}

export interface UserAsset {
    name: 'metal' | 'crystal' | 'fuel' | 'energy';
    currentValue: number;
    storage: number;
    available: number;
    userId: string;
    id: string;
}

export interface UpdateUserInfo {
    fullName: string;
    email: string;
    username: string;
    emailVerified: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface SignupRes {
    user: User;
    tokens: {
        access: {
            token: string;
            expires: string;
        };
    };
}
