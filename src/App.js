import React from "react";
import "./App.css";
import TodoForm from "./components/todo-form/todo-form"
import TodoList from "./components/todo-list/todo-list"

export default class App extends React.Component {
  state = {
    todos: [],
  }

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })

  }

  deleteTodo = (key) => {
    this.setState({
      todos: this.state.todos.filter(
        todo => todo.key !== key
      )
    })
  }

  saveTodo = (key, newText, newDate) => {
    this.setState({
      todos: this.state.todos.map(
        todo => 
          todo.key === key ? {...todo, text: newText, dueDate: newDate} : todo
        )
    })
  }

  toggleCompleted = (key) => {
    this.setState({
      todos: this.state.todos.map(
        todo => todo.key === key ? {...todo, completed: !todo.completed} : todo
      )
    })
  }

  render() {
    return (
      <div className="app">
          <TodoForm 
            addTodo={this.addTodo}
          />
          <TodoList 
            todos={this.state.todos}
            toggleCompleted={this.toggleCompleted}
            deleteTodo={this.deleteTodo}
            saveTodo={this.saveTodo}
          />
        </div>
    );  
  }
}

