import React from 'react';
import classes from './Topbar.module.css';
import logo from '../LogoAmazon.png';

const Topbar = (props) => {
    return(
        <header>
            <nav className= {classes.Topbar}>
                <img src = {logo} alt = "Amazon Logo"/> 
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
            </nav>
        </header>
    );
}

export default Topbar;