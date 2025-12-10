import React from "react";
import logo from "./logo.svg";
import "./App.css";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
const html = "<img onerror='alert(\"Hacked!\")' src='invalid-image' />";
function App() {
  return (
    <ul>
      {robots.map((r) => (
        <Robot id={r.id} name={r.name} email={r.email} />
      ))}
    </ul>
  );
}

export default App;
