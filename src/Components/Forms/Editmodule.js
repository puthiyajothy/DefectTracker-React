import React from "react"


export default class Editmodule extends React.Component{
  // constructor(props){
  //   super(props)
  //   this.state={
  //       project:[],
  //       AddDeveloper:[],
  //   }
  // }
    state={
        moduleId:"",
        modulename:"",
        developerName:"",
        projectId:"",
        projectName:'',
        project:[],
        AddDeveloper:[],

        }
        
        handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        });
        }
        
        componentDidMount(){
          let url=`http://localhost:8080/getAllProjects`;
          console.log(url);
          fetch(url)
          .then(resp =>resp.json())
          .then(data =>{
              console.log(data)
      
              let project=data.map((post)=>{
                  return(
                      <option value={post.projectId}>{post.projectId}</option>
                  )
              })
              this.setState({project:project});
          }) 
  
  
          let ur=`http://localhost:8080/getAlldevelopers`;
          console.log(ur);
          fetch(ur)
          .then(resp =>resp.json())
          .then(data =>{
              console.log(data)
      
              let developer=data.map((post)=>{
                  return(
                      <option value={post.developerId}>{post.developerId}</option>
                  )
              })
              this.setState({developer:developer});
          }) 
      }


        FetchprojectById() {
            fetch(
              `http://localhost:8080/getModulesById/` +
                this.props.match.params.moduleId
            )
              .then(response => response.json())
              .then(data =>
                this.setState({
                    moduleId: data.moduleId,
                    modulename:data.modulename,
                    projectId:data.addProject.projectId,
                    projectName:data.addProject.projectName,
                    developerId:data.adddeveloper.developerId,
                    developerName:data.adddeveloper.developerName,
                   isLoading: false
                })
                // console.log(data.adddeveloper.developerName)
              )
              .catch(error => this.setState({ error, isLoading: false }));
          }
        
          componentDidMount() {
            this.FetchprojectById(this.moduleId);
          }
          
        
          updateproject(data) {
            return fetch(
              "http://localhost:8080/updatemodule",
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
        
          handleUpdate =e=>{
            e.preventDefault();
            console.log(this.state.value);
            const AddModuleUpdate={
            moduleId :this.state.moduleId,
            modulename:this.state.modulename,
            addProject: {
              projectId:this.state.projectId,
          },
          adddeveloper:{
            developerName:this.state.developerName,
          }
        }
            this.updateModule(AddModuleUpdate);
            console.log(AddModuleUpdate);
    };
   

render(){
    return(
        <div className="card-body">
        <div className="tile">
        	
        <div className="form-row">
        <div className="col-xs-3">
        </div>
        </div>
          <div className="tile-body">
			<div className="container">
            <div className="tile">
            <h1><font face="Lucida Handwriting ">update Module</font></h1>

			<form onSubmit={this.handleSubmit}>
                    	
				<div className="form-row">
                    <div className="col-xs-3">
						<label className="control-label">Module ID:</label>
						<input type="text" className="form-control" id="moduleId"   value={this.state.moduleId}  onChange={e=>this.handleChange(e)}/>
					</div> 
                    </div>
                   	
				<div className="form-row">
                    <div className="col-xs-3">
						<label htmlFor="control-label">Module Name:</label>
						<input type="text" className="form-control" id="modulename"  value={this.state.modulename}  onChange={e=>this.handleChange(e)}/>
					</div>
                </div>   
             

                	
				<div className="form-row">
                    <div className="col-xs-3">
						<label htmlFor="control-label">Developer  Name:</label> 
                        <select id="developerId" className="form-control"   onChange={e=>this.handleChange(e)}>
                        <option value={this.state.developerName} >{this.state.developerName}</option>
                                       
                        </select>
					</div>
                    </div>
                    	
				<div className="form-row">
                        <div className="col-xs-3">
						<label htmlFor="control-label">Project Id:</label>
                        <select id="projectId" className="form-control"  value={this.state.projectId}  onChange={e=>this.handleChange(e)}>
                        <option value={this.state.projectId}>{this.state.projectId}</option>
                                        
                        </select>
					</div>
                </div>
            <br/>
                    <div className="col-submit">
						<button className="btn btn-primary" onClick={e=>this.handleUpdate(e)}>Update Module</button>
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
