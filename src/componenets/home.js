import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import newsinfo from "../data/news.json";

import 'react-calendar/dist/Calendar.css';
import '../css/home.css';

function Announce(){
    return(
        <div className="announce_box">
            <div className="announce_icon">
                📢
            </div>
            <div className="announce_content">
                {newsinfo.annouce[0]}
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
                        <th className="tdisable">30</th>
                        <th className="tdisable">31</th>
                        <th>
                            1
                            <div className="tcont">
                                펀딩 시작
                            </div>
                        </th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th className="blue">5</th>
                    </tr>
                    <tr className="days">
                        <th className="red">6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                        <th>11</th>
                        <th className="blue">12</th>
                    </tr>
                    <tr className="days">
                        <th className="red">13</th>
                        <th>14</th>
                        <th>15</th>
                        <th>16</th>
                        <th>17</th>
                        <th>18</th>
                        <th className="blue">19</th>
                    </tr>
                    <tr className="days">
                        <th className="red">20</th>
                        <th>21</th>
                        <th>22</th>
                        <th>23</th>
                        <th>24</th>
                        <th>25</th>
                        <th className="blue">
                            26
                            <div className="tcont">
                                펀딩 마감
                            </div>
                        </th>
                    </tr>
                    <tr className="days">
                        <th className="red">27</th>
                        <th>28</th>
                        <th>29</th>
                        <th>
                            30
                            <div className="tcont">
                                제품 생산
                            </div>
                        </th>
                        <th className="tdisable">1</th>
                        <th className="tdisable">2</th>
                        <th className="blue tdisable">3</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function CalendarSection(){
    const [value, onChange] = useState(new Date());
    return(
        <div className="calendarStyle">
            <Calendar
                onChange={onChange}
                value={value}
                calendarType="US"
                locale="ko-kr"
                formatDay={(locale, date) => moment(date).format("D")}
                minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
                maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
                // eslint-disable-next-line no-mixed-operators
                tileContent={({ activeStartDate, date, view }) =>
                    view === 'month' && date.getMonth() === 10 && date.getDate() === 1 ? <div>펀딩 시작</div> : null
                    &
                    view === 'month' && date.getDate() === 26 ? <div>펀딩 마감</div> : null
                    &
                    view === 'month' && date.getDate() === 30 ? <div>제품 생산</div> :null
                }
            />
        </div>
    );
}

function SmallSchedule(){
    return(
        <div className="small_banner">
            <div className="notice_title">
                진행중인 프로젝트 : <br/>{`<Chapter 2> 回歸 : 회귀하다.`}
            </div>
            <ul className="notice">
                <li>
                    11월 1일 - 펀딩 시작📝
                </li>
                <li>
                    11월 26일 - 펀딩 마감
                </li>
                <li>
                    11월 30일 - 제품 생산
                </li>
                <li>
                    12월 17일 - 생산 마감 & 포장
                </li>
                <li>
                    12월 21일 - 포장 마감📦
                </li>
                <li>
                    12월 24일 - 배송 시작✨
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