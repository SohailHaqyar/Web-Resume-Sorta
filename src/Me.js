import React from "react";

import M from "materialize-css";

class Me extends React.Component {
  componentDidMount() {
    let element = document.querySelectorAll(".tabs");
    M.Tabs.init(element);
  }
  render() {
    return (
      <section className="section scrollspy" id="services">
        <div className="row">
          <div className="col s12 l6">
            <div className="card horizontal">
              <div className="card-image">
                <div className="avatar"></div>
              </div>
              <div className="card-content">
                <h6 className="card-title blue-text text-accent-3">Ahmad Sohail Haqyar</h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quibusdam fugiat praesentium ullam
                  beatae et, alias porro rem saepe in reprehenderit eaque enim voluptatum tempora aut dolor odit magni
                  sit.
                </p>
              </div>
            </div>
          </div>
        {/* /// */}

        <div className="col s12 l6 ">
          <ul className="tabs">
            <li className="tab col s6">
              <a href="#first" className="red-text text-darken-4">
                Playing Video Games and Stuff
              </a>
            </li>
            <li className="tab col s6">
              <a href="#second" className="red-text text-darken-4">
                Programmin and Web Dev
              </a>
            </li>
          </ul>
          <div className="col s12" id="first">
            <p className="flow-text red-text text-darken-4">Playing Video Games</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo et adipisci facilis assumenda ratione
              blanditiis error, commodi omnis ad voluptate nulla? Praesentium eveniet assumenda, incidunt error corrupti
              id blanditiis autem?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo et adipisci facilis assumenda ratione
              blanditiis error, commodi omnis ad voluptate nulla? Praesentium eveniet assumenda, incidunt error corrupti
              id blanditiis autem?
            </p>
          </div>
          <div className="col s12 " id="second">
            <p className="flow-text red-text text-darken-4">Programming and Web Dev</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo et adipisci facilis assumenda ratione
              blanditiis error, commodi omnis ad voluptate nulla? Praesentium eveniet assumenda, incidunt error corrupti
              id blanditiis autem?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo et adipisci facilis assumenda ratione
              blanditiis error, commodi omnis ad voluptate nulla? Praesentium eveniet assumenda, incidunt error corrupti
              id blanditiis autem?
            </p>
          </div>
        </div>
        </div>
      </section>
    );
  }
}
export default Me;
