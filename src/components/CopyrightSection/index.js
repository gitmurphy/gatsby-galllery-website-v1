import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import "./CopyrightSection.css" 

function CopyrightSection() {
    return (
        <div className="copyright-container">
            <Container>
                <Row>
                    <Col lg={6} md={12}>
                        Maeve O'Byrne © {new Date().getFullYear()}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CopyrightSection