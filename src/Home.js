import React, { Component } from "react";
import Projects from "./Projects";
import Parallax from "./Parallax";
import Me from "./Me";
import Contact from './Contact'
import Footer from "./Footer";

export default class Home extends Component {
 
  render() {
    return (
      <div>
        <Projects />
        <Parallax src="https://wallpaperaccess.com/full/49393.jpg" />
        <Me/>
        <Parallax src="http://free-hd-wall-papers.com/images/games-wallpapers/games-wallpapers-8.jpg" />
        <Contact/>
        <Footer/>
      </div>
    );
  }
}
