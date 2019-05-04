import React from "react";

class Editdefect extends React.Component {
	  state = {
		defecttype:"",
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
		comments:""
		
}

handleChange = (e) => {
	this.setState({
		[e.target.id]: e.target.value
	});
};


	render(){
		return(
			<div className="card-body">
				<div className="col-md-24">
					
						<div className="tile-body">
							<div class="container">
							<div className="tile">
						<h1><font face="Lucida Handwriting ">update Defect</font></h1>
						<br/>
								<form onSubmit={this.handleSubmit}>
							
								<div className="form-row">
									<div className="col-xs-3">	
										<label htmlFor="control-label">Defect Id:</label>
										<input type="text" className="form-control" id="defectId" onChange={this.handleChange} />
									</div>

									
										<div className="col-xs-3">
											<label className="control-label"> Defect Type</label>
											<select id="defectType" className="form-control" 
											onChange={this.handleChange}>
											<option>Select </option>
											</select>
										</div>
										
									</div>

									
									<div className="form-row">
									<div className="col-xs-3">
										<label className="control-label">Defect Description:</label>
										<textarea type="text" className="form-control" id="description" onChange={this.handleChange} />
									</div>
									<div className="col-xs-3">
										<label className="control-label">Module </label>
										<select id="module" className="form-control" onChange={this.handleChange}>
							
											</select>
											</div>
									</div>

									<div className="form-row">
								
											<div className="col-xs-3">
												<label className="control-label">Severity:</label>
												<select id="severity" className="form-control" onChange={this.handleChange}>
									
													
												</select>
											</div>
										<div className="col-xs-3">
											<label className="control-label">Piriority:</label>
											<select id="priority" className="form-control" onChange={this.handleChange}>
												
											</select>
										</div>
										</div>

									
									<div className="form-row">
									<div className="col-xs-3">
									<label className="control-label">Status</label>
											<select id="status" className="form-control" onChange={this.handleChange}>
											
											</select>
										</div>
							
							<div className = "col-xs-3">
										<label htmlFor="control-label">Assigned Person</label>
						<select id="assignPerson" className="form-control" name="assignPerson" onChange={ this.handleChange2}>
						<option>Select Asssign Person</option>
										 
				
												</select>
								
									</div>
									</div>

								<div className="form-row">									
									<div className="col-xs-3">
									<label htmlFor="control-label">Entered Date:</label>
									<input
												type="date"
												className="form-control"
												id="enteredDate"
												onChange={this.handleChange}
											/>
									</div>
									
										<div className="col-xs-3">
										<label htmlFor="control-label">Entered By:</label>
										<input type="text" className="form-control" id="enteredBy"  onChange={this.handleChange} />
										
										</div>
									</div>
								
								<div className="form-row">
								<div className="col-xs-3">
							<label className="fixeddate">Fixed Date:</label>
							<input type="date" className="form-control" id="fixedDate" onChange={this.handleChange}/>
										</div>
										<div className="col-xs-3">
							<label htmlFor="control-label">Fixed By</label>
										<input
											type="text"
											className="form-control"
											id="fixedBy"
							
											onChange={this.handleChange}
										/>
									</div>
										</div>

										<div className="form-row">
										<div className="col-xs-3">
											<label className="control-label">availablein</label>
											<input
												type="text"
												className="form-control"
												id="availableIn"
												placeholder="availablein"	onChange={this.handleChange}
											/>
									</div>
									<div className="col-xs-3">
										<label htmlFor="control-label">Comments:</label>
										<textarea type="text" className="form-control" id="comments"  onChange={this.handleChange} />
									</div>
										</div>

										<div className="col-submit">
										<button className="btn btn-primary">update Defect</button>
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
export default Editdefect;