import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    const {items , handleDelete , clearList , handleEdit} = this.props;
    return (
      <div className="container">
        <div className="row">
          <ul className="collection col s12 l12">
            <h3 className="center" style={{fontFamily:"Rye" , fontSize:50}}>Todo List</h3>
            {
             items.map(item => {
               return(
                 <TodoItem
                 key={item.id}
                 title={item.title}
                 handleDelete={() => {handleDelete(item.id)}}
                 handleEdit={() => {handleEdit(item.id)}}
                 />
               )
             })
            }
          </ul>
          <button className="red btn accent-3 col s12 l12 btn-large" onClick={clearList}>
            Clear List
          </button>
        </div>
      </div>
    )
  }
}
