import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

export default class Projects extends Component {
  componentDidMount() {
    let elements = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(elements);
  }
  render() {
    return (
      <>
        <section className="container scrollspy" id="Projects">
          <div className="row">
            <div className="col s12 l4">
              <img
                src="https://files.slack.com/files-pri/T6RAP57AP-FRT306BR9/proc.png"
                alt=""
                className="responsive-img materialboxed"
                style={{ border: "2px solid black" }}
              />
            </div>
            <div className="col s12 l6 offset-l1">
              <h3 className="red-text text-darken-4" style={{ fontFamily: "Rye" }}>
                Procrastinate
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur numquam consequatur aliquam.
                Consequatur explicabo alias tenetur. Odit, nisi alias molestias nobis non officiis placeat minus
                necessitatibus, natus laboriosam obcaecati!
              </p>
              <Link to="/first" className="btn indigo large">
                View Project
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col s12 l4 push-l7 offset-l1">
              <img
                src="https://files.slack.com/files-pri/T6RAP57AP-FS4GSNPFA/todo.png"
                alt=""
                className="responsive-img materialboxed"
                style={{ border: "2px solid black" }}
              />
            </div>
            <div className="col s12 l6 pull-l5 right-align offset-l1">
              <h3 className="red-text text-darken-4" style={{ fontFamily: "Rye" }}>
                Todo Primitive
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, magni ab impedit blanditiis quis a?
                Suscipit numquam sint, temporibus dignissimos exercitationem laboriosam ratione eveniet vel et soluta
                rerum ab nemo!
              </p>
              <Link to="/second" className="btn indigo large">
                View Project
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col s12 l4">
              <img
                src="https://files.slack.com/files-pri/T6RAP57AP-FS6NVHGB0/did.png"
                alt=""
                style={{ border: "2px solid black" }}
                className="responsive-img materialboxed"
              />
            </div>
            <div className="col s12 l6 offset-l1">
              <h3 className="red-text text-darken-4" style={{ fontFamily: "Rye" }}>
                Todo Improved
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic laborum veritatis doloribus facilis
                ipsam harum eveniet? Illum libero vitae optio cum illo in excepturi officia quas similique
                reprehenderit! Eius.
              </p>
              <Link to="/third" className="btn indigo large">
                View Project
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
}
