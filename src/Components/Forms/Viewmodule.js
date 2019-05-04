import React from 'react'
import AddModule from "./Addmodule";

export default class Viewmodule extends React.Component{
    state={
        AddModule:[],
        AddProject:[],
        AddDeveloper:[]


    };
    AddProject={
        projectName:""
    }
    adddeveloper={
        developerName:""

    }
  
    componentDidMount(){
        this.getPost();

    }

    getPost(){
        fetch("http://localhost:8080/getAllmodules")
        .then((res)=> (res.json()))
        .then((data)=>{
            // console.log(data);
            this.setState({ AddModule: data});
        })
        
    }

    delete(id){
        console.log(id)
        fetch(`http://localhost:8080/deleteModule/${id}`,{
            method:"DELETE",
            headers : {
                'Accept' : 'Application/json,text/plain,*/*',
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(this.state)
        })
        .then(()=>{
            fetch ("http://localhost:8080/addmodule")
            .then((res) => (res.json()))
            .then((data) => {
                this.setState ({AddModule:data});
            })
        })
    }



      handleEdit =moduleId =>{
        this.props.history.push(`Editmodule/${moduleId}`)
        console.log(moduleId);

    };

    handleUpdate = moduleId=>{
        console.log(moduleId);
        const AddModuleUpdate={
        moduleId :this.state.moduleId,
        modulename:this.state.modulename,
        projectName:this.state.projectName,
        developerName:this.state.developerName,
        }

        AddModule.updateModule(AddModuleUpdate);
        console.log(AddModuleUpdate);
};

    render(){
        return(
        <div className="container">
               <div className="content-wrapper">
            <table className="table table-hover">
              <thead>
               <tr>
                  <th>ModuleId</th>
                  <th>ModuleName</th>
                  <th>ProjectID</th>
                  <th>DeveloperName</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>          
                </thead>
                <tbody id="addmodules">
                    {this.state.AddModule.map(e => (
                    <tr>
                        <td>{e.moduleId}</td>
                        <td>{e.modulename}</td>
                        <td>{e.addProject.projectName}</td>
                        <td>{e.adddeveloper.developerName}</td>
                        <td><button className="btn btn-danger" onClick={this.delete.bind(this,e.moduleId)}>Delete</button></td>
                        <td><button className="btn btn-primary" onClick={()=>this.handleEdit(e.moduleId)}>Update</button></td>
                       
                    </tr>
                    ))}      
                </tbody>
            </table>
          </div>



        </div>
       
    

    

        );
    }

}

