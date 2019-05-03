import React from 'react';


class Addmodule extends React.Component{

    constructor(props){
            super(props)
            this.state={
                project:[],
                AddDeveloper:[],
                post:[]
            }
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
     
    //     modulename:this.state.modulename,
    //     addProject:{
    //         projectid:this.state.projectid
    //    },
    //    adddeveloper:{
    //     developerId:this.state.developerId
    //     }
    
        "modulename":this.state.modulename,
        "addProject": {
            "projectId":this.state.projectId,
           
        },
        "adddeveloper": {
            "developerId":this.state.developerId,
           
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
                    <option value={post.projectId}>{post.projectName}</option>
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
                    <option value={post.developerId}>{post.developerName}</option>
                )
            })
            this.setState({developer:developer});
        }) 
    }
    render(){
        return(
    <div className="card-body">
        <div className="tile">
        	
        <div className="form-row">
        <div className="col-xs-3">
          {/* <h1><font face="Lucida Handwriting "><font size={6} color="#16CFE1">A</font>ddNewModule</font></h1> */}
        </div>
        </div>
          <div className="tile-body">
			<div class="container">
			<form onSubmit={this.handleSubmit}>
                    	
				<div className="form-row">
                    <div className="col-xs-3">
						<label htmlFor="control-label">Module ID:</label>
						<input type="text" className="form-control" id="moduleId" placeholder="01" onChange={this.handleChange}/>
					</div> 
                    </div>
                   	
				<div className="form-row">
                    <div className="col-xs-3">
						<label htmlFor="control-label">Module Name:</label>
						<input type="text" className="form-control" id="modulename" placeholder="Enter Module Name" onChange={this.handleChange}/>
					</div>
                </div>   
             

                	
				<div className="form-row">
                    <div className="col-xs-3">
						<label htmlFor="control-label">Developer  Name:</label> 
                        <select id="developerId" className="form-control"  onChange={this.handleChange}>
                        <option >Select Developer</option>
                                         {this.state.developer}
                        </select>
					</div>
                    </div>
                    	
				<div className="form-row">
                        <div className="col-xs-3">
						<label htmlFor="control-label">Project Id:</label>
                        <select id="projectId" className="form-control"  onChange={this.handleChange}>
                        <option>Select Project</option>
                                         {this.state.project}
                        </select>
					</div>
                </div>
            <br/>
                    <div className="col-submit">
						<button className="btn btn-primary">Add Module</button>
					</div>

                    </form>	
            </div>
        </div>
    </div>
</div>



        )
    }
}
export default Addmodule;