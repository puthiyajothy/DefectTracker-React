import React, { Component } from 'react'
import AddDefect from "./Add_defect";


export default class View_defect extends Component {

  state = {
    AddDefect : [],
};
componentDidMount(){
    this.getPost();
   
}

getPost() {
    fetch ("http://localhost:8080/getAllDefects")
    .then((res) => (res.json()))
    .then((data) => {
        this.setState ({AddDefect:data});
    })
}

delete(id){
  console.log(id)
  fetch(`http://localhost:8080/deleteDefect/${id}`,{
      method:"DELETE",
      headers : {
          'Accept' : 'Application/json,text/plain,*/*',
          'Content-type' : 'application/json'
      },
      body : JSON.stringify(this.state)
  })
  .then(()=>{
      fetch ("http://localhost:8080/getAllDefects")
      .then((res) => (res.json()))
      .then((data) => {
          this.setState ({AddDefect:data});
      })
  })
}

handleEdit =defectId =>{
  this.props.history.push(`Editdefect/${defectId}`)
 console.log(defectId);

};

// handleUpdate = e => {
// 	e.preventDefault();
//   // console.log(subClassId);
//   const AddDefectUpdate = {
// 	defectId:this.state.defectId,
// 	module:this.state.module,
// 	description:this.state.description,
// 	defectType:this.state.defectType,
// 	severity:this.state.severity,
// 	priority:this.state.priority,
// 	assignPerson:this.state.assignPerson,
// 	status:this.state.status,
// 	enteredBy:this.state.enteredBy,
// 	enteredDate:this.state.enteredDate,
// 	fixedBy:this.state.fixedBy,
// 	fixedDate:this.state.fixedDate,
// 	availableIn:this.state.availableIn,
// 	comments:this.state.comments,
   
//   };
//   AddDefect.updateDefect(AddDefectUpdate);
//   console.log(AddDefectUpdate);
// };

render(){
    return(
      <div className="container">
      <div className="content-wrapper">
        <table className="table table-hover">
              <thead>
                <tr>
                  <th>DefectId</th>
                  <th>Module</th>
                  <th>Description</th>
                  <th>DefectType</th>
                  <th>Severity</th>
                  <th>Priority</th>
                  <th>AssignPerson</th>
                  <th>Status</th>
                  <th>EnteredBy</th>
                  <th>EnteredDate</th>
                  <th>FixedBy</th>
                  <th>FixedDate</th>
                  <th>AvailableIn</th>
                  <th>Comments</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody id="addDefect">
              {this.state.AddDefect.map(e => (
                <tr>
                <td>{e.defectId}</td>
                <td>{e.addModule.moduleId}</td>
                <td>{e.description}</td>
                <td>{e.defectType}</td>
                <td>{e.severity}</td>
                <td>{e.priority}</td>
                <td>{e.assignPerson}</td>
                <td>{e.status}</td>
                <td>{e.enteredBy}</td>
                <td>{e.enteredDate}</td>
                <td>{e.fixedBy}</td>
                <td>{e.fixedDate}</td>
                <td>{e.availableIn}</td>
                <td>{e.comments}</td>
                <td><button className="btn btn-danger" onClick={this.delete.bind(this,e.defectId)} >Delete</button></td>
                <td><button className="btn btn-primary" onClick={()=>this.handleEdit(e.defectId)}>Update</button></td>
                
             
            </tr>
        ))}
              </tbody>
            </table>
          </div>
       

      
      
      </div>
      
        
    );
}
}

