import React, { Component } from "react";

export default class Todos extends Component {
  render() {
    const { todos , deleteTodo} = this.props;
    return (
      <div>
        {todos.length ? todos.map(todo => {
          return (
            <div key={todo.id} className="collection">
              <ul>
                <li 
                className="collection-item styles" 
                onClick={() => {deleteTodo(todo.id)}}
                >{todo.description}</li>
              </ul>
            </div>
          );
        })
      : (
        <div className="container">
        <h4 className="center "
        style={{fontFamily:"Satisfy" , paddingBottom:3}}
        >Well You Have Done All the Todos</h4>
        <h4 className="center "
        style={{fontFamily:"Satisfy" , paddingBottom:3}}
        >Add some more if You Like</h4>
        </div>
      )
      }
      </div>
    );
  }
}
