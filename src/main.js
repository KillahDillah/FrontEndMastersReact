import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement(
  //   "div",
  //   { id: "check-it" }, // add `id:'check-it'` to parent element
  //   [
  //     React.createElement("h1", {}, "Adopt Me!"), // child element
  //     React.createElement(Pet, {
  //       name: "ButtSlut",
  //       animal: "cat",
  //       breed: "tabby"
  //     }),
  //     React.createElement(Pet, {
  //       name: "The Cat",
  //       animal: "kitty",
  //       breed: "cat"
  //     })
  //   ]
  // );
  // code above displays the same as code below but in JSX
  return (
    <div>
      <h1 id="check-it">Adopt Me!</h1>
      <Pet name="Butt Slut" animal="Cat" breed="Tabby" />
      <Pet name="The Cat" animal="Kitty" breed="Cat" />
      <Pet name="Slut Muffin" animal="Skitty" breed="Skat" />
    </div>
  );
};

// Render to DOM
ReactDOM.render(React.createElement(App), document.getElementById("root"));
