import '../styles/LineChartGraph.css'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'


 /**
 * Component for showing details of the user.
 *
 * @component
 * @example
 * const averageSessions = [{day: 7, sessionLength: 50}]
 * return (
 *   <LineChartGraph averageSessions={averageSessions} />
 * )
 */

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
          {console.log(props.averageSessions)}
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

BarChartGraph.propTypes = {
  averageSessions: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.number,
    sessionLength: PropTypes.number,
  }))
}

export default LineChartGraph