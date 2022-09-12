import '../styles/BarChartGraph.css'
import { BarChart, Bar, Label, Cell, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'

 /**
 * Component for showing weight and calories bruned for each day of the user in a bar chart graph.
 *
 * @component
 * @example
 * const lastSessions = [{day: "2020-07-01", kilogram: 80, calories: 240}]
 * return (
 *   <BarChartGraph lastSessions={lastSessions} />
 * )
 */

function BarChartGraph(props) {

    const sessionsData = props.lastSessions;
    const sessions = []

    sessionsData.forEach(session => sessions.push({
      name: sessionsData.indexOf(session) + 1,
      "Weight (kg)": session.kilogram,
      "Burned calories (kCal)": session.calories,
    }));

    const data = sessions;

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p className="label">{`${payload[0].value} kg`}</p>
            <p className="label">{`${payload[1].value} kCal`}</p>
          </div>
        );
      }
    
      return null;
    };

    return (

        <div className="bar-chart" style={{ width: "1100px", height: "600px"}}>
          {/* {console.log(props.lastSessions)} */}
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                barGap={15}
                width={500}
                height={300}
                barSize={12}
                data={data}
                margin={{
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
              >
                <XAxis dataKey="name" tickLine={false} padding={{ left: 10, right: 10 }} />
                <YAxis axisLine={false} tickLine={false} orientation="right" padding={{ left: 100 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" align="right" height={100} iconType="circle" />
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <Bar dataKey="Weight (kg)" fill="black" radius={[10, 10, 0, 0]} />
                <Bar dataKey="Burned calories (kCal)" fill="rgb(255,0,0)" radius={[10, 10, 0, 0]} />


              </BarChart>
            </ResponsiveContainer>
            <p class="title-graph">Daily activity</p>
        </div>
    )
}

BarChartGraph.propTypes = {
  lastSessions: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string,
    kilogram: PropTypes.number,
    calories: PropTypes.number
  }))
}

export default BarChartGraph