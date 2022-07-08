import React from "react";
// styles
import "./ContactBar.css";
// bootstrap components
import {
    Container,
    Row,
    Col
} from "react-bootstrap";

function ContactBar() {
    return (
        <div className="contact-bar-container">
            <Container>
                <Row>
                    <Col>
                        <p><a href="mailto:maeve@maeveobyrne.com" className="email-link">Email: maeve@maeveobyrne.com</a> | Call: +353 87 284 3571</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactBar