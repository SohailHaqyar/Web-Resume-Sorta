import React, { Component } from 'react'
import M from "materialize-css";
export default class Contact extends Component {
  componentDidMount(){
    let element = document.querySelector('.datepicker');
    M.Datepicker.init(element)
  }
  render() {
    return (
      <section className="container scrollspy" id="contact">
        <div className="row">
          <div className="col s12 l5">
            <h2 className="red-text-text-darken-4">Call Me up</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ea natus, ipsa excepturi nobis corrupti iusto expedita, nostrum, neque porro nihil. Nostrum ullam earum sit eum enim veritatis esse hic.</p>
            <p>Deserunt molestias eos enim unde impedit? Rerum sed libero, a nam voluptatem fuga perspiciatis, veritatis, exercitationem doloribus at quis veniam sequi molestias quibusdam fugit error dicta nisi. Neque, officiis earum?</p>
          </div>
          <div className="col s12 l5 offset-l2">
            <form action="">
              <div className="input-field">
                <i className="material-icons prefix">emails</i>
                <input type="email" id="email"/>
                <label for="email">Your Email</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">message</i>
                <textarea name="" id="message" className="materialize-textarea"></textarea>
                <label for="message">Your Request</label>
              </div>
              <div className="input-field">
                <input type="text" id="date" className="datepicker"/>
                <label for="date">When does it work for you</label>
              </div>
              <div className="input-field">
                <p>Services Required</p>
                <p>
                  <label>
                    <input type="checkbox"/>
                    <span>Video Games...</span>
                  </label>
                </p>
                <p>
                  <label >
                    <input type="checkbox"/>
                    <span>Programming...</span>
                  </label>
                </p>
              </div>
              <div className="input-field center">
                <button className="btn red">Submit this shit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}
