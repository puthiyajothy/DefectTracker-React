import React from 'react';

export default class View extends React.Component {
    state = {
        defects: [],
    };

    componentDidMount() {
        this.getPost();
    }

    getPost() {
        fetch("http://localhost:3000/adddefect")
            .then((res) => (res.json()))
            .then((data) => {
                // console.log(data);
                this.setState({ defects: data });
            })
    }

    render() {
        return (
            <div className="card mb-3">
                <div className="card-header">
                    <h1><font face="Lucida Handwriting "><b><font size={12} color="#16CFE1">D</font>efects</b></font></h1>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Defect Id</th>
                                    <th>Defect Type</th>
                                    <th>Defect Description</th>
                                    <th>Module</th>
                                    <th>Severity</th>
                                    <th> Priority</th>
                                    <th>Status</th>
                                    <th>Assigned Pesrson</th>
                                    <th>Entered Date</th>
                                    <th>Entered By</th>
                                    <th>Fixed Date</th>
                                    <th>Fixed By</th>
                                    <th>Available In</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody id="addDefect">


                                {this.state.defects.map(e => (
                                    <tr>
                                        <td>{e.id}</td>
                                        <td>{e.defectid}</td>
                                        <td>{e.defecttype}</td>
                                        <td>{e.defectdescription}</td>
                                        <td>{e.module}</td>
                                        <td>{e.severity}</td>
                                        <td>{e.Piriority}</td>
                                        <td>{e.status}</td>
                                        <td>{e.assignedperson}</td>
                                        <td>{e.enterddate}</td>
                                        <td>{e.enteredby}</td>
                                        <td>{e.fixeddate}</td>
                                        <td>{e.fixedby}</td>
                                        <td>{e.availablein}</td>
                                        <td>{e.comments}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        );
    }
}

