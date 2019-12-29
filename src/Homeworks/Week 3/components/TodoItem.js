import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <div className="collection">
        <li className="collection-item">
          <h6 className="left"style={{fontFamily:"Federant" , fontSize:20}}>{title}</h6>
          <div>
            <span className="text-red icon">
              <i className="material-icons right red-text darken-3" onClick={handleDelete}>
                check_box
              </i>
            </span>
            <span className="text-green icon">
              <i className="material-icons right green-text text-accent-3" onClick={handleEdit}>
                edit
              </i>
            </span>
          </div>
        </li>
      </div>
    );
  }
}
