import React from 'react';

class Add_defect extends React.Component {

constructor(props){
	super(props)
	this.state={
		module1:[],
		AddDeveloper:[],
		dev:[]

		
	};
}
	state = {
		defecttype: null,
		defectdescription:null,
		module:null,
		severity: null,
		Piriority:null,
		status: null,
		assignPerson: null,
		enterddate: null,
		enteredby: null,
		fixeddate: null,
		fixedby: null,
		availablein: null,
		comments: null,
		
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
	handleSubmit = (e) => {
		e.preventDefault();
		let defect={
		"module": this.state.module,
        "description":this.state.description,
        "defectType": this.state.defectType,
		"severity":this.state.severity,
        "priority":this.state.priority,
        "assignPerson":this.state.assignPerson,
        "status":this.state.status,
        "enteredBy":this.state.enteredBy,
        "enteredDate":this.state.enteredDate,
        "fixedBy": this.state.fixedBy,
        "fixedDate": this.state.fixedDate,
        "availableIn":this.state.availableIn,
        "comments": this.state.comments
      
		}
		console.log(defect);
		//  this.props.adddefect(this.state);
		fetch("http://localhost:8080/adddefect", {
			method: 'POST',
			headers: {
				'Accept': 'application/json,text/plain,*/*',
				'Content-type': 'application/json'

			},
			body: JSON.stringify(defect)
		})


	};

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
										<input type="text" className="form-control" id="defectId" placeholder="001" onChange={this.handleChange} />
									</div>

									
										<div className="col">
											<label className="control-label"> Defect Type</label>
											<select id="defectType" className="form-control" 
											onChange={this.handleChange}>
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
										<textarea type="text" className="form-control" id="description" placeholder="Defect Description" onChange={this.handleChange} />
									</div>
									</div>

									<div className="form-row">
									<div className="form-group">
										<label htmlFor="control-label">Module </label>
										<select id="module" className="form-control" onChange={(e) => this.handleChange1(e)}>
										 {this.state.module1}
											</select>
											</div>
											<div className="col">
												<label className="control-label">Severity:</label>
												<select id="severity" className="form-control" onChange={this.handleChange}>
													<option selected>Select </option>
													<option>High</option>
													<option>Medium</option>
													<option>Law</option>
												</select>
											</div>
										<div className="col">
											<label className="control-label">Piriority:</label>
											<select id="priority" className="form-control" onChange={this.handleChange}>
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
											<select id="status" className="form-control" onChange={this.handleChange}>
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
						<select id="assignPerson" className="form-control" name="assignPerson" value={this.state.assignPerson} onChange={ this.handleChange2}>
						<option >hfdfshj</option>
										 <option value={this.state.dev.developerName}>{this.state.dev.developerName}</option>
				
												</select>
								
									</div>
									</div>

								<div className="form-row">									
									<div className="form-group">
									<label htmlFor="control-label">Entered Date:</label>
									<input
												type="date"
												className="form-control"
												id="enteredDate"
												onChange={this.handleChange}
											/>
									</div>
									
										<div className="col">
										<label htmlFor="control-label">Entered By:</label>
										<input type="text" className="form-control" id="enteredBy" placeholder="Enterd by" onChange={this.handleChange} />
										
										</div>
									</div>
								
								<div className="form-row">
								<div className="control-label">
							<label htmlFor="fixeddate">Fixed Date:</label>
							<input type="date" className="form-control" id="fixedDate" onChange={this.handleChange}/>
										</div>
										<div className="col">
							<label htmlFor="control-label">Fixed By</label>
										<input
											type="text"
											className="form-control"
											id="fixedBy"
											placeholder="fixedby"
											onChange={this.handleChange}
										/>
									</div>
										</div>

										<div className="form-group">
											<label className="control-label">availablein</label>
											<input
												type="text"
												className="form-control"
												id="availableIn"
												placeholder="availablein"
												onChange={this.handleChange}
											/>
									</div>
									<div className="form-group">
										<label htmlFor="control-label">Comments:</label>
										<textarea type="text" className="form-control" id="comments" placeholder="comments" onChange={this.handleChange} />
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

export default Add_defect;
