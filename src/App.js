import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import Main from "./Homeworks/Week 1/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'
import Navbar from './Navbar'

import SecondMain from './Homeworks/Week 2/SecondMain'
import ThirdMain from './Homeworks/Week 3/ThirdMain'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar/>
          <Route path="/first" component={Main}></Route>
          <Route path="/second" component={SecondMain}></Route>
          <Route path="/third" component={ThirdMain}></Route>
          <Route exact path="/" component={Home}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
