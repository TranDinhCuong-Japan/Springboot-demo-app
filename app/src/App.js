import './App.css';
import Home from './Home';
import Employees from './Employees';
import AddEmployee from './AddEmployee';

import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {

  render(){
    return(
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/employees' exact={true} component={Employees}/>
          <Route path='/employees/add' exact={true} component={AddEmployee}/>
        </Switch>
      </Router>
    )
    
  }
}


export default App;
