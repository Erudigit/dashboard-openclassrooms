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
 * const keyData = [{calorieCount: 1930, carbohydrateCount: 290, lipidCount: 50, proteinCount: 155}]
 * return (
 *   <RightInfos keyData={keyData} />
 * )
 */

function RightInfos(props) {

    return (
        <div className="right-infos">
            {/* {console.log(props)} */}
            <div class="each-part">
                <img src={CaloriesLogo} alt="Calories Logo" />
                <div class="pt">
                    <p class="mp">{props.keyData.calorieCount}kCal</p>
                    <p class="sm">Calories</p>
                </div>
            </div>
            <div class="each-part">
                <img src={ProteinLogo} alt="Protein Logo" />
                <div class="pt">
                    <p class="mp">{props.keyData.proteinCount}g</p>
                    <p class="sm">Proteins</p>
                </div>
            </div>
            <div class="each-part">
                <img src={CarbsLogo} alt="Carbs Logo" />
                <div class="pt">
                    <p class="mp">{props.keyData.carbohydrateCount}g</p>
                    <p class="sm">Carbs</p>
                </div>
            </div>
            <div class="each-part">
                <img src={FatLogo} alt="Fat Logo" />
                <div class="pt">
                    <p class="mp">{props.keyData.lipidCount}g</p>
                    <p class="sm">Lipids</p>
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