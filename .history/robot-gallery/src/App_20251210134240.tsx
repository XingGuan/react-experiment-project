import React from "react";
import logo from "./logo.svg";
import "./App.css";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
function App() {
  return (
    <ul>
      {robots.map((r) => (
        <Robot />
      ))}
    </ul>
  );
}

export default App;
