import React from 'react';
import TodoItem from '../todo-item/todo-item'
import './todo-list.css';

const TodoList = ({ todos, toggleCompleted }) => {
  
  const createTask = (item) => <TodoItem 
      item={item}
      toggleCompleted={toggleCompleted}
      />
      
  const listItems = todos.map(createTask);

  return <ul>{listItems}</ul>;
};

export default TodoList; 