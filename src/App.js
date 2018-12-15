import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Middlepart from './Middlepart';
import Footer from './Footer';
import Login from './Login';
import Support from './Support';
import Registration from './Registration';



import StoreHome from './store/Storehome';
import Authchecker from './store/Authchecker';
import * as userAction from "./action/userAction";

import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userlist : StoreHome.getuserlist(),
      isLogin: Authchecker.checkLoginAuth(),
    }
    this.logout = this.logout.bind(this);
  }

  componentWillMount(){
    debugger;
    StoreHome.on("change", () => {
      this.setState({
        userlist:StoreHome.getuserlist(),
      });
    });

    Authchecker.on("change", () => {
        this.setState({
          isLogin:Authchecker.checkLoginAuth(),
        });
    });
  }

  adduserh(){
      userAction.createUser("CREATEUSER","jitendrapatel");
  }

  logout(e){
      userAction.createUser("LOGOUT",true);
      alert('fsdf');
      e.preventDefault();
      this.setState({isLogin:false});
  }

  render() {
    
    const listr = this.state.userlist.map((list) => {
      return <tr><td>{list.id}</td><td>{list.name}</td><td>{list.email}</td></tr>
    });
    let checkheader = "";
    if(this.state.isLogin){
      checkheader = <Header authchecksend = {this.state.isLogin} logout={this.logout.bind(this)} />;
    }else{
      checkheader = <Header authchecksend = {this.state.isLogin} onClick={this.logout.bind(this)} />;
    }

    return (
      <div className="">
            
            <Router>
              <div>
             
                  {checkheader}
                  <div>
                  <button onClick={this.adduserh.bind(this)}>New button</button>
                    <Route exact path="/" component={Home}></Route>
                    <Route  path="/login" component={Login}></Route>
                    <Route  path="/support" component={Support} ></Route>
                    <Route  path="/registration" component={Registration}></Route>
                  </div> 
                
                <Footer />
              </div>
            </Router>
           
            <table border="1">
            {listr}
            </table>
      </div>
    );
  }
}

export default App;
