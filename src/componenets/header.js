import React from "react";
import { NavLink, Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import '../css/header.css';

import logo from '../img/ls_logo.svg';
// import InsLogo from './img/instagram_logo.svg';
// import TumblLogo from './img/tumblbug_logo.svg';

function OpenMenu(){

    const close = () => {
        const sidemenu = document.getElementsByClassName('sideMenu')[0];
        const black = document.getElementsByClassName('blackScreen')[0];

        sidemenu.classList.remove('openMenu')
        black.classList.remove('fadeIn');
    }

    return(
        <>
            <div className="sideMenu">
                <ul className="header_Nav">
                    <li className="menuTap" onClick={close}>
                        <CloseIcon 
                            sx={{fontSize: "30px", marginRight: "5px", marginTop: "5px"}}
                        /> 닫기
                    </li>
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
                <div className="gf">
                    펀딩 바로가기
                    <ArrowForwardIosIcon 
                    sx={{fontSize: "27px",
                    marginLeft: "5px",
                    marginTop: "5px"}}
                    className="arrow"
                    />
                </div>
            </div>
            <div className="blackScreen"/>
        </>
    );
}

function Header(){

    const open = () => {
        const sidemenu = document.getElementsByClassName('sideMenu')[0];
        const black = document.getElementsByClassName('blackScreen')[0];

        sidemenu.classList.add('openMenu');
        black.classList.add('fadeIn');
    }

    return(
        <div className="header">
            <div className="menuTap" onClick={open}>
                <MenuIcon 
                    sx={{fontSize: "27px", marginRight: "5px"}}
                />
                메뉴
            </div>
            <OpenMenu />
            <div>
                <Link to="/">
                    <img src={logo} alt="Main Logo" width="50px"></img>
                </Link>
            </div>
            <div>
                <a href="https://tumblbug.com/u/lifesaves" target={"_blank"} rel="noreferrer">
                    펀딩 바로가기
                </a>
            </div>
        </div>
    );
}

export default Header;