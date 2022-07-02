import React from "react";
import "./ContactSection.css"
import { Container, Row, Col } from 'react-bootstrap'

function ContactSuccessSection() {
    return (
        <div className="contact-container">
            <Container>
                <Row>
                    <Col lg={6} md={12}>

                        <h3>Contact Maeve</h3>

                        <h4>Thank You!</h4>
                        <h3>Your message has been submitted successfully.</h3>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactSuccessSection