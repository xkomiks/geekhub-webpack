import { AxiosInstance } from 'axios';

import { AuthSchema } from 'modules/Auth';
import { LoginSchema } from 'modules/AuthByEmail';
import { CounterSchema } from 'modules/Counter';

export interface StateSchema {
  auth: AuthSchema;
  counter: CounterSchema;
  loginForm: LoginSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkApiConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg
}
