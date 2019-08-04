import React from "react";

export default class TodoForm extends React.Component {
  state = {
    text: "",
    key: Date.now(),
    completed: false,
    dueDate: "",
  }

  addTodo = (e) => {
    e.preventDefault();

    const {text, key, completed, dueDate } = this.state;
    
    if (text.trim()) this.props.addTodo({text, key, completed, dueDate});
    
    this.setState({
      text: "",
      key: "",
      dueDate: ""
    })
  }
  
  handleTextInput = (e) => {
    this.setState({
        text: e.target.value
    })
  }

  handleDateInput = (e) => {
    this.setState({
        dueDate: e.target.value,
    })
  }

  focusOnText = () => {
    this.refs.todoText.focus()
  }

  render() {
    const { text, dueDate } = this.state;

    return (
      <div>
        <form action="">
          <input className="input"
            type="text"
            placeholder="add some..."
            ref="todoText"
            value={text}
            onChange={this.handleTextInput}
          />
          <input
            type="datetime-local"
            value={dueDate}
            onChange={this.handleDateInput}
          />
          <button onClick={this.addTodo}>add todo</button>
        </form>
      </div>
    )
  }
}
