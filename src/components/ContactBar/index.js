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
                        <p>Email: <a href="mailto:maeveobyrne1961@gmail.com" className="email-link">maeveobyrne1961@gmail.com</a> | Call: +353 87 284 3571</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactBar