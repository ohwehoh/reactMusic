import React from "react";
import Aside from "../includes/Aside.js";
import MRankCont from "../contents/MRankCont.js";
import PlayBar from "../includes/PlayBar.js";

function Main(){
    return (
        <div id="wrap">
            <Aside />
            <MRankCont name="이달의 노래 영역입니다."/>
            <PlayBar />
        </div>
    )
}
export default Main;