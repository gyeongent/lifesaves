import React from "react";
import { NavLink, Link } from "react-router-dom";

import SocialInsta from "../img/instagram_logo.svg";
import SocialTumbl from "../img/tumblbug_logo.svg";
import SocialMail from "../img/mail_icon.svg";

function SiteMap(){

    const ToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return(
        <div className="sitemap">
            <ul>
                <li className="sitemap_title">
                    <Link to="/projects">
                        프로젝트
                    </Link>
                </li>
                <li className="sitemap_content">
                    <NavLink to="/projects/chapterone">
                        Chapter 1. 동물원 방치사건
                    </NavLink>
                </li>
                <li className="sitemap_content">
                    <NavLink to="/projects/chaptertwo">
                        Chapter 2. 치매
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li className="sitemap_title">
                    <Link to="/archive">
                        아카이브
                    </Link>
                </li>
                <li className="sitemap_content">
                    <NavLink to="/archive/chapterone">
                        Chapter 1. 동물원 방치사건
                    </NavLink>
                </li>
                <li className="sitemap_content">
                    <NavLink to="/archive/chaptertwo">
                        Chapter 2. 치매
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li className="sitemap_title">
                    <Link to="/support">
                        지원
                    </Link>
                </li>
                <li className="sitemap_content">
                    <NavLink to="/support">
                        도움말
                    </NavLink>
                </li>
            </ul>
            <div>
                <div className="b2t" onClick={ToTop}>
                    &lt;
                </div>
                <div className="b2t_desc">
                    맨 위로
                </div>
            </div>
        </div>
    );
}

function Description(){
    const date = new Date();
    const year = date.getFullYear();

    return(
        <div className="footer_bottom">
                <div className="copy">
                    &copy; 2021-{year} Life Saves.
                    <div className="rights">
                        본 프로젝트의 모든 저작권은 라이프 세이브스에게 있으며, 무단 전재 및 배포를 금합니다.
                    </div>
                </div>
                <div className="SocialTap">
                    <ul className="footer_nav">
                        <li>
                            <NavLink to="/projects">
                                프로젝트
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/archive">
                                아카이브
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/support">
                                지원
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="SocialIcon">
                        <li>
                            <a href="https://instagram.com/life_saves._" target="blank">
                                <img src={SocialInsta} alt="Instagram Icon" width="25px"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://tumblbug.com/u/lifesaves" target="blank">
                                <img src={SocialTumbl} alt="Tumblbug Icon" width="75px"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/life_saves._" target="blank">
                                <img src={SocialMail} alt="Mail Icon" width="25px"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    );
}

function Footer(){
    return(
        <div className="footer">
            <SiteMap />
            <Description />
        </div>
    );
}

export default Footer;