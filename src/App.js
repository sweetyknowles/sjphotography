
import React, { Component } from "react";
import {Route,NavLink,HashRouter, } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Photo from './components/Photo';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Photography is a Passion! </h1>
          <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/photo">Photos</NavLink></li>
            
          </ul>
          <div className="content">
          <Route path="/" component={Home}/>
           <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/photo" component={Photo}/>
            
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default App;