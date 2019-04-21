import React, { Component } from 'react'

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
                                </tr>
                            </thead>
                            <tbody id="Add_project">
                            {this.state.AddProject.map(e => (
                                <tr>
                                    <td>{e.projectId}</td>
                                    <td>{e.projectName}</td>
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
