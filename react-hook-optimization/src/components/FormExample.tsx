import { useState } from "react";

const FormExample = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const [user, setUser] = useState({ name: "", email: "" });
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [inputName]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChnage}
        type="text"
        name="name"
        id=""
        value={user.name}
        className="border-2"
      />
      <input
        onChange={handleChnage}
        type="text"
        name="email"
        value={user.email}
        id=""
        className="border-2"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormExample;
