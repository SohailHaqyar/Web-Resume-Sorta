import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { handleChange, handleSubmit, editItem, item } = this.props;
    return (
      <div>
        <div className="collection">
          <div className="row">
            <form className="col s12 l12" onSubmit={handleSubmit}>
              <div className="input-field col s12">
                <input type="text" onChange={handleChange} value={item} style={{fontFamily:"Felipa" , fontSize:25}}/>
                <button
                  className={editItem ? "btn btn-large green accent-3  col s12 pulse" : "btn blue accent-4 btn-large col s12"}>
                  {editItem ? "Edit the Todo" : "Add a Todo"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
