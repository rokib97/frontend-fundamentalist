import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <button onClick={() => setHidden((prevState) => !prevState)}>
        {hidden ? "Show" : "Hide"}
      </button>

      {!hidden && <Todo />}
    </div>
  );
};

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       console.log("rendering..");
//       setCount((prev) => prev + 1);
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);
//   return <h1 className="border border-red-500 p-5">{count}</h1>;
// };

const Todo = () => {
  const controller = new AbortController();
  const signal = controller.signal;
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`, { signal }).then(
      (res) => res.json().then((data) => alert(data.title))
    );
    return () => {
      controller.abort();
    };
  }, []);

  return <div>todo...</div>;
};

export default UseEffectExample;
