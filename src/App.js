import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./components/pages/Main";
import MyPage from "./components/pages/MyPage";
import TodayRCM from "./components/pages/TodayRCM";
import Rank from "./components/pages/Rank";
import Rising from "./components/pages/Rising";
import Recent from "./components/pages/Recent";
import MRank from "./components/pages/MRank";
import MyMusic from "./components/pages/MyMusic";
import Plist from "./components/pages/Plist";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/myPage" exact component={MyPage} />
      <Route path="/todayRCM" exact component={TodayRCM} />
      <Route path="/rank" exact component={Rank} />
      <Route path="/rising" exact component={Rising} />
      <Route path="/recent" exact component={Recent} />
      <Route path="/mRank" exact component={MRank} />
      <Route path="/myMusic" exact component={MyMusic} />
      <Route path="/plist" exact component={Plist} />
    </Router>
  );
}

export default App;