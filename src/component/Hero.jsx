import React from 'react'
import './Hero.css'
import Header from './Header/Header'
import hero_image from "../assets/hero_image.png"
import hero_image_back from "../assets/hero_image_back.png"
import Heart from "../assets/heart.png"
import Calories from "../assets/calories.png"
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter'

const Hero = () => {
    const transition = {type:'spring', duration : 3}
    const mobile = window.innerWidth <= 768 ? true : false
    return (
        <div className='hero'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />

                <div className="the-best-ad">
                    <motion.div initial = {{left:mobile ? "178px" : "238px"}} whileInView={{left
                    :'8px'}} transition={{...transition,type:'tween'}}>
                        
                    </motion.div>
                    <span>the best fitness club in the town</span>
                </div>

                <div className="hero-text">
                    <div><span className='stroke-text'>shape </span><span>your</span></div>
                    <div><span>ideal body</span></div>

                    <div><span>in here we will help you to shape and build your ideal body and live up your life to fullest</span></div>
                </div>

                <div className="figures">
                    <div><span><NumberCounter end={140} start={0} delay='3' preFix="+" /></span><span>expert coaches</span></div>
                    <div><span><NumberCounter end={978} start={0} delay='3' preFix="+" /></span><span>members joined</span></div>
                    <div><span><NumberCounter end={50} start={0} delay='3' preFix="+" /></span><span>fitness programs</span></div>
                </div>

                <div className="hero-buttons">
                    <buttons className="btn">get started</buttons><buttons className="btn">learn more</buttons>
                </div>
            </div>
            <div className="right-h">
                <button className='btn'>
                    join now
                </button>

                <motion.div 
                transition={transition}
                whileInView={{right:'4rem'}} 
                initial={{right:'-1rem'}} className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>heart rate</span>
                    <span>100 bpm</span>
                </motion.div>
                <img src={hero_image} alt="" className='hero-image' />
                <motion.img 
                transition={transition}
                whileInView={{right:'20rem'}} 
                initial={{right:'11rem'}}  src={hero_image_back} alt="" className='hero-image-back' />

                <motion.div 
                transition={transition}
                whileInView={{right:'28rem'}} 
                initial={{right:'37rem'}}  className="calories">
                    <img src={Calories} alt="" />

                    <div><span>Calories Burned</span><span>220 kcal</span></div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
