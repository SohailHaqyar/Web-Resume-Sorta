import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Projects extends Component {
  render() {
    return (
      <>
      <section className="container scrollspy" id="Projects">
        <div className="row">
          <div className="col s12 l4">
            <img
              src="https://i.pinimg.com/originals/6a/97/6d/6a976df6d2beab68c474af8bf6919c71.jpg"
              alt=""
              className="responsive-img materialboxed"
            />
          </div>
          <div className="col s12 l6 offset-l1">
            <h3 className="red-text text-darken-4">Procrastinate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur numquam consequatur aliquam.
              Consequatur explicabo alias tenetur. Odit, nisi alias molestias nobis non officiis placeat minus
              necessitatibus, natus laboriosam obcaecati!
            </p>
            <Link to="/first" className="btn indigo large">View Project</Link>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4 push-l7 offset-l1">
            <img
              src="http://getwallpapers.com/wallpaper/full/d/4/5/798127-widescreen-devil-may-cry-wallpaper-hd-1920x1080.jpg"
              alt=""
              className="responsive-img materialboxed"
            />
          </div>
          <div className="col s12 l6 pull-l5 right-align offset-l1">
            <h3 className="red-text text-darken-4">Todo Primitive</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, magni ab impedit blanditiis quis a? Suscipit
              numquam sint, temporibus dignissimos exercitationem laboriosam ratione eveniet vel et soluta rerum ab
              nemo!
            </p>
            <Link to="/second" className="btn indigo large">View Project</Link>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4">
            <img src="http://getwallpapers.com/wallpaper/full/d/4/5/798127-widescreen-devil-may-cry-wallpaper-hd-1920x1080.jpg" alt="" className="responsive-img materialboxed"/>
          </div>
          <div className="col s12 l6 offset-l1">
            <h3 className="red-text text-darken-4">Todo Improved</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic laborum veritatis doloribus facilis ipsam harum eveniet? Illum libero vitae optio cum illo in excepturi officia quas similique reprehenderit! Eius.</p>
            <Link to="/third" className="btn indigo large">View Project</Link>
          </div>
        </div>
      </section>
      </>
    );
  }
}
