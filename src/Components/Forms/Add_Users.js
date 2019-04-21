import React, { Component } from 'react'

export class Users extends React.Component {
  state = {
    userName:null,
    email:null,
    role:null,
    password:null
}
handleChange = (e) => {
  this.setState({
    [e.target.id]: e.target.value
  });
};

handleSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);
  // this.props.adddefect(this.state);
  fetch("http://localhost:8080/adduser", {
    method: 'POST',
    headers: {
      'Accept': 'application/json,text/plain,*/*',
      'Content-type': 'application/json'

    },
    body: JSON.stringify(this.state)
  })


};
render() {
    return (
      <div className="card-body">
        <div className="col-md-12">
          <div className="tile">
            <h1><font face="Lucida Handwriting "><b><font size={24} color="#16CFE1">A</font>dd Users!!</b></font></h1>
            <br />
            <div className="tile-body">
              <div class="container">
                <form onSubmit={this.handleSubmit}>
                  
                  <div className="form-group">
                    <label htmlFor="control-label">User ID:</label>
                    <input type="text" className="form-control" id="userId" placeholder="0001" onChange={this.handleChange} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="control-label">Users Name:</label>
                    <input type="text" className="form-control" id="userName" placeholder="Mr.John" onChange={this.handleChange} />
                  </div>
                    
                  <div className="form-group">
                    <label htmlFor="control-label">User Email:</label>
                    <input type="text" className="form-control" id="email" placeholder="Mr.John" onChange={this.handleChange} />
                  </div>


                  <div className="form-group">
                    <label htmlFor="control-label">Users Role:</label>
                    <select id="role" className="form-control" onChange={this.handleChange}>
												<option selected>Select Your Role</option>
												<option>Developer</option>
												<option>QA</option>
                        </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="control-label">Users Password:</label>
                    <input type="text" className="form-control" id="userPassword" placeholder="#########" onChange={this.handleChange} />
                  </div>

                  <div className="col-submit">
										<button className="submitbtn">Add Users</button>
									</div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>)
  }
}

export default Users
