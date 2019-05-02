import React, { Component } from 'react'

 class Add_developer extends Component {
    state = {
        developerName:null
}
handleChange = (e) => {
    this.setState({
        [e.target.id]:e.target.value
    });
};
handleSubmit =(e) => {
    e.preventDefault();
    console.log(this.state);
    fetch("http://localhost:8080/adddeveloper",{
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
                        <h1><font face="Lucida Handwriting "><b><font size={24} color="#16CFE1">D</font>eveloper!!</b></font></h1>
                        <br />
                        <div className="tile-body">
                            <div class="container">
                                <form onSubmit={this.handleSubmit}>

                                    
                                    <div className="form-group">
                                    <div className="col-xs-3">
                                    <label htmlFor="control-label">Developer Name:</label>
                                        <input type="text" className="form-control" id="developerName"  onChange={this.handleChange} />
                                        <br></br>
                                        <div className="col-submit">
										<button className="btn btn-primary">Add Developer</button>
									</div>
                                    </div>
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

export default Add_developer;
