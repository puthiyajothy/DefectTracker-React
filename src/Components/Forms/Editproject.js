import React, { Component } from 'react'
import AddProject from "./Add_Project";



 class Editproject extends Component {
    state = {
        projectId:"",
        projectName:""
}
handleChange = (e) => {
    this.setState({
        [e.target.id]:e.target.value
    });
};
// handleSubmit =(e) => {
//     e.preventDefault();
//     console.log(this.state);
//     fetch("http://localhost:8080/getAllProjects",{
//     method:"POST",
//     headers : {
//         'Accept' : 'Application/json,text/plain,*/*',
//         'Content-type' : 'application/json'
//     },
//     body : JSON.stringify(this.state)
// })
// };
FetchprojectById() {
    fetch(
      `http://localhost:8080/findbyid/` +
        this.props.match.params.projectId
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
            projectId: data.projectId,
            projectName: data.projectName,
           isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.FetchprojectById(this.projectId);
  }

  updateproject(data) {
    return fetch(
      "http://localhost:8080/updateprojects",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    )
      .then(res => {
        return res;
      })
      .catch(err => err);
  }

  handleUpdate = e => {
      e.preventDefault();
    // console.log(subClassId);
    const AddProjectUpdate = {
        projectId: this.state.projectId,
        projectName: this.state.projectName,
     
    };
    this.updateproject(AddProjectUpdate);
    console.log(AddProjectUpdate);
  };


    render() {
        return (
            <div className="card-body">
                <div className="col-md-3">
                    <div className="tile">
                        <h1><font face="Lucida Handwriting ">Projects</font></h1>
                        <br />
                        <div className="tile-body">
                            <div className="container">
                                <form onSubmit={this.handleSubmit}>

                                <div className="form-group">
                                    <div className="col-xs-3">
                                    <label className="control-label">Project Id:</label>
                                        <input type="text" className="form-control" id="projectId" value={this.state.projectId}  onChange={e=>this.handleChange(e)} />
                                    
                                    </div>
                                        </div>
                                    <div className="form-group"> 
                                    <div className="col-xs-3">
                                    <label className="control-label">Project Name:</label>
                                        <input type="text" className="form-control" id="projectName" value={this.state.projectName}  onChange={e=>this.handleChange(e)} />
                                        <b></b>
                                        <br></br>
                                        <div className="col-submit">
									                	<button className="btn btn-primary" onClick={e=>this.handleUpdate(e)}>Add Project</button>
									                   </div>

                                    </div>
                                        </div>

                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Editproject;
