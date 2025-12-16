import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
// const html = "<img onerror='alert(\"Hacked!\")' src='invalid-image' />";
// const jsHacked = "javascript:alert('Hacked!');";

function App() {
  return (
    <ul>
      {robots.map((r) => (
        <Robot id={r.id} name={r.name} email={r.email} />
      ))}
    </ul>
    // <>
    //   {/* <div>{html}</div>
    //   <a href={jsHacked}>My websit</a> */}
    //   <ul>
    //     {robots.map((r) => (
    //       <Robot id={r.id} name={r.name} email={r.email} />
    //     ))}
    //   </ul>
    // </>
  );
}

export default App;
