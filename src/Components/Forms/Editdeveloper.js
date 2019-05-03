import React, { Component } from 'react'

 class Editdeveloper extends Component {
    state = {
        developerId:"",
        developerName:""
}
handleChange = (e) => {
    this.setState({
        [e.target.id]:e.target.value
    });
};


FetchdeveloperId() {
    fetch(
      `http://localhost:8080/getdeveloperById/` +
        this.props.match.params.developerId
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
            developerId: data.developerId,
            developerName: data.developerName,
           isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.FetchdeveloperId(this.developerId);
  }

  updatedeveloper(data) {
    return fetch(
      "http://localhost:8080/updatedeveloper",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    )
      .then(res => {
        return res;
      })
      .catch(err => err);
  }

  handleUpdate = e => {
    e.preventDefault();
  // console.log(subClassId);
  const AddDeveloperUpdate = {
    developerId: this.state.developerId,
    developerName: this.state.developerName,
   
  };
  this.updatedeveloper(AddDeveloperUpdate);
  console.log(AddDeveloperUpdate);
};

    render() {
        return (
            <div className="card-body">
                <div className="col-md-3">
                    <div className="tile">
                        <h1><font face="Lucida Handwriting ">Developer</font></h1>
                        <br />
                        <div className="tile-body">
                            <div class="container">
                                <form onSubmit={this.handleSubmit}>

                                <div className="form-group">
                                    <div className="col-xs-3">
                                    <label htmlFor="control-label">Developer Id:</label>
                                        <input type="text" className="form-control" id="developerId" value={this.state.developerId} onChange={e=>this.handleChange(e)} />
                                    
                                    </div>
                                        </div>
                                    <div className="form-group">
                                    <div className="col-xs-3">
                                    <label htmlFor="control-label">Developer Name:</label>
                                  <input type="text" className="form-control" id="developerName" value={this.state.developerName} onChange={e=>this.handleChange(e)} />
                                  <br></br>
                                    <div className="col-submit">
										                <button className="btn btn-primary"  onClick={e=>this.handleUpdate(e)}>Add Developer</button>
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

export default Editdeveloper;
