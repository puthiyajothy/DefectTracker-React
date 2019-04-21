import React, { Component } from 'react'


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
render(){
    return(
<div className="card mb-3">
        <div className="card-header">
          <i className="fas fa-table" />
          Data Table Example</div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
              <thead>
                <tr>
                  <th htmlFor="control-label">Defect Id</th>
                  <th>defectId</th>
                  <th>module</th>
                  <th>description</th>
                  <th>defectType</th>
                  <th>severity</th>
                  <th>priority</th>
                  <th>assignPerson</th>
                  <th>status</th>
                  <th>enteredBy</th>
                  <th>enteredDate</th>
                  <th>fixedBy</th>
                  <th>availableIn</th>
                  <th>comments</th>
                </tr>
              </thead>
              <tbody id="addDefect">
              {this.state.AddDefect.map(e => (
                <tr>
                <td>{e.defectId}</td>
                <td>{e.module}</td>
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
            </tr>
        ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

        
    );
}
}

