import { useState } from "react";

const FormExample = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const [user, setUser] = useState({ name: "", email: "" });
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
        name=""
        id=""
        className="border-2"
      />
      <input
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        type="email"
        name=""
        id=""
        className="border-2"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormExample;
