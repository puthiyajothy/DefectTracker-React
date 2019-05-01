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

     <div className="card mb-3">
    
        <div className="card-header">
        <h1><font face="Lucida Handwriting "><b><font size={15} color="#16CFE1">M</font>odules</b></font></h1>
          </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
              <thead>
               <tr>
                  <th>Module Id</th>
                  <th>Module Name</th>
                  <th>Project ID</th>
                  <th>Developer Name</th>
                  <th>Delete</th>
                </tr>          
                </thead>
                <tbody id="addmodules">
                    {this.state.AddModule.map(e => (
                    <tr>
                        <td>{e.moduleId}</td>
                        <td>{e.modulename}</td>
                        <td>{e.addProject.projectName}</td>
                        <td>{e.adddeveloper.developerName}</td>
                        <td><button>Delete</button></td>
                       
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

