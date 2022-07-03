import React from "react";
import "./BlogSection.css"
import { Container, Card } from 'react-bootstrap'

function BlogSection() {
    return (
        <div className="blog-container">
            <Container>
                <Card border="primary" className="blog-card">
                    <Card.Body>
                    <Card.Header>Blog Post 1</Card.Header>
                    <Card.Title>
                                Blog Post 1 Title
                            </Card.Title>
                            <Card.Text>
                                Blog Post 1 Text
                            </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default BlogSection