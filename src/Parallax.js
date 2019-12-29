import React, { Component } from 'react'

export default class Parallax extends Component {
  render() {
    return (
      <div className="parallax-container">
        <div className="parallax">
          <img src={this.props.src} alt="" className="responsive-img"/>
        </div>
      </div>
    )
  }
}
