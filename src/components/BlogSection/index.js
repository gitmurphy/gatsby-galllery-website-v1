import React from "react";
import "./BlogSection.css"
import { Container, Card, Row, Col } from 'react-bootstrap'
import Thumb1 from "./images/lost_and_found_thumbnail.png";

function BlogSection() {
    return (
        <div className="blog-container">
            <Container>
                <Card className="border-0 blog-card shadow">
                    <Card.Body>
                        <Card.Header className="text-center border-0">"Lost and Found" A New Collection of Paintings.</Card.Header>
                        <Row>
                            <Col>
                                <img src={Thumb1} alt="Blog Post 1 Thumbnail" className="thumbnail-image p-4 img-fluid"/>
                            </Col>
                            <Col>
                            <Card.Text className="p-5">
                                The work in this new collection of paintings 'lost and found', was created during Covid when I found the luxury
                                of time to do what i love, painting and printmaking. Both my kitchen table and back garden became my studio and
                                these 14 paintings emerged as a visual diary of sorts, of the places I have lived and worked over the past decade.
                                <br /><br />
                                Annual journeys to Agrigento in Sicily have played a major part in my changing palette as the harsh sunlight and
                                soaring temperatures played on the landscape and seascapes of this Mediterranean island, alongisde the more subtle
                                and gentle sunlight on the Irish landscape.
                                <br /><br />
                                This collection is a mix of Irish and Sicilian recurring motifs, in both still life and landscapes. A sweet escape
                                for the viewer.
                            </Card.Text>
                            </Col>
                        </Row>
                        <Card.Footer className="text-muted text-right">July 2022</Card.Footer>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default BlogSection