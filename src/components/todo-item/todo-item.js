import React from 'react';
import './todo-item.css';

export default class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isInEditMode: false
    };
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

    return (
      <li className="todo-list__item" key={item.key}>
        <input
          className={item.completed ? "todo-list__text todo-list__text_completed" : "todo-list__text"}
          type="text"
          defaultValue={item.text + item.dueDate ? ` until ${item.dueDate.replace(/T/gi, ' ')}` : ''}
          ref="textInput"
          disabled={!this.state.isInEditMode}
        />
        <input 
        type="checkbox" 
        onClick={() => toggleCompleted(item.key)}
        >
      </input>
        <div>
          {this.state.isInEditMode ? (
            <button onClick={() => this.saveItem()}>save</button>
          ) : (
            <button onClick={() => this.editItem()}>edit</button>
          )}
        </div>
      </li>
    );
  }
}
