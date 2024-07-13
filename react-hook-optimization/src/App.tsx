import { useState } from "react";
import "./App.css";
import FormExample from "./components/FormExample";
import UseStateExample from "./components/UseStateExample";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <UseStateExample counter={counter} setCounter={setCounter} />
      <FormExample />
    </div>
  );
}

export default App;
