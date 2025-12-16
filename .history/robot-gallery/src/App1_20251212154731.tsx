import React from "react";
import logo from "./assets/images/logo.svg";
// import "./App.css";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
// const html = "<img onerror='alert(\"Hacked!\")' src='invalid-image' />";
// const jsHacked = "javascript:alert('Hacked!');";

// class Mystringifier extends Stringifier {
//   comment(node) {
//     // 自定义注释输出
//     this.raw(node, "left", "commentLeft");
//     this.token("/*" + node.text + "*/");
//   }
// }
// const result = new Mystringifier().stringify(ast);
// // walkRules 用于遍历 AST 中的所有规则节点（`Rule`节点），也就是`CSS` 选择器中的规则块
// ```typescript
//   // 每个 {} 就是一个 Rule 节点
//   .selector{
//     color:red;
//   }
//   #id{
//     font-size:20px;
//   }
// ```;

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <div>Robot</div>
        {/* <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1> */}
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
