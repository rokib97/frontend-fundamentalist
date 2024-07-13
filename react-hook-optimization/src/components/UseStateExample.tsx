import { Dispatch } from "react";
type TCounter = {
  counter: number;
  setCounter: Dispatch<React.SetStateAction<number>>;
};
const UseStateExample = ({ counter, setCounter }: TCounter) => {
  const handleIncrement = () => {
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
  };
  const handleAsyncIncrement = () => {
    setTimeout(() => {
      setCounter((prevCount) => prevCount + 1);
    }, 2000);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => setCounter((prevState) => prevState - 1)}>
        Decrement
      </button>
      <button onClick={handleAsyncIncrement}>AsyncIncrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default UseStateExample;
