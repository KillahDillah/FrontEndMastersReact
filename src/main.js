import React from "react";
import ReactDOM from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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
