import '../styles/RadialBarGraph.css'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'

 /**
 * Component for showing the score of the day of the user in a radial bar graph.
 *
 * @component
 * @example
 * const todayScore = 0.12
 * return (
 *   <RadialBarGraph todayScore={todayScore} />
 * )
 */

function RadialBarGraph(props) {

    let todayScore;
    let comp;

    if (props.todayScore) {

      todayScore = props.todayScore * 100;
      comp = <div className="mc-center"><p className="score">{todayScore}%</p><p>of your goal</p></div>

    } else {

      todayScore = 100;
      comp = <div className="mc-center"><p>No score available for today.</p></div>

    }

    const data = [
        {
            name: 'Score',
            uv: 100,
            fill: 'transparent',
          },
        {
          name: 'Score',
          uv: todayScore,
          fill: 'red',
        },
      ];
      
  
    return (
        <div className="radial-bar" style={{ width: "1100px", height: "600px", backgroundColor: "white" }}>
          {/* {console.log(props.todayScore)} */}
          <h2>Score</h2>
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="100%" barSize={15} data={data} startAngle={90} endAngle={450}>
            <RadialBar 
                cornerRadius='100%'
                clockWise
                dataKey="uv"
            />
            </RadialBarChart>
          </ResponsiveContainer>
            {comp}
        </div>
    )
}

RadialBarGraph.propTypes = {
  todayScore: PropTypes.number
}

export default RadialBarGraph