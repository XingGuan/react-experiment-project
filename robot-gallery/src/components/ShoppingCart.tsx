import React from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";

interface Props {}
interface State {
  isOpen: boolean;
}
const CartIcon = FiShoppingCart as React.ComponentType<any>;
class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    // this.handleClick = this.handleClick.bind(this); // bind只绑定this和预设参数，返回新函数，不执行
  }
  // handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  //   this.setState({
  //     isOpen: !this.state.isOpen,
  //   });
  // }
  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("e.target ", e.target); // target 描述的是事件发生的元素（原始元素）
    console.log("e.currentTarget ", e.currentTarget); // 而currentTarget描述的是事件处理绑定的元素（当前元素）
    // this.setState({
    //   isOpen: !this.state.isOpen,
    // });
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  };
  render() {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button} onClick={this.handleClick}>
          <CartIcon />
          <span>xxx2（件）</span>
        </button>
        <div
          className={styles.cartDropDown}
          style={{ display: this.state.isOpen ? "block" : "none" }}
        >
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
