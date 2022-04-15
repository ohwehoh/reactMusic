import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiThumbsUp } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsTrophy } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


function Aside(){
    return (
        <div className="asideWrap">
            <div className="aside__logo">
                <Link to="/">Music Awards</Link>    
            </div>
            <div className="aside__myPage">
                <Link to="/myPage"><CgProfile size="24"/> 최고의 별자리</Link>   
            </div>
            <div className="aside__menu">
                <Link to="/todayRCM"><FiThumbsUp/> 오늘 추천 음악</Link>
                <Link to="/rank"><BsGraphUp/> 실시간 순위</Link>
                <Link to="/rising"><BsSun/> 요즘 뜨는 노래</Link>
                <Link to="/recent"><AiOutlinePlusCircle/> 최신 발매 앨범</Link>
                <Link to="/mRank"><BsTrophy/> 이달의 노래</Link>
                <Link to="/myMusic"><FaRegStar/> 나의 노래</Link>
            </div>
            <div className="aside__pList">
                <Link to="/pList" name="list1">플레이리스트1 <IoIosArrowForward/></Link>
                <Link to="/pList" name="list2">플레이리스트2 <IoIosArrowForward/></Link>
                <Link to="/pList" name="list3">플레이리스트3 <IoIosArrowForward/></Link>
            </div>
            <div className="aside__notice">
                <a href="#">서비스 소개</a>
                <a href="#">사용방법</a>
                <a href="#">저작권 안내</a>
            </div>
        </div>
    )
}
export default Aside;