import React from 'react';
import TodoItem from '../todo-item/todo-item'
import './todo-list.css';

const TodoList = ({ todos, toggleCompleted, deleteTodo }) => {
  
  const createTask = (todo) => <TodoItem 
      todo={todo}
      toggleCompleted={toggleCompleted}
      deleteTodo={deleteTodo}
    />
      
  const listItems = todos.map(createTask);

  return <ul className="todo-list">{listItems}</ul>;
};

export default TodoList; 