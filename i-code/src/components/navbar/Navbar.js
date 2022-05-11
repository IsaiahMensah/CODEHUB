
import './Navbar.css'
import {  SiVisualstudiocode} from "react-icons/si";
import bars from '../../images/bars.svg'

function Navbar() {
  return (
    <div className="navbar">
        <div className='n-left'>
            <SiVisualstudiocode className='n-logo'/>
            <span className='n-text'><strong>CODE<i>HUB</i></strong></span>
        </div>
        
        <div className='n-right'>
            <div className='n-list'>
            <ul >
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Tutorials</li>
                <li>Contact</li>
            </ul>
            </div>
            <div className='n-sign-up'>
            <button className='button n-button'>sign Up</button>
        </div>
        <div className='bars' >
           <img src={bars}  alt='' />
        </div>
        
        </div>
        
    </div>
  );
}

export default Navbar;