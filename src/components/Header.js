import React from 'react';
import HeaderTop from './HeaderTop';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Header = () => {
    return(
        <React.Fragment>
          <HeaderTop/>
          <NavBar/>
        </React.Fragment>
    );
}

export default Header;