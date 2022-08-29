import '../styles/LineChartGraph.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, CustomizedTooltip } from 'recharts';


function LineChartGraph(props) {

  const sessionsData = props.averageSessions;
  const sessions = []
  const days = ["L", "M", "M", "J", "V", "S", "D"]

  sessionsData.forEach(session => sessions.push({
    name: days[sessionsData.indexOf(session)],
    "time": session.sessionLength,
  }));

  const data = sessions;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }
  
    return null;
  };
  
    return (
        <div className="line-chart" style={{ width: "1100px", height: "600px", backgroundColor: "rgb(255,0,0)" }}>
          {/* {console.log(svgDToText)} */}
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line type="monotone" dataKey="time" stroke="white" strokeWith={2} tick={false} tickLine={false} />
              <XAxis dataKey="name" tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
            </LineChart>
          </ResponsiveContainer> 
        </div>
    )
}

export default LineChartGraph