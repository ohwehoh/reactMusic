import React from "react";
import Aside from "../includes/Aside.js";
import PlistCont from "../contents/PlistCont.js";
import PlayBar from "../includes/PlayBar.js";
import { useLocation } from 'react-router-dom';

function Main(){
    return (
        <div id="wrap">
            <Aside />
            <PlistCont />
            <PlayBar />
        </div>
    )
}
export default Main;