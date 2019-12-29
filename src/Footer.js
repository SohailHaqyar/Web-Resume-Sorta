import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer grey darken-3">
        <div className="container">
          <div className="row">
            <div className="col s12 l6">
              <h5>About Kakou Sohail</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, obcaecati beatae ad velit officiis
                amet? Quisquam quas nesciunt porro eveniet, soluta aspernatur rem hic ipsa voluptatum accusantium magnam
                similique distinctio.
              </p>
              <p>
                Eligendi quas corrupti recusandae cum ratione consequatur nemo, at fuga, qui debitis doloremque porro
                laborum eum asperiores repudiandae autem dolores enim? Est commodi perspiciatis quod tenetur quo
                similique rerum tempore!
              </p>
            </div>
            <div className="col s12 l4 offset-l2">
              <h5>Connect</h5>
              <ul>
                <li>
                  <a href="#" className="grey-text text-lighten-3">
                    FaceBook
                  </a>
                </li>
                <li>
                  <a href="#" className="grey-text text-lighten-3">
                    Istagram
                  </a>
                </li>
                <li>
                  <a href="#" className="grey-text text-lighten-3">
                    Istagram
                  </a>
                </li>
                <li>
                  <a href="#" className="grey-text text-lighten-3">
                    Istagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright grey darken-4">
          <div className="container center-align ">&copy; 2020 ASH</div>
        </div>
      </footer>
    );
  }
}
