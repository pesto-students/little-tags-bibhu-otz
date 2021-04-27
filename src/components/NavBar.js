import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
  

    return(
      <React.Fragment>
      <nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">         </span>
        </button>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link className="nav-link pl-0" data-toggle="dropdown" to="#"><strong><GiHamburgerMenu/>&nbsp;All category</strong></Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="#">Men</Link>
                <Link className="dropdown-item" to="#">Women</Link>
                <Link className="dropdown-item" to="#">Jewelery</Link>
                <Link className="dropdown-item" to="#">Electronics</Link>
                <div className="dropdown-divider"></div>
              
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Men</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Women</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Jewelery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Electronics</Link>
            </li>
          </ul>
        </div> 
      </div> 
      
    </nav>
    </React.Fragment>
    );
}

export default NavBar;