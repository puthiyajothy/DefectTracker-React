import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';

import Roting from './Components/Forms/Roting';


class App extends Component {

 
  render() {
    return (
    //   <Router>
    //   <div className="App">
    //   <Header/>
    //   <div id="wrapper">
    //   <Navbar/>
    //   <Roting/>   
    // </div>
    // </div>
    //  </Router>
    <div>
      <Roting/>
    </div>
      
    
    );
  }
}

export default App;
