import React from 'react';
import './App.css';
import TodoForm from './components/todo-form/todo-form'
import TodoList from './components/todo-list/todo-list'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      currentItem: {
        text: '',
        key: '',
        completed: false,
        dueDate: '',
      },
    }    
  }

  handleTextInput = e => {
    this.setState({
      currentItem: {
        ...this.state.currentItem,
        text: e.target.value, 
        key: Date.now()
    }
    })
  }

  handleDateInput = e => {
    this.setState({
      currentItem: {
        ...this.state.currentItem,
        dueDate: e.target.value,
      },
    })
  }

  addTodo = e => {
    e.preventDefault();

    if (this.state.currentItem.text) this.setState({
      todos: [...this.state.todos, this.state.currentItem],
      currentItem: {text: '', key: '', dueDate: ''}
    })
  }

  deleteTodo = key => {
    const filteredTodos = this.state.todos.filter(
      todo => todo.key !== key
      )
    
    this.setState({
      todos: filteredTodos,
    })
  }


  toggleCompleted = key => {
    this.setState({
      todos: this.state.todos.map(
        item => {
          if (item.key === key) item.completed = !item.completed;
          return item;
        },
      )
    })
  }

  render() {
    return (
      <div className="app">
          <TodoForm 
            addTodo={this.addTodo}
            handleTextInput={this.handleTextInput}
            handleDateInput={this.handleDateInput}
            currentItem={this.state.currentItem}
          />
          <TodoList 
            todos={this.state.todos}
            toggleCompleted={this.toggleCompleted}
            deleteTodo={this.deleteTodo}
          />
        </div>
    );  
  }
}

