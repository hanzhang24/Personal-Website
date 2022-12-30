import React from 'react'
import SocialFollow from "./SocialFollow"
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
            <p>Hello!</p>
            <p>My Name is Han Zhang</p>
            <p>I am a ECE/CS Major at Duke University </p>
            <button href='/' className='button'>Contact Me</button>
        </div>
    </div>
  )
}

export default Hero