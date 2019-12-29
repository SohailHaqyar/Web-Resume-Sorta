import React, { Component } from "react";
const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => (
      <div className="collection" key={todo.id}>
        <ul>
          <li
            style={{ fontFamily: "Felipa", fontSize: "22px", fontStyle: "Bold" }}
            className="collection-item"
            onClick={() => {
              deleteTodo(todo.id);
            }}>
            {todo.description} : {todo.deadline}
          </li>
        </ul>
      </div>
    ))
  ) : (
    <h3 className="center" style={{ fontFamily: "Satisfy" , padding:"20px"}}>
      You have no todos left you cunt
    </h3>
  );
  return <div className="Todo ">{todoList}</div>;
};
export default Todos;
