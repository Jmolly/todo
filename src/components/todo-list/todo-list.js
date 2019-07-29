import React from 'react';
// import TodoItem from '../todo-item/todo-item'
import './todo-list.css';

const TodoList = ({ todos, toggleCompleted }) => {
  const createTask = item => (
    <li className="todo-list__item" key={item.key}>
      <span className={item.completed ? "todo-list__text todo-list__text_completed" : "todo-list__text"}>
        {item.text}
        {item.dueDate ? ` until ${item.dueDate.replace(/T/gi, ' ')}` : ''}
      </span>
      <input 
        type="checkbox" 
        onClick={() => toggleCompleted(item.key)}
        >
      </input>
    </li>
  );

  const listItems = todos.map(createTask);

  return <ul>{listItems}</ul>;
};

export default TodoList; 