import React from 'react'
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>OOOOOOOOOOOO</h1>
            <p>What you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'    
                >
                    Get a discount
                </Button>
                <Button className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'    
                >
                    WATCH ME <i className='far fa-play-circle'/>
                </Button>
            </div> 
        </div>
    )
}

export default HeroSection;
