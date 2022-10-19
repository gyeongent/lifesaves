import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";

import 'react-calendar/dist/Calendar.css';
import '../css/home.css';

function Announce(){
    return(
        <div>
            <div>
                📢
            </div>
            <div>
                -
            </div>
        </div>
    );
}

function CalendarSection(){
    const [value, onChange] = useState(new Date());
    return(
        <div>
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

function Home(){
    return(
        <div className="bodyStyle">
            <div className="home_title">
                프로젝트 일정
            </div>
            <div className="section_first">
                <CalendarSection />
                <div className="small_banner">
                    <div className="notice_title">
                        진행중인 프로젝트 : {`<Chapter 2> 치매`}
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
            </div>
        </div>
    );
}

export default Home;