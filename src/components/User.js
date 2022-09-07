import '../styles/User.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BarChartGraph from "./BarChartGraph.js";
import LineChartGraph from "./LineChartGraph.js";
import RadarGraph from "./RadarGraph.js";
import RadialBarGraph from "./RadialBarGraph.js";
import Navbar from "./Navbar.js";
import VerticalBar from './VerticalBar.js';
import RightInfos from './RightInfos.js';

function User() {

    let { userId } = useParams();

    const [user, setUser] = useState({userInfos: {}, keyData: {}})
    const [activity, setActivity] = useState({ sessions: [] })
    const [averageSessions, setAverageSessions] = useState({ sessions: [] })
    const [performance, setPerformance] = useState({ kind: [], date: [] })

    useEffect(() => {
        fetch(`/user/${userId}`)
        .then(res => res.json())
        .then((data) => {
            setUser( data["data"] );
        })
        .catch(console.log);

        fetch(`/user/${userId}/activity`)
        .then(res => res.json())
        .then((data) => {
            setActivity( data["data"] )
        })
        .catch(console.log)

        fetch(`/user/${userId}/average-sessions`)
        .then(res => res.json())
        .then((data) => {
            setAverageSessions( data["data"] )
        })
        .catch(console.log)

        fetch(`/user/${userId}/performance`)
        .then(res => res.json())
        .then((data) => {
            setPerformance( data["data"] )
        })
        .catch(console.log)
    }, [userId]);

    return (
        <div id="user_profile">
            {console.log(user.keyData)}
            <div className="top-bar"><Navbar /></div>
            <div class="mc-grid">
                <div className="left-bar"><VerticalBar /></div>
                <div className="mc">
                    <div className="title-p">
                        <h1>Hello <span>{ user.userInfos.firstName }</span></h1>
                        <p>Congratulations! You reached yesterday's goal! 👏</p>
                        {/* <p>{JSON.stringify(averageSessions.sessions)}</p> */}
                    </div>
                    <div class="mc-graph-infos">
                        <div className="graph-p">
                            <div className="top-p">
                                <BarChartGraph lastSessions={activity.sessions.length > 7 ? activity.sessions.slice(-7) : activity.sessions} />
                            </div>
                            <div className="bottom-p">
                                <LineChartGraph averageSessions={averageSessions.sessions} />
                                <RadarGraph performanceKind={performance.kind} performanceData={performance.data} />
                                <RadialBarGraph todayScore={user.todayScore} />
                            </div>
                        </div>
                        <div className="data-p">
                            <RightInfos keyData={user.keyData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;