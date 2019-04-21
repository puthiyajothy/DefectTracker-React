import React, { Component } from 'react'

export class View_developer extends Component {
    state = {
        AddDeveloper : [],
    };
    componentDidMount(){
        this.getPost();
       
    }

    getPost() {
        fetch ("http://localhost:8080/getAlldevelopers")
        .then((res) => (res.json()))
        .then((data) => {
            this.setState ({AddDeveloper:data});
        })
    }
    render() {
        return (
            <div className="card mb-3">

                <div className="card-header">
                    <h1><font face="Lucida Handwriting "><b><font size={15} color="#16CFE1">D</font>evelopers</b></font></h1>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th>DeveloperId</th>
                                    <th>DeveloperName</th>                              
                            </tr>
                            </thead>
                            <tbody id="Add_project">
                            {this.state.AddDeveloper.map(e => (
                                <tr>
                                    <td>{e.developerId}</td>
                                    <td>{e.developerName}</td>
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

export default View_developer;
