import React from "react";

const TodoForm = (props) => {
  const onClickHandler = () => {
    let todoItem = document.getElementById("todoItem").value;
    props.onAddTodo(todoItem);
    document.getElementById("todoItem").value = "";
  };
  return (
    <div>
      <input type="text" id="todoItem" />
      <input type="button" value="Add Todo" onClick={onClickHandler} />
    </div>
  );
};

export default TodoForm;
