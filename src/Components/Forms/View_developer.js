import React, { Component } from 'react'
import AddDeveloper from "./Add_developer";

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

    delete(id){
        console.log(id)
        fetch(`http://localhost:8080/deleteById/${id}`,{
            method:"DELETE",
            headers : {
                'Accept' : 'Application/json,text/plain,*/*',
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(this.state)
        })
        .then(()=>{
            fetch ("http://localhost:8080/getAlldevelopers")
            .then((res) => (res.json()))
            .then((data) => {
                this.setState ({AddDeveloper:data});
            })
        })
    }

    handleEdit =developerId =>{
        this.props.history.push(`Editdeveloper/${developerId}`)
        console.log(developerId);

    };
    handleUpdate = developerId=>{
        console.log(developerId);
        const AddDeveloperUpdate={
        developerId :this.state.developerId,
        developerName: this.state.developerName
        }

    AddDeveloper.updateproject(AddDeveloperUpdate);
    console.log(AddDeveloperUpdate);
};
    

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
                                    <th>Delete</th>  
                                    <th>Update</th>                           
                            </tr>
                            </thead>
                            <tbody id="Add_developer">
                            {this.state.AddDeveloper.map(e => (
                                <tr>
                                    <td>{e.developerId}</td>
                                    <td>{e.developerName}</td>
                                    <td><button onClick={this.delete.bind(this,e.developerId)}>Delete</button></td>
                                    <td><button onClick={()=>this.handleEdit(e.developerId)} >Update</button></td>
                                   
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
