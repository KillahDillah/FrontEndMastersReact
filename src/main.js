import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    { id: "check-it" }, // add `id:'check-it'` to parent element
    [
      React.createElement("h1", {}, "Adopt Me!"), // child element
      React.createElement(Pet, {
        name: "ButtSlut",
        animal: "cat",
        breed: "tabby"
      }),
      React.createElement(Pet, {
        name: "The Cat",
        animal: "kitty",
        breed: "cat"
      })
    ]
  );
};

// Render to DOM
ReactDOM.render(React.createElement(App), document.getElementById("root"));
