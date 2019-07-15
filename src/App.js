import React from 'react';
import './App.css';
import TodoForm from './components/todo-form/todo-form'
import TodoList from './components/todo-list/todo-list'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
        completed: false,
        dueDate: '',
      },
    }    
  }

  handleTextInput = e => {
    const itemText = e.target.value;
    const currentItem = {
      text: itemText, 
      key: Date.now(),
      dueDate: Date.now(),
    }

    this.setState({
      currentItem,
    })
  }
  
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;

    if (newItem.text) this.setState({
      items: [...this.state.items, newItem],
      currentItem: {text: '', key: '', dueDate: ''}
    })
  }

  render() {
    return (
      <div className="app">
          <TodoForm 
            addItem={this.addItem}
            handleTextInput={this.handleTextInput}
            currentItem={this.state.currentItem}
          />
          <TodoList 
            entries={this.state.items}
            deleteItem={this.deleteItem}
          />
        </div>
    );  
  }
}

