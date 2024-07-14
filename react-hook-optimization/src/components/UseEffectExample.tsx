import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    console.log("render");

    return () => {
      console.log("cleanup running..");
    };
  }, [hidden]);
  return (
    <div>
      <button onClick={() => setHidden((prevState) => !prevState)}>
        Click ME
      </button>
    </div>
  );
};

export default UseEffectExample;
