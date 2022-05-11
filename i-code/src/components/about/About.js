import React from "react"
import './About.css'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import instagram from '../../images/instagram.png'
import vector1 from '../../images/Vector1.png'
import vector2 from '../../images/Vector2.png'
import boy from '../../images/boy.png'
import FloatingDiv from "../../components/FloatingDiv/FloatingDiv"
import thumbup from '../../images/thumbup.png'
import crown from '../../images/crown.png'
import glassesimoji from '../../images/glassesimoji.png'
import { HiOutlineMail } from "react-icons/hi"


function Intro() {
  return (
    <div className="about">
      <div className="a-left">
        <div className="a-me">About Me</div>
        <div className="a-name">
          <span>Welcome, I Am</span>
          <span>Isaiah Mensah</span>
          <span>
            Frontend Developer with high level of Experience in web designing
            and development producing quality work
          </span>
        </div>
        <form className="a-form">
          <div className="f-container">
              <HiOutlineMail className="f-img"/>
            <h2>Get I Touch</h2>
            <input  className="form-control" type="text" placeholder="Name" />
            
            <input className="form-control" type="text" placeholder="Email" />
            
            <textarea
              className="form-control" name="message" placeholder="Type your message" >
            </textarea>
            <input type='submit' className="form-control submit" value='send'/>
          </div>
        </form>
        <div className="a-icons">
          <a href="">
            <img src={github} alt="" />
          </a>

          <a href="">
            <img src={linkedin} alt="" />
          </a>
          <a href="">
            <img src={instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="a-right">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />

        <div className="crown-position">
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </div>
        <div className="thumbup-position">
          <FloatingDiv image={thumbup} tet1="Best Design" txt2="Award" />
        </div>
        {/* blur divs */}
        <div className="blur"></div>
        <div className="blur"></div>
      </div>
    </div>
  );
}

export default Intro 