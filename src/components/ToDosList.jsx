import React from "react";
import ToDoItem from './ToDoItem';

class ToDosList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <ToDoItem 
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
          />
        ))}
      </div>
    );
  }
}

export default ToDosList;