import React from "react";
import Utterances from "./function/utterances";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './function/utterances.css';

const repo = 'gyeongent/lifesaves'

function OtherNavi(){
    return(
        <div className="otherNav">
                <div className="support_nav">
                    <div className="othericon">
                        <div>
                            <AlternateEmailIcon 
                                sx={{width: "25px", marginRight:"5px"}}
                            />
                            <div>
                                메일문의
                            </div>
                        </div>
                        <div>
                            <InstagramIcon 
                                sx={{width: "25px", marginRight:"5px"}}
                            />
                            <div>
                                DM 문의
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

function AccordionSection(){
    return(
        <div>
            <Accordion>
                <AccordionSummary id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
                    배송 관련 문의
                </AccordionSummary>
                    <Accordion>
                        <AccordionSummary id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
                            배송 기간은 얼만큼 걸리나요?
                        </AccordionSummary>
                        <AccordionDetails>
                            사전에 안내드린 배송 시작일에서 2~3일정도 소요되며, 변경될 수 있습니다.
                        </AccordionDetails>
                    </Accordion>
            </Accordion>
        </div>
    )
}

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
                <div className="comments">
                    <Utterances repo={repo} theme='boxy-light' />
                </div>
            </div>
            <AccordionSection />
            <OtherNavi />
        </div>
    );
}

export default Support;