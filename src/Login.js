import React, { Component } from 'react';
import {login as l,logout,handleResponse} from './_service/user_service';
import Authchecker from './store/Authchecker';
import * as userAction from "./action/userAction";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class Login extends Component {

  constructor(props){
      super();
      this.state = {
        redirect : Authchecker.checkLoginAuth(),
      }
      this.login = this.login.bind(this);
  }

  login = (e) => {
    debugger;
    e.preventDefault();
    const email = e.target.email.value;
    const  password = e.target.password.value;
    l(email,password);
    Authchecker.checkLoginAuth('LOGIN','login');
    this.setState({redirect:true}); 
  }

  render() {

    if(this.state.redirect){
      return (<Redirect to="/support" />);
    }

    return (
      <div className="container">
        <div className="col-sm-12">
          <h3>Login</h3>
          <div className="col-sm-4">
            <form action="" method="post" onSubmit={this.login.bind(this)}> 
              <div className="form-group">
                <label for="exampleDropdownFormEmail2">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
              </div>
              <div className="form-group">
                <label for="exampleDropdownFormPassword2">Password</label>
                <input type="password" name="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                <label className="form-check-label" for="dropdownCheck2">
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
