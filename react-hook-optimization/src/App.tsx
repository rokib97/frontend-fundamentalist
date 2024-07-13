import { useState } from "react";
import "./App.css";
import UseReducerFormTwo from "./components/UseReducerFormTwo";
import UseStateExample from "./components/UseStateExample";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <UseStateExample counter={counter} setCounter={setCounter} />
      {/* <FormExample />
      <UseReducerExample /> */}
      {/* <UseReducerWithForm /> */}
      <UseReducerFormTwo />
    </div>
  );
}

export default App;
