import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import uuid from "uuid";

export default class ThirdMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      id: uuid(),
      item: "",
      editItem: false
    };
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };
  clearList = () => {
    this.setState({
      items: []
    });
  };
  handleDelete = (id) => {
    const filter = this.state.items.filter( item => item.id !== id );
    this.setState({
      items:filter
    })
  }
  handleEdit = (id) => {
    const filter = this.state.items.filter( item => item.id !== id );
    const select  = this.state.items.find( item => item.id === id );
    this.setState({
      items:filter,
      item:select.title,
      editItem:true,
      id:id
    })
  }
  render() {
    console.log(this.state);
    return (
      <div className="container"> 
        <h3 className="center red-accent-4" style={{fontFamily:"Rye" , fontSize:50}}>Todo Input</h3>
        <TodoInput
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={this.state.editItem}
        />
        <TodoList 
        items={this.state.items}
        handleDelete={this.handleDelete}
        clearList={this.clearList}
        handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
