import React, { Component } from 'react'
import Projects from './Projects'
import Parallax from './Parallax'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Projects/>
        <Parallax src=" https://cdn.hipwallpaper.com/i/9/67/szgGBX.jpg"/>
      </div>
    )
  }
}
