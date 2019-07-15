import React from 'react';
// import TodoItem from '../todo-item/todo-item'
import './todo-list.css'

const TodoList = ({entries}) => {
  
  const createTask = (item) => 
      <li className="todo-list__item">
        <span
          className="todo-list__text"
        > {item.text} до {new Date(item.dueDate).toDateString()}</span>
      </li>
      
  const listItems = entries.map(createTask);

  return <ul>{listItems}</ul>

}

export default TodoList