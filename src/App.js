import React from "react";
import logo from "./brum_js.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Great! You've made it this far{" "}
          <span role="img" aria-label="sunglasses guy">
            😎
          </span>
        </p>
      </header>
    </div>
  );
}

export default App;
