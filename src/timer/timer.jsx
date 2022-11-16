//import { render } from '@testing-library/react';
// import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState, useEffect, useRef } from 'react';

function setDefaultValue() {
  const userCount = localStorage.getItem('count');
  return userCount ? +userCount : 0;
}

export default function Timer() {
  const [count, setCount] = useState(setDefaultValue());
  const [isCounting, setIsCount] = useState(false);
  const timerIdRef = useRef(null);

  console.log('render');

  const handleStart = () => {
    setIsCount(true);
    console.log('handleStart');
  };

  const handleReset = () => {
    setCount(0);
    console.log('handleReset');
  };

  const handleStop = () => {
    setIsCount(false);
    console.log('handleStop');
  };

  useEffect(() => {
    localStorage.setItem('count', count);
    console.log('update');
  }, [count]);

  useEffect(() => {
    console.log('setInterval');
    if (isCounting) {
      timerIdRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => {
      console.log('unMount');
      timerIdRef.current && clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    };
  }, [isCounting]);

  return (
    <div className="Timer">
      <h1>React timer</h1>
      <h3> {count}</h3>
      {!isCounting ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handleStop}>Stop</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export { Timer };
