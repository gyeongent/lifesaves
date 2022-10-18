import React from "react";
import { NavLink, Link } from "react-router-dom";
import '../css/header.css';

import logo from '../img/ls_logo.svg';
// import InsLogo from './img/instagram_logo.svg';
// import TumblLogo from './img/tumblbug_logo.svg';

function Header(){
    return(
        <div className="header">
            <div>
                <Link to="/">
                    <img src={logo} alt="Main Logo" width="50px"></img>
                </Link>
            </div>
            <div>
                <ul className="header_Nav">
                    <NavLink to="/projects">
                        <li>
                            프로젝트
                        </li>
                    </NavLink>
                    <NavLink to="/archive">
                        <li>
                            아카이브
                        </li>
                    </NavLink>
                    <NavLink to="/support">
                        <li>
                            지원
                        </li>
                    </NavLink>
                </ul>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Header;