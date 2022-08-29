import '../styles/RadialBarGraph.css'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';


function RadialBarGraph(props) {

    const todayScore = props.todayScore * 100;
    // const performanceData = props.performanceData;
    // const sessions = []

    // Object.keys(performanceKind).forEach(session => sessions.push({
    //   subject: performanceKind[session],
    //   A: performanceData[session - 1].value,
    // }));

    // const data = sessions;

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
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="100%" barSize={15} data={data} startAngle={90} endAngle={450}>
            <RadialBar 
                cornerRadius='100%'
                clockWise
                dataKey="uv"
            />
            </RadialBarChart>
          </ResponsiveContainer>
          <div class="mc-center">
            <p class="score">{todayScore}%</p>
            <p>of your goal</p>
          </div>
        </div>
    )
}

export default RadialBarGraph