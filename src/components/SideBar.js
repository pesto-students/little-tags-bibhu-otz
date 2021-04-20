import React from 'react'
import '../css/Sidebar.css';

function SideBar(){
    return(
        <ul id="menu">
        <a href="v"><li>Home</li></a>
        <a href="v" ><li>About</li></a>
        <a href="v"><li>Info</li></a>
        <a href="v"><li>Contact</li></a>
        </ul>
    );
}

export default SideBar;