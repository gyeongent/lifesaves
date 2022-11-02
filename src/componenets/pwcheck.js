import React from "react";

import '../css/form.css'

function CheckPW(){

    function Submit(){
        var password = document.getElementById("checkpwform");

        if (password.value === "Z00EB") {
            alert("프로젝트 1 코드 입력 성공");
            window.location.href = 'https://zooeb.lifesaves.kr/';
        } if (password.value === "RTNEB"){
            alert("프로젝트 2 코드 입력 성공");
            alert("12월 31일 펀딩 종료 후 공개 예정입니다.");
        } else {
            alert("존재하지 않는 코드입니다.");
        }

        
    }

    return(
        <div className="CheckPage">
            <div className="top">
                <div className="home_title">
                    아카이브 비밀번호 확인중입니다.
                </div>
            </div>
            <div className="formAll">
                <form id="form">
                    <label>
                        <input type="text" id="checkpwform" />
                        <input type="submit" id="submitBtn" onClick={Submit}/>
                    </label>
                </form>
            </div>
        </div>
        
    );
}

export default CheckPW;