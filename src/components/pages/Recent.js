import React from "react";
import Aside from "../includes/Aside.js";
import RecentCont from "../contents/RecentCont.js";
import PlayBar from "../includes/PlayBar.js";

function Main(){
    return (
        <div id="wrap">
            <Aside />
            <RecentCont />
            <PlayBar />
        </div>
    )
}
export default Main;