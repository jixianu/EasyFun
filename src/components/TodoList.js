import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo, index) =>
            <Todo
              {...todo}
              onClick={() => this.props.onTodoClick(index)}
              key={index}
            />
          )
        }
      </ul>
    );
  }
}
