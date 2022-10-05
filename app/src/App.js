import './App.css';
import Home from './Home';
import Employees from './Employees';

import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {

  render(){
    return(
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/employees' exact={true} component={Employees}/>
        </Switch>
      </Router>
    )
    
  }
}


export default App;
