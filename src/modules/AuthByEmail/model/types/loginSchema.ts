export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginSchema {
  form: LoginFormData;
  isLoading: boolean;
  error?: string;
}
