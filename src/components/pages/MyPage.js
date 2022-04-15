import React from "react";
import Aside from "../includes/Aside.js";
import MyPageCont from "../contents/MyPageCont.js";
import PlayBar from "../includes/PlayBar.js";

function Main(){
    return (
        <div id="wrap">
            <Aside />
            <MyPageCont />
            <PlayBar />
        </div>
    )
}
export default Main;