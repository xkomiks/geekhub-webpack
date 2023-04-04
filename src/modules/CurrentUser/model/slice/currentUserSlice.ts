import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentUser, CurrentUserSchema } from 'modules/CurrentUser';
import { LOCAL_STORAGE_USER_KEY } from 'shared/consts/localStorage';

const initialState: CurrentUserSchema = {};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<CurrentUser>) => {
      state.authData = action.payload;
    },
    initCurrentUser: (state) => {
      const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    }
  }
});

export const {
  reducer: currentUserReducer,
  actions: currentUserActions
} = currentUserSlice;
