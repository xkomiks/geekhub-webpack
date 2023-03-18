export interface CurrentUser {
  id: number;
  email: string;
  username: string;
}

export interface CurrentUserSchema {
  authData?: CurrentUser;
}
