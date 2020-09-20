import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
    return (
        <diV>
            <div>Todo App</div>
            <TodoForm />
            <TodoList />
        </diV>
    )
}

export default TodoApp;