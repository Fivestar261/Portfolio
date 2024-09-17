import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am a skilled and Passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and Javascript , as well as design software such as Adobe Photoshop and Illustrator </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>this is a demo text , you can write your own content here</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>WebDesign</h2>
                    <p>I'm Pro in web design Development, i rate myself 10/10.😊😎😄 </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>AppDesign</h2>
                    <p>I'm pro in Mobile App Development, i rate myself 10/10 .</p>
                </div>
            </div>
        </div>  
    </section>
  );
}

export default Skills
