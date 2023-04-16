import { createAsyncThunk } from '@reduxjs/toolkit';

import { CurrentUser, authActions } from 'modules/Auth';
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from 'shared/consts/localStorage';
import { ThunkApiConfig } from 'store';

interface LoginByEmailPayload {
  email: string;
  password: string;
}

export const loginByEmail = createAsyncThunk<CurrentUser, LoginByEmailPayload, ThunkApiConfig<string>>(
  'loginForm/loginByEmail',
  async (payload, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.post<CurrentUser>('/login', payload);
      const user = response.data;
      if (!user) {
        throw new Error();
      }

      thunkAPI.dispatch(authActions.setCurrentUser(user));
      localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, JSON.stringify(user));

      return user;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue('Invalid email or password');
    }
  }
);
