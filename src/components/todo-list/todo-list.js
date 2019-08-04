import React from "react";
import TodoItem from "../todo-item/todo-item"
import "./todo-list.css";

const TodoList = ({ todos, toggleCompleted, deleteTodo, saveTodo }) => {

  return <ul className="todo-list">{
    todos.map(todo => <TodoItem 
      todo={todo}
      toggleCompleted={toggleCompleted}
      deleteTodo={deleteTodo}
      saveTodo={saveTodo}
    />)}
  </ul>;

};

export default TodoList; 