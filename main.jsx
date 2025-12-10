import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    // 初始化状态
    this.state = {
      count: 0,
      message: 'Hello'
    };
    
    // 绑定方法
    this.handleClick = this.handleClick.bind(this);
  }

  // 生命周期方法
  componentDidMount() {
    console.log('组件已挂载');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('count 已更新');
    }
  }

  componentWillUnmount() {
    console.log('组件即将卸载');
  }

  // 自定义方法
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  // 使用箭头函数避免绑定
  handleReset = () => {
    this.setState({ count: 0 });
  }

  // 必须实现的 render 方法
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>计数: {this.state.count}</p>
        <p>消息: {this.state.message}</p>
        <button onClick={this.handleClick}>增加</button>
        <button onClick={this.handleReset}>重置</button>
      </div>
    );
  }
}

export default MyComponent;
