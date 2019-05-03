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
                        <div className="tile-body">
                            <div class="container">
                                <form onSubmit={this.handleSubmit}>

                                    <div className="form-group">
                                    <div className="col-xs-3">
                                    <label className="control-label">Project ID:</label>
                                    <input type="text" className="form-control" id="projectId"  onChange={this.handleChange}/>
                                    </div>
                                    </div>

                                    <div className="form-group">
                                    <div className="col-xs-3">
                                    <label className="control-label">Project Name:</label>
                                    <input type="text" className="form-control" id="projectName"  onChange={this.handleChange} />
                                    <br/>

                                    <div className="col-xs-3">
									<button className="btn btn-primary">Add Project</button>
									</div>
                                    </div>
                                       
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

      
        )
    }
}

export default Add_Project
