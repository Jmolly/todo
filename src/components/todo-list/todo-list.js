import React from 'react';
// import TodoItem from '../todo-item/todo-item'
import './todo-list.css';

const TodoList = ({ entries }) => {
  const createTask = item => (
    <li className="todo-list__item" key={item.date}>
      <span className="todo-list__text">
        {item.text}
        {item.dueDate ? ` until ${item.dueDate.replace(/T/gi, ' ')}` : ''}
      </span>
    </li>
  );

  const listItems = entries.map(createTask);

  return <ul>{listItems}</ul>;
};

export default TodoList;
