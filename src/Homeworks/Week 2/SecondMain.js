import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo  from "./AddTodo";

class SecondMain extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todos:[]
    }
  }
  componentDidMount() {
    fetch('https://api.myjson.com/bins/68794')
    .then(res => res.json())
    .then(data => this.setState({ todos:data }))
  }
  addTodo = todo => {
    todo.id = Math.random()
    let todos = [...this.state.todos ,todo]
    this.setState({
      todos
    })
  }
  deleteTodo = id => {
    let todos = this.state.todos.filter(item => item.id !== id)
    this.setState({
      todos
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="container">
        <h1 className="center" style={{fontFamily:"Rye"}}>To Actually Do List </h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}
export default SecondMain
