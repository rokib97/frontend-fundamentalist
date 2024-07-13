import { ChangeEvent, useReducer } from "react";

interface State {
  name: string;
  email: string;
  password: string;
}
type Action = {
  type: string;
  payload: {
    name: string;
    value: string;
  };
};

const initialState = {
  name: "",
  email: "",
  password: "",
};

const reducer = (currentState: State, action: Action) => {
  switch (action.type) {
    case "update_field":
      return {
        ...currentState,
        [action.payload.name]: action.payload.value,
      };
    case "reset_field":
      return initialState;
    default:
      return currentState;
  }
};

const UseReducerFormTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state);
    dispatch({
      type: "reset_field",
      payload: {
        name: "",
        value: "",
      },
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "update_field",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            onChange={handleChange}
            value={state.name}
            type="text"
            name="name"
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            onChange={handleChange}
            value={state.email}
            type="email"
            name="email"
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            onChange={handleChange}
            value={state.password}
            type="password"
            name="password"
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseReducerFormTwo;
