import '../styles/RightInfos.css'
import CaloriesLogo from '../assets/calories-icon.png';
import CarbsLogo from '../assets/carbs-icon.png';
import FatLogo from '../assets/fat-icon.png';
import ProteinLogo from '../assets/protein-icon.png';


function RightInfos(props) {

    return (
        <div className="right-infos">
            {/* {console.log(props.keyData)} */}
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

export default RightInfos