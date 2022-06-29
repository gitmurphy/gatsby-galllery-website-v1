import React from "react";
import "./ContactSection.css" 
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function ContactSection() {
    return (
        <div className="contact-container">
            <Container>
                <Row>
                    <Col lg={6} md={12}>
                        <h3>Contact Maeve</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactSection