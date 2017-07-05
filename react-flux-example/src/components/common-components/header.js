'use strict';
import React from "react";
import {Link} from "react-router";

class Header extends React.Component {
    render() {
        return (
            <div>
                <div><Link className="btn-block" to="login">Log In</Link></div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
                            <img src="images/home-icon.png" width={30} height={30}/>
                        </Link>
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            {/*<li><Link to="authors">Authors</Link></li>*/}
                            <li><Link to="about">About</Link></li>
                            {/*<li><Link to="author">Add User</Link></li>*/}
                            {/*<li><Link to="login">Log In</Link></li>*/}
                            <li><Link to="register">Register</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
