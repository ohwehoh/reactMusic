import React from "react";
import Aside from "../includes/Aside.js";
import MyMusicCont from "../contents/MyMusicCont.js";
import PlayBar from "../includes/PlayBar.js";

function Main(){
    return (
        <div id="wrap">
            <Aside />
            <MyMusicCont />
            <PlayBar />
        </div>
    )
}
export default Main;