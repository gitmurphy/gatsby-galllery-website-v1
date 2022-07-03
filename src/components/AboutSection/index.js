import React from "react";
import "./AboutSection.css";
import { Container, Row, Col } from 'react-bootstrap';
import Maeve from "./maeve_profile.jpg";

function AboutSection() {
    return (
        <div className="about-container">
            <Container>
                <Row className="mission-row text-center">
                    <Col className="mission-container p-5">
                    <h2>
                        "I am currently living and working in Co. Wexford, I am a member of 
                        <a href="https://visualartists.ie"> Visual Artists Ireland </a> and I
                        am collaborating to create a children's book."
                        </h2>
                    </Col>
                </Row>  
                <Row>
                    <Col lg={9} md={12} className="biography-container p-5">
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
                    <Col lg={3} md={12}>
                        <img src={Maeve} alt="Maeve at Van Gogh Exhibition" className="maeve-profile-image p-4 img-fluid"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutSection