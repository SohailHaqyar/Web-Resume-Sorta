import React, { Component } from "react";

export default class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description:''
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state)
  }
  handleChange = (e) => {
    this.setState({
      description:e.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div className="row">
          <div className="input-field">
            <input type="text" id ="input" onChange={this.handleChange} placeholder="Add Todo" 
            style={{ fontSize:"20px" , paddingTop:8 , fontFamily:"Satisfy" , textTransform:"capitalize"}}
            />
          </div>
          <button className="btn pulse waves-effect effect-light blue accent-3 btn-large col s12"
          style={{textTransform:"capitalize",fontSize:"20px"}}>
            Add Todo
          </button>
          </div>
        </form>
      </div>
    );
  }
}
