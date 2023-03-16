import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StateSchema } from 'store';

import { counterActions } from '../model/slice/counterSlice';

import styles from './Counter.module.scss';
import { getCounterValue } from 'modules/Counter/model/selectors/getCounterValue';

interface CounterProps {
}

export const Counter: React.FC<CounterProps> = () => {
  const dispatch = useDispatch();

  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className={styles.Counter}>
      <h1>Counter</h1>
      <p data-testid="value-title">Count: {counterValue}</p>
      <button data-testid="increment-button" onClick={increment}>Increment</button>
      <button data-testid="decrement-button" onClick={decrement}>Decrement</button>
    </div>
  );
};
