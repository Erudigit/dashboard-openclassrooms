import '../styles/RadarGraph.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'

 /**
 * Component for showing all the stats (cardio, energy, endurance, strength, spped, intensity) of the user in a radial bar graph.
 *
 * @component
 * @example
 * const performanceKind = {1: 'cardio'}
 * const performanceData = [{value: 80, kind: 1}]
 * return (
 *   <RightInfos performanceKind={performanceKind} performanceData={performanceData} />
 * )
 */

function RadarGraph(props) {

  const performanceKind = props.performanceKind;
  const performanceData = props.performanceData;
  const sessions = []

  Object.keys(performanceKind).forEach(session => sessions.push({
    subject: performanceKind[session],
    A: performanceData[session - 1].value,
  }));

  const data = sessions;      

  return (
      <div className="radar-graph" style={{ width: "1100px", height: "600px", backgroundColor: "rgb(40,45,48" }}>
        {/* {console.log(performanceKind)} */}
          <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid  />
              <PolarAngleAxis dataKey="subject" />
              <Radar name="Mike" dataKey="A" fill="rgb(255,0,0)" fillOpacity={0.6} />
              </RadarChart>
          </ResponsiveContainer>
      </div>
  )
}

RadarGraph.propTypes = {
  performanceKindArrayOf: PropTypes.arrayOf(PropTypes.string),
  performanceData: PropTypes.arrayOf({
    calorieCount: PropTypes.number,
    carbohydrateCount: PropTypes.number, 
    lipidCount: PropTypes.number, 
    proteinCount: PropTypes.number
})
// averageSessions: PropTypes.arrayOf(PropTypes.shape({
//   day: PropTypes.number,
//   sessionLength: PropTypes.number
// }))
}

export default RadarGraph