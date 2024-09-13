import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (      
      <section id='intro'>
        <div className='introContent'>
          <span className='hello'>Helllo,</span>
          <span className='introText'>I'm <span className='introName'>Smith</span> <br/>Website Designer</span>
          <p className='introPara'>I am a skilled web designer with experience in creating visually appealing and user friendly websites.</p>
          <Link><button className='btn'><img src={btnImg} alt='Hire me' />Hire Me</button></Link>
        </div>
        <img src={bg} alt='profile' className='bg' />
      </section>
  )
}

export default Intro;
