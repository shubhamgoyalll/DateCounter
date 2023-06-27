import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function deductStep() {
    setStep((s) => s - 1);
  }

  function addStep() {
    setStep((s) => s + 1);
  }

  function addCount() {
    setCount(count + step);
  }

  function deductCount() {
    setCount(count - step);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="center">
        <button onClick={deductStep}>-</button>
        <p> Step : {step} </p>
        <button onClick={addStep}>+</button>
      </div>
      <div className="center">
        <button onClick={deductCount}>-</button>
        <p> Count : {count} </p>
        <button onClick={addCount}>+</button>
      </div>
      <div>
        <p>
          {count === 0
            ? `Today is ${date.toDateString()}`
            : count > 0
            ? `${count} day from Today is ${date.toDateString()}`
            : `${Math.abs(count)} day ago was ${date.toDateString()}`}
        </p>
      </div>
    </div>
  );
}
