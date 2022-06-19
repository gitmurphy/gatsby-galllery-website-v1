import React from "react";
import "./HeroSection.css" 
import {Button} from '../ButtonElements'

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Maeve O'Byrne Art</h1>
            <div className="hero-btns">
                <Button big primary>
                    Enquire Today
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
