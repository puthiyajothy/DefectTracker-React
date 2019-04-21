import React, { Component } from 'react'

 class Add_Project extends Component {
    state = {
        projectName:null
}
handleChange = (e) => {
    this.setState({
        [e.target.id]:e.target.value
    });
};
handleSubmit =(e) => {
    e.preventDefault();
    console.log(this.state);
    fetch("http://localhost:8080/addproject",{
    method:"POST",
    headers : {
        'Accept' : 'Application/json,text/plain,*/*',
        'Content-type' : 'application/json'
    },
    body : JSON.stringify(this.state)
})

};
    render() {
        return (
            <div className="card-body">
                <div className="col-md-3">
                    <div className="tile">
                        <h1><font face="Lucida Handwriting "><b><font size={24} color="#16CFE1">P</font>rojects!!</b></font></h1>
                        <br />
                        <div className="tile-body">
                            <div class="container">
                                <form onSubmit={this.handleSubmit}>

                                    
                                    <div className="form-group">
                                    <div className="col-xs-6">
                                    <label htmlFor="control-label">Project Name:</label>
                                        <input type="text" className="form-control" id="projectName"  onChange={this.handleChange} />
                                    
                                    </div>
                                        </div>

                                    <div className="col-submit">
										<button className="sbtn btn-primary">Add Project</button>
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

export default Add_Project
