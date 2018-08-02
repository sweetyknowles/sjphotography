import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from './components/Home';
import Photo from './components/Photo';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/photo">Photo</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/" component={Home}/>
            <Route path="/photo" component={Photo}/>
            <Route path="/contact" component={Contact}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default App;