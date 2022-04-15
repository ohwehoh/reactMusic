import React from "react";
import Aside from "../includes/Aside.js";
import MainCont from "../contents/MainCont.js";
import PlayBar from "../includes/PlayBar.js";

function Main(){
    return (
        <>
            <Aside />
            <MainCont name="메인페이지 입니다."/>
            <PlayBar />
        </>
    )
}
export default Main;