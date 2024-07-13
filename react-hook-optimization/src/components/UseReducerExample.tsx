import { useReducer } from "react";

type TAction = {
  type: string;
};

const initialstate = { count: 0 };
const reducer = (currentState: typeof initialstate, action: TAction) => {
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 };
    case "decrement":
      return { count: currentState.count - 1 };
    default:
      return currentState;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};

export default UseReducerExample;
