import React from "react";
import "./HeroSection.css" 
import {Button} from '../ButtonElements'

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Find Your Next Love Today</h1>
            <div className="hero-btns">
                <Button fontBig big primary>
                    Enquire Now
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
