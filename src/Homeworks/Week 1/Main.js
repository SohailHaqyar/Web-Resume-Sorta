import React, { Component } from "react";
import Todos from './Todos'
import Add from './Add'
import './styles.css'
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, description: "What do you call a deer with no eyes No Idea" },
        { id: 2, description: 'Me "How Do I Look" MyDad "With your eyes"' },
        { id: 3, description: 'Me "Dad make me a Sandwich" MyDad "Poof! You are a Sandwich"' },
        { id: 4, description: "What do you call somebody with no body and no nose. Nobody Knows !" }
      ]
    };
  }

   addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos , todo]
    this.setState({
      todos
    })
  }
  deleteTodo = (id) => {
    let todos = this.state.todos.filter(item => item.id !== id)
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="container">
        <h1 className="blue-text center" style={{fontFamily:"Rye"}}>Just Do It Later</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <Add addTodo={this.addTodo} />
      </div>
    );
  }
}

export default Main;
