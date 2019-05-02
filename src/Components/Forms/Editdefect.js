import React from 'react';

class Editdefect extends React.Component {

constructor(props){
	super(props)
	this.state={
		module1:[],
		AddDeveloper:[],
		dev:[]

		
	};
}
	state = {
		defecttype: "",
		defectdescription:"",
		module:"",
		severity:"",
		Piriority:"",
		status:"",
		assignPerson:"",
		enterddate:"",
		enteredby:"",
		fixeddate:"",
		fixedby:"",
		availablein:"",
		comments:"",
		
}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleChange1 = (e) => {
		this.setState({
			module: e.target.value
		});
		console.log( e.target.value)
		let url=`http://localhost:8080/getModulesById/${e.target.value}`;
	console.log(url);
	fetch(url)
	.then(resp =>resp.json())
	.then(data =>{
		console.log(data)
		console.log(data.adddeveloper.developerName)
		this.setState({dev:data.adddeveloper});
		console.log(this.state.dev);
	})
	};
	
	handleChange2=(e)=>{
		this.setState({
			assignPerson: e.target.value
		});
		console.log(e.target.value)

	}
	

componentDidMount(){
	this.select()
	let url=`http://localhost:8080/getAllmodules`;
	console.log(url);
	fetch(url)
	.then(resp =>resp.json())
	.then(data =>{
		console.log(data)

		let module1=data.map((post)=>{
			return(
				<option value={post.moduleId} >{post.moduleId}</option>
			)
		})
		this.setState({module1:module1});
	})

}


select(id){
	console.log(id)	

}


FetchdefectById() {
    fetch(
      `http://localhost:8080/getDefect/` +
        this.props.match.params.defectId
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
            defectId: data.defectId,
    		module:data.module,
    		description:data.description,
    		defectType: data.saajitha,
    		severity:data.severity,
    		priority:data.priority,
    		assignPerson:data.assignPerson,
    		status:data.status,
    		enteredBy:data.enteredBy,
    		enteredDate:data.enteredDate,
    		fixedBy:data.fixedBy,
    		fixedDate:data.fixedDate,
    		availableIn:data.availableIn,
    		comments:data.comments,
           isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.FetchdefectById(this.defectId);
  }

  handleUpdate = e => {
	e.preventDefault();
  // console.log(subClassId);
  const AddDefectUpdate = {
	defectId:this.state.defectId,
	module:this.state.module,
	description:this.state.description,
	defectType:this.state.defectType,
	severity:this.state.severity,
	priority:this.state.priority,
	assignPerson:this.state.assignPerson,
	status:this.state.status,
	enteredBy:this.state.enteredBy,
	enteredDate:this.state.enteredDate,
	fixedBy:this.state.fixedBy,
	fixedDate:this.state.fixedDate,
	availableIn:this.state.availableIn,
	comments:this.state.comments,
   
  };
  this.updatedefect(AddDefectUpdate);
  console.log(AddDefectUpdate);
};

	render() {
		return (
			<div className="card-body">
				<div className="col-md-12">
					<div className="tile">
						<h1><font face="Lucida Handwriting "><b><font size={24} color="#16CFE1">D</font>efect Tracker!!</b></font></h1>
						
						<div className="tile-body">
							<div class="container">
								<form onSubmit={this.handleSubmit}>
							
								<div className="form-row">
									<div className="form-group">	
										<label htmlFor="control-label">Defect Id:</label>
										<input type="text" className="form-control" id="defectId" value={this.state.defectId}  onChange={e=>this.handleChange(e)}  placeholder="001" onChange={this.handleChange} />
									</div>

									
								<div className="col">
								<label className="control-label"> Defect Type</label>
								<select id="defectType" className="form-control" value={this.state.defectType}
											onChange={e=>this.handleChange(e)}>
											<option>Select </option>
												<option>UI</option>
												<option>Functionality</option>
												<option>Enhancement</option>
												<option>Performance</option>
											</select>
										</div>
										
									</div>

									
									<div className="form-row">
									<div className="col">
										<label htmlFor="control-label">Defect Description:</label>
										<textarea type="text" className="form-control" id="description" placeholder="Defect Description" value={this.state.description} onChange={this.handleChange} />
									</div>
									</div>

									<div className="form-row">
									<div className="form-group">
										<label htmlFor="control-label">Module </label>
										<select id="module" className="form-control" value={this.state.module} onChange={(e) => this.handleChange1(e)}>
										 {this.state.module1}
											</select>
											</div>
											<div className="col">
												<label className="control-label">Severity:</label>
												<select id="severity" className="form-control" value={this.state.severity} onChange={(e)=>this.handleChange(e)}>
													<option selected>Select </option>
													<option>High</option>
													<option>Medium</option>
													<option>Law</option>
												</select>
											</div>
										<div className="col">
											<label className="control-label">Piriority:</label>
											<select id="priority" className="form-control" value={this.state.priority} onChange={(e)=>this.handleChange(e)}>
												<option selected>Select</option>
												<option>High</option>
												<option>Medium</option>
												<option>Law</option>
											</select>
										</div>
										</div>

									
									<div className="form-row">
									<div className="form-group">
									<label className="control-label">Status</label>
											<select id="status" className="form-control" value={this.state.status} onChange={(e)=>this.handleChange(e)}>
												<option selected>Select Your Status</option>
												<option>New</option>
												<option>Open</option>
												<option>Fixed</option>
												<option>Closed</option>
												<option>Reopened</option>
												<option>Defered</option>
											</select>
										</div>
							
							<div className = "col">
										<label htmlFor="control-label">Assigned Person</label>
						<select id="assignPerson" className="form-control" name="assignPerson" value={this.state.assignPerson} onChange={(e)=> this.handleChange2(e)}>
						<option >hfdfshj</option>
										 <option value={this.state.dev.developerName}>{this.state.dev.developerName}</option>
				
												</select>
								
									</div>
									</div>

						<div className="form-row">									
						<div className="form-group">
						<label htmlFor="control-label">Entered Date:</label>
						<input type="date" className="form-control" id="enteredDate" value={this.state.enteredDate} onChange={(e)=>this.handleChange(e)}/>
									</div>
									
						<div className="col">
						<label htmlFor="control-label">Entered By:</label>
						<input type="text" className="form-control" id="enteredBy" placeholder="Enterd by" value={this.state.enteredBy} onChange={(e)=>this.handleChange(e)} />
										
						</div>
									</div>
								
								<div className="form-row">
								<div className="control-label">
							<label htmlFor="fixeddate">Fixed Date:</label>
							<input type="date" className="form-control" id="fixedDate" value={this.state.fixedDate} onChange={(e)=>this.handleChange(e)}/>
										</div>
										<div className="col">
							<label htmlFor="control-label">Fixed By</label>
						<input type="text" className="form-control" id="fixedBy" placeholder="fixedby" value={this.state.fixedBy} onChange={(e)=>this.handleChange(e)}/>
							</div>
							</div>

							<div className="form-group">
						<label className="control-label">availablein</label>
						<input type="text" className="form-control" id="availableIn" placeholder="availablein" value={this.state.availableIn} onChange={(e)=>this.handleChange(e)}
											/>
									</div>
									<div className="form-group">
										<label htmlFor="control-label">Comments:</label>
										<textarea type="text" className="form-control" id="comments" placeholder="comments" value={this.state.comments} onChange={(e)=>this.handleChange(e)} />
									</div>

									<div className="col-submit">
										<button className="submitbtn">Add Defect</button>
									</div>
								</form>

							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Editdefect;
