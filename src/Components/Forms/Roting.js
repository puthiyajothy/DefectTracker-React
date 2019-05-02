import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Add_Project from "./Add_Project";
import Editproject from "./Editproject";
import View_defect from "./View_defect";
import Addmodule from "./Addmodule";
import Viewmodule from "./Viewmodule";
import Add_defect from "./Add_defect";
import Add_Users from "./Add_Users";
import View_Users from "./View_Users";
import View_Project from "./View_Project";
import Add_developer from "./Add_developer";
import View_developer from "./View_developer";
// import Editproject from "./Editproject";
import Header from '../Core/Header';
import Navbar from '../Core/Navbar';
import Editdeveloper from "./Editdeveloper";
import Editdefect from "./Editdefect";
import Table from "./Table";
export default class Roting extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <div id="wrapper">
        <Navbar/>
        <Switch>
          <Route path="/Add_Project" exact component={Add_Project}/>
          <Route path="/" exact component={Add_Project} />
          <Route path="/Editproject/:projectId" exact component={Editproject}/>
          <Route path = "/View_Project" exact component={View_Project} />

          <Route path = "/Add_developer" exact component={Add_developer}/>
          <Route path="/" exact component={Add_developer}/>
          <Route path="/Editdeveloper/:developerId" exact component={Editdeveloper}/>
          <Route path="/View_developer" exact component={View_developer}/>


          <Route path="/Add_defect" exact component={Add_defect}/>
          <Route path="/View_defect" exact component={View_defect}/>
          <Route path="/" exact component={Add_defect}/>
          <Router path="/Editdefect/:defectId" exact component={Editdefect}/>
          
         
          <Route path="/Addmodule" exact component={Addmodule}/>
          <Route path="/Viewmodule" exact component={Viewmodule}/>
          
          <Route path="/Add_Users" exact component={Add_Users}/>
          <Route path="/View_Users" exact component={View_Users}/>
         
          <Route path="/Table" exact component={Table}/>
         
         
        </Switch>
        </div>
      </Router>
     
    );
  }
}