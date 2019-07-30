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
    let { item, toggleCompleted } = this.props;
console.log(item, "item")
    return (
      <li className="todo-list__item" key={item.key} onMouseOver = {this.mouseOver} onMouseOut = {this.mouseOut}>
        <input
          className={item.completed ? "todo-list__text todo-list__text_completed" : "todo-list__text"}
          type="text"
          defaultValue={item.text + (item.dueDate ? ` until ${item.dueDate.replace(/T/gi, ' ')}` : '')}
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
        onClick={() => toggleCompleted(item.key)}
        >
      </input>
      </li>
    );
  }
}
