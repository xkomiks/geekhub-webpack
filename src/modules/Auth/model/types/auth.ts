export interface CurrentUser {
  id: number;
  email: string;
  username: string;
}

export interface AuthSchema {
  isAuthenticationLoading: boolean;
  isLoggingIn: boolean;
  user?: CurrentUser;
}
