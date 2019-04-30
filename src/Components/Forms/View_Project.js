import React, { Component } from 'react'
import AddProject from "./Add_Project";

export class View_Project extends Component {
    state = {
        AddProject : [],
    };
    componentDidMount(){
        this.getPost();
       
    }

    getPost() {
        fetch ("http://localhost:8080/getAllProjects")
        .then((res) => (res.json()))
        .then((data) => {
            this.setState ({AddProject:data});
        })
    }

    delete(id){
        console.log(id)
        fetch(`http://localhost:8080/deleteproject/${id}`,{
            method:"DELETE",
            headers : {
                'Accept' : 'Application/json,text/plain,*/*',
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(this.state)
        })
        .then(()=>{
            fetch ("http://localhost:8080/getAllProjects")
            .then((res) => (res.json()))
            .then((data) => {
                this.setState ({AddProject:data});
            })
        })
    }

    handleEdit =projectId =>{
        this.props.history.push(`Editproject/${projectId}`)
        console.log(projectId);

    };
    handleUpdate = projectId=>{
        console.log(projectId);
        const AddProjectUpdate={
        projectId :this.state.projectId,
        projectName: this.state.projectName
        }

    AddProject.updateproject(AddProjectUpdate);
    console.log(AddProjectUpdate);
};
    
    render() {
        return (
            <div className="card mb-3">

                <div className="card-header">
                    <h1><font face="Lucida Handwriting "><b><font size={15} color="#16CFE1">M</font>odules</b></font></h1>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th>Project Id</th>
                                    <th>Project Name</th>
                                    <th>Delete</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody id="Add_project">
                            {this.state.AddProject.map(e => (
                                <tr>
                                    <td>{e.projectId}</td>
                                    <td>{e.projectName}</td>
                                    <td><button onClick={this.delete.bind(this,e.projectId)}>Delete</button></td>
                                    <td><button onClick={()=>this.handleEdit(e.projectId)}>Update</button></td>
                                </tr>
                            ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default View_Project
