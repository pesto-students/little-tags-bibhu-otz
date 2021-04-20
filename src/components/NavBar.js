import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
const NavBar = () => {
    return(
      <nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link className="nav-link pl-0" data-toggle="dropdown" to="#"><strong> <i class="fa fa-bars"></i>&nbsp;All category</strong></Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="#">MEN</Link>
                <Link className="dropdown-item" to="#">WOMEN</Link>
                <Link className="dropdown-item" to="#">KIDS</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">Boys Clothings</Link>
                <Link className="dropdown-item" to="#">Girls Clothings</Link>
                <Link className="dropdown-item" to="#">Infants</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Fashion</Link>
            </li>
            
          
            <li className="nav-item">
              <Link className="nav-link" to="#">Men</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Women</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Kids</Link>
            </li>
            
          </ul>
        </div> 
      </div> 
    </nav>
    );
}

export default NavBar;