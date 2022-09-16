import '../styles/RightInfos.css'
import CaloriesLogo from '../assets/calories-icon.png';
import CarbsLogo from '../assets/carbs-icon.png';
import FatLogo from '../assets/fat-icon.png';
import ProteinLogo from '../assets/protein-icon.png';
import PropTypes from 'prop-types'

 /**
 * Component for showing data (total calories, total proteins, total carbs, total lipids) of the user in a radial bar graph.
 *
 * @component
 * @example
 * const calories = 1930
 * const proteins = 155
 * const carbs = 290
 * const lipids = 50
 * return (
 *   <RightInfos keyData={keyData} />
 * )
 */

function RightInfos(props) {

    const calories = props.calories;
    const proteins = props.proteins;
    const carbs =  props.carbs;
    const lipids = props.lipids;

    return (
        <div className="right-infos">
            <div className="each-part">
                <img src={CaloriesLogo} alt="Calories Logo" />
                <div className="pt">
                    <p className="mp">{calories}kCal</p>
                    <p className="sm">Calories</p>
                </div>
            </div>
            <div className="each-part">
                <img src={ProteinLogo} alt="Protein Logo" />
                <div className="pt">
                    <p className="mp">{proteins}g</p>
                    <p className="sm">Proteins</p>
                </div>
            </div>
            <div className="each-part">
                <img src={CarbsLogo} alt="Carbs Logo" />
                <div className="pt">
                    <p className="mp">{carbs}g</p>
                    <p className="sm">Carbs</p>
                </div>
            </div>
            <div className="each-part">
                <img src={FatLogo} alt="Fat Logo" />
                <div className="pt">
                    <p className="mp">{lipids}g</p>
                    <p className="sm">Lipids</p>
                </div>
            </div>
        </div>
    )
}

RightInfos.propTypes = {
    keyData: PropTypes.arrayOf(PropTypes.shape({
        calorieCount: PropTypes.number,
        carbohydrateCount: PropTypes.number, 
        lipidCount: PropTypes.number, 
        proteinCount: PropTypes.number
    }))
}

export default RightInfos