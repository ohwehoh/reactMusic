import React from "react";

function MainCont(props){
    return (
        <main className="main">
            <div>{props.name}</div>
        </main>
    )
}
export default MainCont;