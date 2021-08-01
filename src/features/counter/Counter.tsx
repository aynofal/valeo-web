import React, {useCallback, useState} from 'react';

import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
  resetCounter
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  const dispatchToApp = useCallback(() => {
    window.open(`valeo-mobile://counter/${count}`, "_blank")
    dispatch(resetCounter())
  }, [count, dispatch])

  return (
    <div>
      <h3>
        Modify this value
      </h3>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <h4>Or insert a number to add to the counter. A positive or negative value.</h4>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={dispatchToApp}
        >
          Transfer to Phone App
        </button>
      </div>
    </div>
  );
}
