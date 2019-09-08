import React from "react";
import "./App.css";
import TodoForm from "./components/todo-form/todo-form";
import TodoList from "./components/todo-list/todo-list";

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <TodoForm />
        <TodoList />
      </div>
    );  
  }
}

export default App;