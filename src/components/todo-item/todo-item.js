import React from "react";
import "./todo-item.css";
import cn from "classnames"

export default class TodoItem extends React.Component {
  state = {
    isEditing: "",
    text: this.props.todo.text,
    date: this.props.todo.dueDate,
  };

  toggleEditing = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }
  
  cancelTodo = () => {
    this.setState({
      text: this.props.todo.text,
      date: this.props.todo.date,
    });
    this.toggleEditing();
  };

  updateInput = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  updateDateInput = (e) => {
    this.setState({
      date: e.target.value
    });
  }

  onSave = () => {
    this.props.saveTodo(this.props.todo.key, this.state.editedText, this.state.editedDate);
    this.toggleEditing();
  }
  
  render() {
    const { todo, toggleCompleted, deleteTodo } = this.props;
    const { isEditing } = this.state;

    return (
      <li key={todo.key}>
        <form className="todo-form" action="">
          <input
            className={cn("input", "todo-text", {
              "todo-text_completed" : todo.completed,
            })}
            type="text"
            ref="textField"
            value={this.state.text}
            onChange={this.updateInput}
            disabled={!isEditing}
          />
          <input
            className={cn("input", "todo-text", {
              "not-visible" : !todo.dueDate,
            })}
            type="datetime-local"
            ref="dateField"
            value={this.state.date}
            onChange={this.updateDateInput}
            disabled={!isEditing}
          />
          <div>
            {this.state.isEditing && (
              <div>
                <button onClick={this.onSave}>save</button>
                <button onClick={this.cancelTodo}>cancel</button>
              </div>
            )}
            {!this.state.isEditing && (
              <button className={cn("not-visible","edit")} onClick={this.toggleEditing} >
                edit
              </button>
            )}
          </div>
          <input type="checkbox" onClick={() => toggleCompleted(todo.key)}/>
          <button onClick={() => deleteTodo(todo.key)}>delete</button>
        </form>
      </li>
    );
  }
}
