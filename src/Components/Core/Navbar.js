import React from 'react';
import {Link}  from 'react-router-dom';


class Navbar extends React.Component{
    render(){
        return(
          <ul className="sidebar navbar-nav">
          <li className="nav-item active">
            <a className="nav-link">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Dashboard</span>
            </a>
            <ul>
            <a className="nav-link"> <i className="" /> Dashboard</a>
            <a className="link-item"><Link to = "/Add_defect">Add Defect</Link></a>
            </ul>
          </li>
          <div>
          <a className="link-item"><Link to="/View_defect">View Defect</Link></a>
          </div>

          <div>
          <a className="link-item"><Link to="/Addmodule">Add Module</Link></a>
          </div>

          <div>
          <a className="link-item"><Link to="/Viewmodule">Viewmodule</Link></a>
          </div>

          <div>
          <a className="link-item"><Link to="/Add_Users">Add Users</Link></a>
          </div>

          <div>
          <a className="link-item"><Link to="/View_Users">View Users</Link></a>
          </div>

          <div>
          <a className="link-item"><Link to="/Add_project">Add Project</Link></a>
          </div>

          <div>
            <a className="link-item"><Link to="/View_Project">View Project</Link></a>
          </div>
          
          <div>
            <a className="link-item"><Link to="/Add_developer">Add Developer</Link></a>
          </div>
          
          <div>
          <a className="link-item"><Link to="/View_developer">View Developer</Link></a>
          </div>

        </ul>

        );
    

    }
}

export default Navbar;