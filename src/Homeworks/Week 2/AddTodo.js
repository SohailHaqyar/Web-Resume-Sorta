import React from "react";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      deadline: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit}>
          <div className="col s12">
            <div className="input-field">
              <input
                type="text"
                placeholder="Add a Todo"
                onChange={this.handleChange}
                id="description"
                style={{ fontFamily:"Felipa", fontSize:"28px" }}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Deadline"
                onChange={this.handleChange}
                id="deadline"
                style={{ fontFamily: "Felipa", fontSize:"28px"}}
              />
            </div>
            <button 
            className="btn col s12 waves-effect btn-large effect-light indigo accent-4"
            // style={{  }}
            >Add to The List</button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddTodo;
