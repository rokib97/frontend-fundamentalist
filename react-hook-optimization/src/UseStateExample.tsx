import { useState } from "react";

const UseStateExample = () => {
  console.log("render..");
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter((prevState) => prevState - 1)}>
        Decrement
      </button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default UseStateExample;
