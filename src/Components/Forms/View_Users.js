import React  from 'react';

class View_Users extends React.Component {
  state={
    users: [],
  }
  componentDidMount(){
    this.getPost();
   }

  getPost() {
    fetch("http://localhost:3000/Add_Users")
      .then((res) => (res.json()))
      .then((data) => {
        // console.log(data);
        this.setState({ users: data });
      })

  }
  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">
          <h1><font face="Lucida Handwriting "><b><font size={12} color="#16CFE1">V</font>iew Users</b></font></h1>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
              <thead>
                <tr>

                  <th htmlFor="control-label">Users Id</th>
                  <th htmlFor="control-label">Users Name</th>
                  <th htmlFor="control-label">Users Role</th>
                  <th htmlFor="control-label">Users Password</th>
                </tr>
              </thead>

              <tbody id="users">
                {this.state.users.map(e => (
                  <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.role}</td>
                    <td>{e.password}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default View_Users
