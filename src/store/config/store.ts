import { ReducersMapObject } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { counterReducer } from 'modules/Counter';
import { currentUserReducer } from 'modules/CurrentUser';
import { loginReducer } from 'modules/AuthByEmail';

import { $api } from 'shared/api/api';

import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  const reducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    currentUser: currentUserReducer,
    loginForm: loginReducer
  };

  const extraArgument: ThunkExtraArg = {
    api: $api
  };

  return configureStore({
    preloadedState: initialState,
    reducer: reducer,
    devTools: __DEV__,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument
      }
    })
  });
}


// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<ReturnType<typeof createReduxStore>['getState']>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
