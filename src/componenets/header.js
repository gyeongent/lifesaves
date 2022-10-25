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
                    <NavLink to="/projects" className="li">
                        <li>
                            프로젝트
                        </li>
                    </NavLink>
                    <NavLink to="/archive" className="li">
                        <li>
                            아카이브
                        </li>
                    </NavLink>
                    <NavLink to="/support" className="li">
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