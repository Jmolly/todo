import React from 'react';
import './todo-item.css';

export default class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      editedText: "",
      editedDate: "",
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
  
  cancelTodo = todo => {
    this.refs.textField.value = todo.text;
    this.refs.dateField.value = todo.dueDate;
  };

  updateInput = e => {
    e.persist();

    this.setState({
      editedText: e.target.value
    });
  }

  updateDateInput = e => {
    e.persist();

    this.setState({
      editedDate: e.target.value
    });
  }

  render() {
    let { todo, toggleCompleted, deleteTodo, saveTodo, editTodo } = this.props;
    
    return (
      <li className="todo-list__item" key={todo.key} onMouseOver = {this.mouseOver} onMouseOut = {this.mouseOut}>
        {/* <form className="todo-list-form" action=""> */}
          <input
            className={"input todo-list__text" + (todo.completed ?  " todo-list__text_completed" : "")}
            type="text"
            ref="textField"
            defaultValue={todo.text}
            onChange={this.updateInput}
            disabled={!todo.isEditing}
          />
          <input
            className={"input todo-list__text" + (todo.dueDate ?  "" : " not-visible")}
            type="datetime-local"
            ref="textField"
            defaultValue={todo.dueDate}
            onChange={this.updateDateInput}
            disabled={!todo.isEditing}
          />
          <div>
            {todo.isEditing ? (
              <div>
                <button onClick={() => saveTodo(todo.key, this.state.editedText, this.state.editedDate)}>save</button>
                <button onClick={() => this.cancelTodo(todo)}>cancel</button>
              </div>
            ) : (
              <button 
                className = {this.state.mouseOver ? "visible" : "not-visible"} 
                onClick={() => editTodo(todo.key)}
              >edit</button>
            )}
          </div>
          <input 
            type="checkbox" 
            onClick={() => toggleCompleted(todo.key)}
          />
          <button onClick={() => deleteTodo(todo.key)}>delete</button>
        {/* </form> */}
      </li>
    );
  }
}
