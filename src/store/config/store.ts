import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from 'modules/Counter';

import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    preloadedState: initialState,
    reducer: {
      counter: counterReducer
    },
    devTools: __DEV__
  });
}
