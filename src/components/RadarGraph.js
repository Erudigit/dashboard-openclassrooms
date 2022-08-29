import '../styles/RadarGraph.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


function RadarGraph(props) {

    const performanceKind = props.performanceKind;
    const performanceData = props.performanceData;
    const sessions = []

    Object.keys(performanceKind).forEach(session => sessions.push({
      subject: performanceKind[session],
      A: performanceData[session - 1].value,
    }));

    const data = sessions;

    // const data = [
    //     {
    //       subject: 'Math',
    //       A: 120,
    //       B: 110,
    //       fullMark: 150,
    //     },
    //     {
    //       subject: 'Chinese',
    //       A: 98,
    //       B: 130,
    //       fullMark: 150,
    //     },
    //     {
    //       subject: 'English',
    //       A: 86,
    //       B: 130,
    //       fullMark: 150,
    //     },
    //     {
    //       subject: 'Geography',
    //       A: 99,
    //       B: 100,
    //       fullMark: 150,
    //     },
    //     {
    //       subject: 'Physics',
    //       A: 85,
    //       B: 90,
    //       fullMark: 150,
    //     },
    //     {
    //       subject: 'History',
    //       A: 65,
    //       B: 85,
    //       fullMark: 150,
    //     },
    //   ];
      
  
    return (
        <div className="radar-graph" style={{ width: "1100px", height: "600px", backgroundColor: "rgb(40,45,48" }}>
          {/* {console.log(performanceData)} */}
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

export default RadarGraph