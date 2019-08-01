import React from 'react';
import './todo-item.css';

export default class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isInEditMode: false,
      mouseOver: false,
    };
  }

  mouseOver = () => {
    this.setState({
      mouseOver: true
    });
  }

  mouseOut = () => {
    this.setState({
      mouseOver: false
    });
  }
  
  editItem = () => {
    this.setState({
      isInEditMode: true
    });
  };

  saveItem = () => {
    this.setState({
      isInEditMode: false
    });
  };

  render() {
    let { todo, toggleCompleted, deleteTodo } = this.props;

    return (
      <li className="todo-list__item" key={todo.key} onMouseOver = {this.mouseOver} onMouseOut = {this.mouseOut}>
        <input
          className={todo.completed ? "todo-list__text todo-list__text_completed" : "todo-list__text"}
          type="text"
          defaultValue={todo.text}
          ref="textInput"
          disabled={!this.state.isInEditMode}
        />
        <div className = {this.state.mouseOver ? "visible" : "not-visible"}>
          {this.state.isInEditMode ? (
            <button onClick={() => this.saveItem()}>save</button>
          ) : (
            <button onClick={() => this.editItem()}>edit</button>
          )}
        </div>
        <input 
        type="checkbox" 
        onClick={() => toggleCompleted(todo.key)}
        />
        <button onClick={() => deleteTodo(todo.key)}>delete</button>
      </li>
    );
  }
}
