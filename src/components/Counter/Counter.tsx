import React from 'react';

import styles from './Counter.module.scss';

interface CounterProps {
}

export const Counter: React.FC<CounterProps> = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className={styles.Counter}>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
