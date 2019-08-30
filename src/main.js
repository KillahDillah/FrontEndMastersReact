import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="check-it">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

// Render to DOM
ReactDOM.render(<App />, document.getElementById("root"));
