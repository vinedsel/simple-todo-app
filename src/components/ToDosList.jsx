import React from "react";
import ToDoItem from './ToDoItem';

class ToDosList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <ToDoItem key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}

export default ToDosList;