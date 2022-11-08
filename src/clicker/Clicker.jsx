import React, { useState, useEffect } from 'react';

function Clicker() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const increment = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log('hello from clicker', count);
    return () => console.log('good by clicker');
  }, [count]);

  return (
    <div className="Clicker" style={{ margin: 'auto', width: '3' }}>
      <button onClick={decrement}>-</button>
      <span style={countStyle}>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export { Clicker };

const countStyle = {
  margin: '0 0.75rem',
  display: 'inline-block',
};
