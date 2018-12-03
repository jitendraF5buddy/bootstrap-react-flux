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
    }

  }

  componentWillMount(){
    StoreHome.on("change", () => {
        this.setState({
          userlist: StoreHome.getuserlist(),
        });
    });
  }

  adduserh(){
      userAction.createUser("CREATEUSER","jitendrapatel");
  }

  render() {

    const listr = this.state.userlist.map((list) => {
      return <tr><td>{list.id}</td><td>{list.name}</td><td>{list.email}</td></tr>
    });

    return (
      <div className="">
            
            <Router>
              <div>
                <Header />
               

                  <div>
                  <button onClick={this.adduserh.bind(this)}>New button</button>
                    <Route exact path="/" component={Home}></Route>
                    <Route  path="/login" component={Login}></Route>
                    <Route  path="/support" component={Support}></Route>
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
