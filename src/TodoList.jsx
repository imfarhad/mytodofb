import React from "react";

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo, id) => (
          <li key={id} onDoubleClick={() => props.onRemoveTodo(id)}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
