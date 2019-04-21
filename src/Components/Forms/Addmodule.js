import React from 'react';


class Addmodule extends React.Component{

    constructor(props){
            super(props)
            this.state={
                project:[],
                AddDeveloper:[],
                post:[]
            };
    }
    state={

        modulename:null,
        developerId:null,
        projectid:null
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        });
    }
    handleSubmit=(e)=>{
    e.preventDefault();
    let d={
     
        modulename:this.state.modulename,
        addProject:{
            projectid:this.state.projectid
       },
       adddeveloper:{
        developerId:this.state.developerId
        }
    }
    console.log(d);
    // this.props.adddefect(this.state);
    fetch("http://localhost:8080/addmodule",{
			method:'POST',
			headers:{
				'Accept': 'application/json,text/plain,*/*',
				'Content-type':'application/json'

			},
			body:JSON.stringify(d)
		})


    };

    componentDidMount(){
        let url=`http://localhost:8080/getAllProjects`;
        console.log(url);
        fetch(url)
        .then(resp =>resp.json())
        .then(data =>{
            console.log(data)
    
            let project=data.map((post)=>{
                return(
                    <option value={post.id}>{post.projectName}</option>
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
                    <option value={post.id}>{post.developerName}</option>
                )
            })
            this.setState({developer:developer});
        }) 
    }
    render(){
        return(
    <div className="card-body">
      <div className="col-md-6">
        <div className="tile">
          <h1><font face="Lucida Handwriting "><b><font size={24} color="#16CFE1">A</font>dd Module!!</b></font></h1>
          <br />
          <div className="tile-body">
					<div class="container">
					<form onSubmit={this.handleSubmit}>
                    <div className="form-group">
						<label htmlFor="control-label">Module ID:</label>
						<input type="text" className="form-control" id="moduleId" placeholder="01" onChange={this.handleChange}/>
					</div>
                    <div className="form-group">
						<label htmlFor="control-label">Module Name:</label>
						<input type="text" className="form-control" id="modulename" placeholder="Module-01" onChange={this.handleChange}/>
					</div>
                    <div className="form-group">
						<label htmlFor="control-label">Developer  Name:</label> 
                        {/* <input type="text" className="form-control" id="userid" placeholder="001" onChange={this.handleChange}/> */}
                        <select id="developerName" className="form-control" onChange={this.handleChange}>
                                         {this.state.developer}
                                         </select>
					</div>
                    <div className="form-group">
						<label htmlFor="control-label">Project Id:</label>
                        {/* <input type="text" className="form-control" id="projectid" placeholder="00001" onChange={this.handleChange}/> */}

                        <select id="projectName" className="form-control" onChange={this.handleChange}>
                                         {this.state.project}
                                         </select>
					</div>
                    <div className="col-submit">
						<button className="sbtn btn-primary">Add Module</button>
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
export default Addmodule;