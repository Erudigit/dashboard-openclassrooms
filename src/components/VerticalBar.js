import '../styles/VerticalBar.css'
import IconAlter from '../assets/icon-alter.png';
import IconBike from '../assets/icon-bike.png';
import IconSwim from '../assets/icon-swim.png';
import IconYoga from '../assets/icon-yoga.png';


function VerticalBar() {

    return (
        <div className="vertical-menu">
            <div className="images">
                <img src={IconYoga} alt="Yoga Link" />
                <img src={IconSwim} alt="Swim Link" />
                <img src={IconBike} alt="Bike Link" />
                <img src={IconAlter} alt="Alter Link" />
            </div>
            <p className="copyright">Copiryght, SportSee 2020</p>
        </div>
    )
}

export default VerticalBar