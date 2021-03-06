import React from "react";
// styles
import "./Foot.css";
// bootstrap components
import {
    Container,
    Row,
    Col
} from "react-bootstrap";
// image routes
import VAI from "./images/VAI_member.jpg";

function Foot() {
    return (
        <div className="foot-container">
            <Container>
                <Row>
                    <Col lg={3} md={12} className="d-flex justify-content-center  p-3">
                        <img src={VAI} alt="Visual Artists of Ireland" className="vai-img" />
                    </Col>
                    <Col lg={3} md={12} className="p-3">
                        <h5>Maeve O'Byrne</h5>
                        <p>
                            Artist based in County Wexford.<br />
                            Member of Visual Artists of Ireland<br />
                        </p>
                    </Col>
                    <Col lg={6} md={12} className="d-flex justify-content-left p-3">
                        <p>Email<br /><a href="mailto:maeve@maeveobyrne.com" className="email-link"> maeve@maeveobyrne.com</a>
                        <br />Call<br /><a href="tel:00353872843571" className="phone-link"> +353 87 284 3571</a></p>
                    </Col>
                </Row>
                <Row className="copyright-row">
                    <Col lg={12} className="d-flex justify-content-center p-1 text-middle">
                        {new Date().getFullYear()} © Maeve O'Byrne | All Rights Reserved
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Foot