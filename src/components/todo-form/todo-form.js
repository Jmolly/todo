import React from 'react';

export default class TodoForm extends React.Component {
  focusOnText = () => {
    this.refs.todoText.focus()
  }

render() {
    let { addTodo, currentItem, handleTextInput, handleDateInput } = this.props;

    return (
      <div>
        <form onSubmit={addTodo}>
          <input className="input"
            type="text"
            placeholder="add some..."
            ref="todoText"
            value={currentItem.text}
            onChange={handleTextInput}
          />
          <input
            type="datetime-local"
            onChange={handleDateInput}
          />
          <button onClick={this.focusOnText}>add todo</button>
        </form>
      </div>
    )
  }
}
