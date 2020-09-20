import React from "react";

const TodoList = ({todos,onRemoveTodo}) => {
  return (
    <div>
      <ul>
        {todos.map((todo, id) => (
          <li key={id} onDoubleClick={() => onRemoveTodo(id)}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
