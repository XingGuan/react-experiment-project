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
  count: number;
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
  // * 生命周期第一阶段：初始化
  // 初始化组件 state
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
      count: 0,
    };
  }
  // 在组件创建好dom元素以后，挂载进页面的时候调用
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
  // * 生命周期第二阶段：更新
  // 在组件接收到一个新的 prop (更新后)时被调用
  // componentWillReceiveProps() {}
  // 在组件初始化和组件更新时都会被调用，作用就是用来对比当前的prop 和之前的state的变化
  // state getDerivedStateFromProps(nextProps,prevState){}
  // 通过判断 props 和 state 的变化 来控制组件是否需要被更新
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.some !== this.state.some;
  // }
  //组件更新后调用，只要组件发生了更新 UI 重新渲染，这个函数就会被调用
  componentDidUpdate() {}
  // * 生命周期第三阶段：销毁
  // 组件销毁后调用，
  // 可以当作析构函数 destructor 来使用
  componentWillUnmount() {}

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <div>Robot</div>
          {/* <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1> */}
        </div>
        <button
          onClick={() => {
            // this.setState({ count: this.state.count + 1 }, () => {
            //   console.log("count", this.state.count);
            // });
            // this.setState({ count: this.state.count + 1 }, () => {
            //   console.log("count", this.state.count);
            // });
            this.setState(
              (preState, preProps) => {
                //指的前一个生命周期的状态
                return { count: preState.count + 1 };
              },
              () => {
                console.log("count", this.state.count);
              }
            );
            this.setState(
              (preState, preProps) => {
                //指的前一个生命周期的状态
                return { count: preState.count + 1 };
              },
              () => {
                console.log("count", this.state.count);
              }
            );
          }}
        >
          Click
        </button>
        <span>count:{this.state.count}</span>
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
