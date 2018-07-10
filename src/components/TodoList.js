import React from "react";
import style from "../containers/TodoList.css";

const TodoList = props => {
  const deleteItem = event => {
    props.remove(props.data.id);
  };
  return (
    <li>
      {props.data.text}
      <a href={"#"} onClick={deleteItem}>
        [delete]
      </a>
    </li>
  );
};

export default TodoList;
