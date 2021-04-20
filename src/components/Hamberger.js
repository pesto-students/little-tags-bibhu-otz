import React from 'react'
import '../css/hamberger.css';
import SideBar from './SideBar';

const Hamberger=()=>{
  
    return(
        <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <SideBar/>
        </div>
      </nav>
     
    );
}


export default Hamberger;