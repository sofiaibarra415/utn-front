import React from 'react';
import '../../style/header.css';
const Header = (props) => {
    return(
        <header>
        <div className="header">
            <img src="img/logo.png" width="100" alt="Sofia Ibarra nutricion"/>
            <h1>Sofia Ibarra nutrición</h1>
        </div>
    </header>
    );
}
export default Header;