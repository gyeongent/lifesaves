import React from "react";
import Utterances from "./function/utterances";

import './function/utterances.css';

import maillogo from "../img/mail_icon.svg";
import instalogo from "../img/instagram_logo.svg";

const repo = 'gyeongent/lifesaves'

function Support(){

    document.addEventListener('scroll', function(){
        var nav = document.getElementsByClassName('otherNav')[0];

        if(window.scrollY > 100 && document.body.clientWidth >= 768){
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    });

    return(
        <div className="flex_box">
            <div className="commentbox">
                <div className="top home_title">
                    궁금하신 내용을 알려주세요!
                </div>
                <Utterances repo={repo} theme='boxy-light' />
            </div>
            <div className="otherNav">
                <div className="support_nav">
                    <div className="top home_title">
                        다른 궁금한 내용이 있나요?
                    </div>
                    <div className="othericon">
                        <div>
                            <img src={maillogo} alt="mail logo" width={"20px"}/>
                            <div>
                                메일
                            </div>
                        </div>
                        <div>
                            <img src={instalogo} alt="dm logo" width={"20px"}/>
                            <div>
                                DM
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Support;