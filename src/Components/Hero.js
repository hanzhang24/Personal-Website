import React from 'react'
import SocialFollow from "./SocialFollow"
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
            <p>Hello!</p>
            <p>My Name is Han Zhang</p>
            <p>I am a sophmore at Duke University stuyding Electrical and Computer Engineering, as well as Computer Science</p>
            <p>My current interests ... </p>
            <button href='/' className='button'>Contact Me</button>
        </div>
    </div>
  )
}

export default Hero