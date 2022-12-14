import React, { useState } from "react";
import announceList from "../data/announce.json";

import 'react-calendar/dist/Calendar.css';
import '../css/home.css';

function Announce(){
    return(
        <div className="announce_box">
            <div className="announce_icon">
                π’
            </div>
            <div className="announce_content">
                {announceList.announce[0]}
            </div>
        </div>
    );
}

function Calendars(){
    return(
        <div className="customTb">
            <table>
                <thead>
                    <tr className="date">
                        <th className="red">μΌ</th>
                        <th>μ</th>
                        <th>ν</th>
                        <th>μ</th>
                        <th>λͺ©</th>
                        <th>κΈ</th>
                        <th className="blue">ν </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="days">
                        <th className="tdisable">27</th>
                        <th className="tdisable">28</th>
                        <th className="tdisable">29</th>
                        <th className="tdisable">30</th>
                        <th>1</th>
                        <th>2</th>
                        <th className="blue">3</th>
                    </tr>
                    <tr className="days">
                        <th className="red">4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>
                            8
                            <div className="tcont">
                                νλ© λ§κ°
                            </div>    
                        </th>
                        <th>
                            9
                            <div className="tcont">
                                μ ν μμ°
                            </div>
                        </th>
                        <th className="blue">10</th>
                    </tr>
                    <tr className="days">
                        <th className="red">11</th>
                        <th>12</th>
                        <th>13</th>
                        <th>14</th>
                        <th>15</th>
                        <th>16</th>
                        <th className="blue">17</th>
                    </tr>
                    <tr className="days">
                        <th className="red">18</th>
                        <th>19</th>
                        <th>20</th>
                        <th>21</th>
                        <th>
                            22
                            <div className="tcont">
                                μμ° λ§κ° & ν¬μ₯
                            </div>
                        </th>
                        <th>23</th>
                        <th className="blue">
                            24
                            <div className="tcont">
                                ν¬μ₯ λ§κ°
                            </div>    
                        </th>
                    </tr>
                    <tr className="days">
                        <th className="red">
                            25
                            <div className="tcont">
                                λ°°μ‘ μμ
                            </div>
                        </th>
                        <th>26</th>
                        <th>27</th>
                        <th>38</th>
                        <th>29</th>
                        <th>30</th>
                        <th className="blue">
                            31
                            <div className="tcont">
                                λ°°μ‘ λ§κ° & μ’λ£
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function SmallSchedule(){
    return(
        <div className="small_banner">
            <div className="notice_title">
                μ§νμ€μΈ νλ‘μ νΈ : <br/>{`<Chapter 2> εζ­Έ : νκ·νλ€.`}
            </div>
            <ul className="notice">
                <li>
                    11μ 4μΌ - νλ© μμπ
                </li>
                <li>
                    12μ 8μΌ - νλ© λ§κ°
                </li>
                <li>
                    12μ 9μΌ - μ ν μμ°
                </li>
                <li>
                    12μ 22μΌ - μμ° λ§κ° & ν¬μ₯
                </li>
                <li>
                    12μ 24μΌ - ν¬μ₯ λ§κ°π¦
                </li>
                <li>
                    12μ 25μΌ - λ°°μ‘ μμβ¨
                </li>
                <li>
                    12μ 31μΌ - λ°°μ‘ λ§κ°
                </li>
            </ul>
        </div>
    )
}

function Home(){
    return(
        <div className="bodyStyle">
            <div className="top">
                <div className="home_title">
                    νλ‘μ νΈ μΌμ 
                </div>
                <Announce />
            </div>
            <div className="section_first">
                {/* <CalendarSection /> */}
                <Calendars />
                <SmallSchedule />
            </div>
        </div>
    );
}

export default Home;