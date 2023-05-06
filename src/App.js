import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  // const increase = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  // const decrease = () => {
  //   const newCount = count - 1;
  //   setCount(newCount);
  // }

  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default App;
