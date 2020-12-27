import React from 'react';
import ToDosList from './ToDosList';
import Header from './Header';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
 

class ToDoContainer extends React.Component {
  state = {
    todos: [
      
    ],
  };


  handleChange = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    }));
  };

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !==id;
        })
      ]
    });
  };

  addTodoItem = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title: title,
        completed: false,
      })
      .then(response =>
        this.setState({
          todos: [...this.state.todos, response.data],
        })
      );
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos', {
      params: {
        _limit: 10
      }
    }).then(response => this.setState({ todos: response.data }));
  };

  render() {
    return (
      <div className="container">
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <ToDosList 
          todos={this.state.todos} 
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  };
}

export default ToDoContainer;