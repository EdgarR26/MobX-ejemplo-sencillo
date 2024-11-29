import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import counterStore from '../stores/CounterStore';
import './Counter.css';

const Counter = observer(() => {
  const [animation, setAnimation] = useState('');

  const handleIncrement = () => {
    setAnimation('increase');
    counterStore.increment();
    setTimeout(() => setAnimation(''), 200);
  };

  const handleDecrement = () => {
    setAnimation('decrease');
    counterStore.decrement();
    setTimeout(() => setAnimation(''), 200);
  };

  const getMessage = () => {
    if (counterStore.count === 0) return "¡Empieza a contar!";
    if (counterStore.count > 0) return "¡Sigue subiendo!";
    return "Estás en números negativos 😅";
  };

  return (
    <div className="container">
      <h1 className={animation}>Count: {counterStore.count}</h1>
      <p>{getMessage()}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => counterStore.reset()} style={{ backgroundColor: '#FF5722' }}>
        Reset
      </button>
    </div>
  );
});

export default Counter;
