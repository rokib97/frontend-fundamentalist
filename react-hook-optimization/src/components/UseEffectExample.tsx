import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <button onClick={() => setHidden((prevState) => !prevState)}>
        {hidden ? "Show" : "Hide"}
      </button>

      {!hidden && <Counter />}
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("rendering..");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <h1 className="border border-red-500 p-5">{count}</h1>;
};

export default UseEffectExample;
