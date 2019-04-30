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

export default class Roting extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <div id="wrapper">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Add_Project} />
          <Route
            path="/Editproject/:projectId"
            exact
            component={Editproject}
          />

    <Route path="/Add_defect" exact render={ () => {
          return (
            <div className="container">
            <br/>
            <Add_defect/></div>);} } />

            <Route path="/Addmodule" exact render={()=>{
       return(
        <div className="container">
        <Addmodule/></div> ); }}/>

  <Route path="/View_defect" exact render={()=>{
       return(
        <div className="container">
        <View_defect/></div> ); }}/>


        <Route path="/Viewmodule" exact render={()=>{
     return(
      <div className="container"> 
        <br/>
       <Viewmodule/></div>);}}/>

       <Route path="/Add_Users" exact render={()=>{
     return(
      <div className="container"> 
        <br/>
       <Add_Users/></div>);}}/>

       <Route path="/View_Users" exact render={()=>{
     return(
      <div className="container"> 
        <br/>
       <View_Users/></div>);}}/>

       <Route path="/Add_Project" exact render={()=>{
     return(
      <div className="container"> 
        <br/>
       <Add_Project/></div>);}}/>
       
       <Route path = "/View_Project" exact component={View_Project} />
{/*        
      //  render = {() => {
      //    return(
      //      <div className="container">
      //      <br/>
      //      <View_Project/></div> ); }}/> */}

           <Route path = "/Add_developer" exact render = {() => {
         return(
           <div className="container">
           <br/>
           <Add_developer/></div> ); }}/>


           <Route path="/View_developer" exact render={() => {
         return (
            <div className="container">
            <br/>
            <View_developer/> </div>);}} />
      
        </Switch>
        </div>
      </Router>
      
        
    );
  }
}