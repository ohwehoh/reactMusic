import React from "react";
import Aside from "../includes/Aside.js";
import RisingCont from "../contents/RisingCont.js";
import PlayBar from "../includes/PlayBar.js";

function Main(){
    return (
        <div id="wrap">
            <Aside />
            <RisingCont />
            <PlayBar />
        </div>
    )
}
export default Main;