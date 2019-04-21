import React from 'react';


export default class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
        <a className="navbar-brand mr-1" href="qa_dashboard.html">Defect Tracker</a>
        <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
          <i className="fas fa-bars" />
        </button>

        {/* Navbar Search */}
        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </form>  
      </nav>

        );
    }
}