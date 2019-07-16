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
          <input
            type='datetime-local'
           //value={new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0]}
            onChange={this.props.handleDateInput}
          />
          <button type="submit">add todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
