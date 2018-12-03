import React, { Component } from 'react';
import {Link,
  Redirect,NavLink
} from "react-router-dom";

class Header extends Component {
  render() {
    return (
     <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal">F5 Buddy</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <NavLink to="support" activeClassName="active" className="p-2 text-dark">Features</NavLink>
        <NavLink to="support" activeClassName="active" className="p-2 text-dark">Enterprise</NavLink>
        <NavLink to="support" activeClassName="active" className="p-2 text-dark">Support</NavLink>
        <NavLink to="support" activeClassName="active" className="p-2 text-dark">Pricing</NavLink>
      </nav>
   
      <NavLink to="registration" ClassName="btn btn-outline-primary">Sign up </NavLink>&nbsp;&nbsp; <NavLink to="login" ClassName="btn btn-outline-primary">Login</NavLink>
    </div>
    );
  }
}

export default Header;
