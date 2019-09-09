import React from 'react';
import TodoItem from '../todo-item/todo-item';
import './todo-list.css';
import { connect } from 'react-redux';

class TodoList extends React.Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map(todo => (
          <TodoItem todo={todo} key={todo.id}/>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps)(TodoList);
