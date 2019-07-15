import React from 'react';

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.addItem}>
          <input
            placeholder="add some..."
            value={this.props.currentItem.text}
            onChange={this.props.handleTextInput}
          />
          {/* <input
            type='date'
            onChange={this.props.handleDateInput}
          /> */}
          <button type="submit">add todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
