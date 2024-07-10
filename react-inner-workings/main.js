// const HelloWorld = () => {
//   return React.createElement("p", { style: { color: "red" } }, "Hello World");
// };
// const App = () => {
//   return React.createElement(
//     "h1",
//     { style: { color: "red" } },
//     "This is aa fokira react app",
//     HelloWorld()
//   );
// };
const HelloWorld = () => {
  return <h1>Hello World !</h1>;
};

const App = () => {
  return (
    <>
      <div>This is a fokira react app</div>
      <HelloWorld />
    </>
  );
};

const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(<App />);
