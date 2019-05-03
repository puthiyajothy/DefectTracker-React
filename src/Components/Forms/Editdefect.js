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
  this.updateDefect(AddDefectUpdate);
  console.log(AddDefectUpdate);
};

	render() {
		return (
			<div className="card-body">
				<div className="col-md-12">
					<div className="tile">
						<h1><font face="Lucida Handwriting ">efect Tracker</font></h1>
						
						<div className="tile-body">
							<div class="container">
								<form onSubmit={this.handleSubmit}>
							
								<div className="form-row">
									<div className="col-xs-3">	
										<label className="control-label">Defect Id:</label>
										<input type="text" className="form-control" id="defectId" value={this.state.defectId}  onChange={e=>this.handleChange(e)}/>
									</div>

									<div className="form-row">
								<div className="col-xs-3">
								<label className="control-label"> Defect Type</label>
								<select id="defectType" className="form-control" value={this.state.defectType}
											onChange={e=>this.handleChange(e)}>
											
											</select>
										</div>
										</div>
									</div>

									
									<div className="form-row">
									<div className="col-xs-3">
										<label htmlFor="control-label">Defect Description:</label>
										<textarea type="text" className="form-control" id="description"  value={this.state.description} onChange={e=>this.handleChange(e)} />
									</div>
									</div>

									<div className="form-row">
									<div className="col-xs-3">
										<label htmlFor="control-label">Module </label>
										<select id="module" className="form-control" value={this.state.module} onChange={e => this.handleChange1(e)}>
										 {this.state.module1}
											</select>
											</div>

											<div className="form-row">
											<div className="col-xs-3">
												<label className="control-label">Severity:</label>
												<select id="severity" className="form-control" value={this.state.severity} onChange={e=>this.handleChange(e)}>
												
												</select>
											</div>
											</div>

											<div className="form-row">
										<div className="col-xs-3">
											<label className="control-label">Piriority:</label>
											<select id="priority" className="form-control" value={this.state.priority} onChange={e=>this.handleChange(e)}>
							
											</select>
										</div>
										</div>
										</div>

									
									<div className="form-row">
									<div className="col-xs-3">
									<label className="control-label">Status</label>
											<select id="status" className="form-control" value={this.state.status} onChange={e=>this.handleChange(e)}>						
											</select>
										</div>
							
							
						<div className="form-row">
							<div className = "col-xs-3">
										<label className="control-label">Assigned Person</label>
						<select id="assignPerson" className="form-control" name="assignPerson" value={this.state.assignPerson} onChange={e=> this.handleChange2(e)}>
						<option value={this.state.dev.developerName}>{this.state.dev.developerName}</option>
				
							</select>
								
									</div>
									</div>
									</div>
						<div className="form-row">									
						<div className="form-group">
						<label htmlFor="control-label">Entered Date:</label>
						<input type="date" className="form-control" id="enteredDate" value={this.state.enteredDate} onChange={e=>this.handleChange(e)}/>
									</div>
									
						<div className="col">
						<label htmlFor="control-label">Entered By:</label>
						<input type="text" className="form-control" id="enteredBy"  value={this.state.enteredBy} onChange={e=>this.handleChange(e)} />
										
						</div>
									</div>
								
								<div className="form-row">
								<div className="control-label">
							<label className="fixeddate">Fixed Date:</label>
							<input type="date" className="form-control" id="fixedDate" value={this.state.fixedDate} onChange={e=>this.handleChange(e)}/>
										</div>

											
								<div className="form-row">
										<div className="col">
							<label htmlFor="control-label">Fixed By</label>
						<input type="text" className="form-control" id="fixedBy"  value={this.state.fixedBy} onChange={e=>this.handleChange(e)}/>
							</div>
							</div>
							</div>

							<div className="form-group">
							<div className="col-xs-3">
						<label className="control-label">availablein</label>
						<input type="text" className="form-control" id="availableIn"  value={this.state.availableIn} onChange={e=>this.handleChange(e)}
											/>
									</div>
									</div>

									<div className="form-group">
									<div className="col-xs-3">
										<label htmlFor="control-label">Comments:</label>
										<textarea type="text" className="form-control" id="comments"  value={this.state.comments} onChange={e=>this.handleChange(e)} />
									</div>
									</div>

									<div className="col-submit">
										<button className="submitbtn" onClick={e=>this.handleUpdate(e)}>Add Defect</button>
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
