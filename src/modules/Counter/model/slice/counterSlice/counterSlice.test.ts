import { counterReducer, counterActions } from './counterSlice';

import { CounterSchema } from '../../types/CounterSchema';

describe('counterSlice', () => {
  it('should increment', () => {
    const state: CounterSchema = { value: 1 };
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 2 });
  });

  it('should decrement', () => {
    const state: CounterSchema = { value: 1 };
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 0 });
  });

  it('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    expect(counterReducer(undefined, counterActions.decrement())).toEqual({ value: -1 });
  });
});
