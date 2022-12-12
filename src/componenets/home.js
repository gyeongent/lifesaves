import React, { useState } from "react";
import announceList from "../data/announce.json";

import 'react-calendar/dist/Calendar.css';
import '../css/home.css';

function Announce(){
    return(
        <div className="announce_box">
            <div className="announce_icon">
                📢
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
                        <th className="red">일</th>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                        <th className="blue">토</th>
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
                                펀딩 마감
                            </div>    
                        </th>
                        <th>
                            9
                            <div className="tcont">
                                제품 생산
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
                                생산 마감 & 포장
                            </div>
                        </th>
                        <th>23</th>
                        <th className="blue">
                            24
                            <div className="tcont">
                                포장 마감
                            </div>    
                        </th>
                    </tr>
                    <tr className="days">
                        <th className="red">
                            25
                            <div className="tcont">
                                배송 시작
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
                                배송 마감 & 종료
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
                진행중인 프로젝트 : <br/>{`<Chapter 2> 回歸 : 회귀하다.`}
            </div>
            <ul className="notice">
                <li>
                    11월 4일 - 펀딩 시작📝
                </li>
                <li>
                    12월 8일 - 펀딩 마감
                </li>
                <li>
                    12월 9일 - 제품 생산
                </li>
                <li>
                    12월 22일 - 생산 마감 & 포장
                </li>
                <li>
                    12월 24일 - 포장 마감📦
                </li>
                <li>
                    12월 25일 - 배송 시작✨
                </li>
                <li>
                    12월 31일 - 배송 마감
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
                    프로젝트 일정
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