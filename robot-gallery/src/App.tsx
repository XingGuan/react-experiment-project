import React from "react";
import logo from "./assets/images/logo.svg";
// import "./App.css";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";
// const html = "<img onerror='alert(\"Hacked!\")' src='invalid-image' />";
// const jsHacked = "javascript:alert('Hacked!');";

interface Props {}
interface State {
  robotGallery: any[]; // 使用any类型原因，使用 any 类型,typescript类型还有意义吗 数据来源于网络请求，返回的数据类型不受控制，前端强行定义API数据类型，违反前后端分离的原则，不能为了使用Type而放弃JavaScript的灵活性
}

// function App() {
//   return (
//     <div className={styles.app}>
//       <div className={styles.appHeader}>
//         <img src={logo} className={styles.appLogo} alt="logo" />
//         <div>Robot</div>
//         {/* <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1> */}
//       </div>
//       <ShoppingCart />
//       <div className={styles.robotList}>
//         {robots.map((r) => (
//           <Robot key={r.id} id={r.id} name={r.name} email={r.email} />
//         ))}
//       </div>
//     </div>
//     // <>
//     //   {/* <div>{html}</div>
//     //   <a href={jsHacked}>My websit</a> */}
//     //   <ul>
//     //     {robots.map((r) => (
//     //       <Robot id={r.id} name={r.name} email={r.email} />
//     //     ))}
//     //   </ul>
//     // </>
//   );
// }

// export default App;
class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          robotGallery: data,
        });
      });
  }
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <div>Robot</div>
          {/* <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1> */}
        </div>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r) => (
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
}

export default App;
