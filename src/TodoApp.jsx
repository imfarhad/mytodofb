import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);
  const onAddTodo = (todoItem) => {
    setTodos([...todos, todoItem]);
  };

  return (
    <div>
      <div>Todo App</div>
      <TodoForm onAddTodo={onAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoApp;
