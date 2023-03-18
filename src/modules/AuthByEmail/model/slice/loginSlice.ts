import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoginFormData, LoginSchema } from '../types/loginSchema';
import { loginByEmail } from 'modules/AuthByEmail/model/services/loginByEmail';

const initialState: LoginSchema = {
  form: {
    email: '',
    password: ''
  },
  isLoading: false,
  error: null
};

const loginSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<Partial<LoginFormData>>) => {
      state.form = {
        ...state.form,
        ...action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginByEmail.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(loginByEmail.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(loginByEmail.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export const {
  reducer: loginReducer,
  actions: loginActions
} = loginSlice;
