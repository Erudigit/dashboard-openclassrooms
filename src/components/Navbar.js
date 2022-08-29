import '../styles/Navbar.css'
import Logo from '../assets/logo.png';


function Navbar() {

    return (
        <div className="main-menu">
            <img className="logo" src={Logo} alt="Logo Dashboard" />
            <a href="#">Home</a>
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a href="#">Community</a>
        </div>
    )
}

export default Navbar