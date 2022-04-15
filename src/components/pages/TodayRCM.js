import React from "react";
import Aside from "../includes/Aside.js";
import TodayRCMCont from "../contents/TodayRCMCont.js";
import PlayBar from "../includes/PlayBar.js";

function Main(){
    return (
        <div id="wrap">
            <Aside />
            <TodayRCMCont />
            <PlayBar />
        </div>
    )
}
export default Main;