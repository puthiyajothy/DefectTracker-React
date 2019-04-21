import React from 'react';

export default class Viewmodule extends React.Component{
    state={
        AddModule:[],
    };

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
                </tr>          
                </thead>
                <tbody id="addmodules">
                    {this.state.AddModule.map(e => (
                    <tr>
                        <td>{e.moduleId}</td>
                        <td>{e.modulename}</td>
                        <td>{e.projectName}</td>
                        <td>{e.developerName}</td>
                       
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

