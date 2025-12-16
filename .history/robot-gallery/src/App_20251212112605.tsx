import React from "react";
import logo from "./assets/images/logo.svg";
// import "./App.css";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
// const html = "<img onerror='alert(\"Hacked!\")' src='invalid-image' />";
// const jsHacked = "javascript:alert('Hacked!');";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1></h1>
      </div>
      <div className={styles.robotList}>
        {robots.map((r) => (
          <Robot key={r.id} id={r.id} name={r.name} email={r.email} />
        ))}
      </div>
    </div>
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
