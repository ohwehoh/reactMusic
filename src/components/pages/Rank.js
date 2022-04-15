import React from "react";
import Aside from "../includes/Aside.js";
import RankCont from "../contents/RankCont.js";
import PlayBar from "../includes/PlayBar.js";

function Main(){
    return (
        <div id="wrap">
            <Aside />
            <RankCont />
            <PlayBar />
        </div>
    )
}
export default Main;