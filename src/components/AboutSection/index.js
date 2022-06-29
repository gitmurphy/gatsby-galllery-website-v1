import React from "react";
import "./AboutSection.css"
import { Container, Row, Col } from 'react-bootstrap'
import Maeve from "./maeve_in_the_studio.png"


function AboutSection() {
    return (
        <div className="about-container">
            <Container>
                <Row className="mission-row">
                    <Col className="mission-container">
                    <h3>Mission Statement</h3>
                        <p>
                        Returning to Ireland, having lived and painted abroad for many years, I find myself with a new and 
                        revitalised vision, I see this island of Ireland through new eyes and my goal is to express Irish 
                        culture and heritage in a new light. While living in San Francisco and Hawaii, I experienced a strong 
                        sense of spirituality and feel fortunate to have this new sense about myself. It is this that I want 
                        to translate into my work here, Ireland being my home, and a country steeped in rich history and culture. 
                        I find my palette changing and the language I use is colour.
                        </p>
                    </Col>
                </Row>  
                <Row>
                    <Col lg={6} md={12} className="biography-container">
                        <h3>Biography</h3>
                        <p>
                        Maeve O'Byrne is a graduate of Dun Laoghaire College of Art (Painting, Printmaking) now I.A.D.T. 
                        She is Irish based. In 1983 she was awarded the Sir Alfred Beit Award, for the most promising painter. 
                        During the 1980's and the 1990's she lived and painted in New York, San Francisco and Hawaii. 
                        Her Art was well received in California, and it was selling well. Maeve was involved in the Community 
                        Arts Movement, creating two very large Murals, and creating Annual exhibitions, both in solo and group 
                        shows. It was during a solo exhibition that Maeve was invited to move to Hawaii and produce a portfolio 
                        of 28 paintings, for 'Roys' in Honolulu. The exhibition was a great success and it was there that she 
                        began to work as a freelance textile designer of men's 'Aloha Shirts' working for 'Kahala' for a decade. 
                        Her shirts featured on local Hawaiian T.V. and newspapers.
                        </p>
                    </Col>
                    <Col lg={6} md={12}>
                        <img src={Maeve} alt="Maeve In The Studio" className="maeve-studio-image"/>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default AboutSection