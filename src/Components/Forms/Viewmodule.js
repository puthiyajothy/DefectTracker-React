import React from 'react';

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
                        <td><button className="btn btn-danger">Delete</button></td>
                        <td><button className="btn btn-primary">Update</button></td>
                       
                    </tr>
                    ))}      
                </tbody>
            </table>
          </div>



        </div>
       
    

    

        );
    }

}

