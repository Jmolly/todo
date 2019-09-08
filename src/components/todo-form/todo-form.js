import React from 'react';
import uuidv1 from 'uuid/v1';
import { connect } from 'react-redux';
import { addTodo } from '../../actions'

class TodoForm extends React.Component {
  state = {
    text: '',
    dueDate: ''
  };

  addTodo = (e) => {
    e.preventDefault();

    this.setState({
      id: uuidv1()
    });

    const { text, dueDate } = this.state;

    if (text.trim()) this.props.addTodo(text, uuidv1(), dueDate);

    this.setState({
      text: '',
      id: '',
      dueDate: ''
    });
  };

  handleTextInput = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleDateInput = (e) => {
    this.setState({
      dueDate: e.target.value
    });
  };

  focusOnText = () => {
    this.refs.todoText.focus();
  };

  render() {
    const { text, dueDate } = this.state;

    return (
      <div>
        <form action="">
          <input
            className="input"
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
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (text, id, dueDate) => dispatch(addTodo(text, id, dueDate))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TodoForm);
