import React from 'react';

class Add_defect extends React.Component {

constructor(props){
	super(props)
	this.state={
		module:[],
		AddDeveloper:[],
		post:[]
	};
}

	state = {
		defecttype: null,
		defectdescription:null,
		module:null,
		severity: null,
		Piriority:null,
		status: null,
		assignedperson: null,
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


	// handleChange1 = (e)=>{
		//e.preventDefault();
		// this.setState({
			//  [e.target.id]:e.target.value
			// module:e.target.value
		// })

	// 	let id=e.target.value;
	
	// 	let url =`http://localhost:8080/getModulesById/${id}`;
	// 	console.log(url);
	// 	fetch(url)
	// .then(resp =>resp.json())
	// .then(data =>{
	// 	console.log(data)

	// 	let x=data.adddeveloper.map((post)=>{
	// 		return(
	// 			<option value={post.developerId}>{post.developerName}</option>
	// 		)
	// 	})
	// 	this.setState({x});
	// })

	// };

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		//  this.props.adddefect(this.state);
		fetch("http://localhost:8080/adddefect", {
			method: 'POST',
			headers: {
				'Accept': 'application/json,text/plain,*/*',
				'Content-type': 'application/json'

			},
			body: JSON.stringify(this.state)
		})


	};

	select(e){
		console.log(e)
	}
componentDidMount(){
	let url=`http://localhost:8080/getAllmodules`;
	console.log(url);
	fetch(url)
	.then(resp =>resp.json())
	.then(data =>{
		console.log(data)

		let module=data.map((post)=>{
			return(
				<option value={post.id} >{post.modulename}</option>
			)
		})
		this.setState({module:module});
	})

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
										{/* <select id="module" className="form-control" name="module" value={this.state.module} onChange={e => this.handleChange1(e)}> */}
										<select id="module" className="form-control" onChange={this.handleChange}>
										 {this.state.module}
										{/* {fetch('http://localhost:8080/getAllmodules')
      									.then(data => data.json())
      									.then(data =>{
											console.log(data)
											 data.map((post)=>{ 
											return(
												<option>{post.modulename}</option>
										
											)	
										  }) */}
											
										   
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
						{/* <select id="module" className="form-control" name="module" value={this.state.module} onChange={e => this.handleChange1(e)}>
										 {this.state.x} */}
							 <select id="assignPerson" className="form-control" onChange={this.handleChange}>
												<option selected>Select Person</option>
												<option>Saajitha</option>
												<option>Kishan</option>
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
