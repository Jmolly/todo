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
        date: '',
        completed: false,
        dueDate: '',
      },
    }    
  }

  handleTextInput = e => {
    const itemText = e.target.value;

    this.setState({
      currentItem: {
        ...this.state.currentItem,
        text: itemText, 
        date: Date.now()
    }
    })
  }

  handleDateInput = e => {
    const itemDate = e.target.value;
    console.log(itemDate);
    
    this.setState({
      currentItem: {
        ...this.state.currentItem,
        dueDate: itemDate,
      },
    })
  }

  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;

    if (newItem.text) this.setState({
      items: [...this.state.items, newItem],
      currentItem: {text: '', date: '', dueDate: ''}
    })
  }

  render() {
    return (
      <div className="app">
          <TodoForm 
            addItem={this.addItem}
            handleTextInput={this.handleTextInput}
            handleDateInput={this.handleDateInput}
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

