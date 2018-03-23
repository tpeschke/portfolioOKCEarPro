import React, { Component } from 'react';
import './reset.css'
import './App.css';

import Routes from './routes'
import NavBarShell from './components/HOC/NavBarShell'

class App extends Component {

  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default NavBarShell(App);
