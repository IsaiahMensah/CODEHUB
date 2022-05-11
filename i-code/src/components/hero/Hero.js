import './Hero.css';
import code from '../../images/code.jpg'

function Hero() {
  return (
    <div className='hero'>
      <div className='h-img'>
        <img src={code}  alt=''  />
         
      </div>
    </div>
  );
}

export default Hero
