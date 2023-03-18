import { AxiosInstance } from 'axios';

import { CurrentUserSchema } from 'modules/CurrentUser';
import { LoginSchema } from 'modules/AuthByEmail';
import { CounterSchema } from 'modules/Counter';

export interface StateSchema {
  counter: CounterSchema;
  currentUser: CurrentUserSchema;
  loginForm: LoginSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkApiConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg
}
