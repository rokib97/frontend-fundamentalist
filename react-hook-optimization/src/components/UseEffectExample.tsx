import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(true);
  const [user, setUser] = useState({ name: "", email: "" });
  console.log(user);
  useEffect(() => {
    console.log("render");
  }, [user.name, user.email]);

  return (
    <div>
      <button onClick={() => setHidden((prevState) => !prevState)}>
        {hidden ? "Show" : "Hide"}
      </button>

      {!hidden && <Todo />}
      <input
        onBlur={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
        name="name"
      />
      <input
        onBlur={(e) => setUser({ ...user, email: e.target.value })}
        type="text"
        name="email"
      />
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
