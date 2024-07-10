import React from "react";
export const HelloWorld = () => {
  return React.createElement("p", { style: { color: "red" } }, "Hello World");
};

export const AnotherHello = () => {
  return React.createElement("p", {}, "Another Hello");
};
export const AnotherBye = () => {
  return React.createElement("p", {}, "Another Bye");
};
