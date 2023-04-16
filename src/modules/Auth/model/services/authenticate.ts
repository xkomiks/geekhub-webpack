import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApiConfig } from 'store';
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from 'shared/consts/localStorage';

import { CurrentUser } from '../types/auth';

export const authenticate = createAsyncThunk<CurrentUser, void, ThunkApiConfig<string>>(
  'auth/authenticate',
  async (_, thunkAPI) => {
    try {
      // Due to fact that the server does not validate token, we save the user in the field for the token
      const token: CurrentUser | null = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY));

      if (token) {
        // Here should be just
        // const response = await thunkAPI.extra.api.get<CurrentUser>('/authenticate');
        const response = await thunkAPI.extra.api.post<CurrentUser>('/authenticate', {
          email: token.email
        });

        return response.data;
      }
      return thunkAPI.rejectWithValue('Not authenticated');
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue('Not authenticated');
    }
  }
);
