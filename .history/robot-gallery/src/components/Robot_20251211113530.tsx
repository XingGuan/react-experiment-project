import React from "react";
import styles from "./Robot.module.css";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

//这里 FC = functional component 函数式组件，React.FC 这里代表函数式组件的接口
// type FC<P = {}> = React.FunctionComponent<P> 接受一个泛型参数P=props
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
    <div>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Robot;
