import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from 'shared/consts/localStorage';

import { CurrentUser, AuthSchema } from '../types/auth';
import { authenticate } from 'modules/Auth/model/services/authenticate';

const initialState: AuthSchema = {
  isAuthenticationLoading: true,
  isLoggingIn: false,
  user: undefined
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<CurrentUser>) => {
      state.isLoggingIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggingIn = false;
      state.user = undefined;
      localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authenticate.pending, (state) => {
      state.isAuthenticationLoading = true;
    })
    builder.addCase(authenticate.fulfilled, (state, action) => {
      state.isAuthenticationLoading = false;
      state.isLoggingIn = true;
      state.user = action.payload;
    })
    builder.addCase(authenticate.rejected, (state) => {
      state.isAuthenticationLoading = false;
      state.isLoggingIn = false;
      state.user = undefined;
    })
  }
});

export const {
  reducer: authReducer,
  actions: authActions
} = authSlice;
