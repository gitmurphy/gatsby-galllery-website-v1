import "./LAFGallery.css";
import Flowers from "./images/spring_flowers_with_lemons.jpg";
import Sicily from "./images/sunflower_hut_in_sicily.jpg";
import Days from "./images/on_days_like_these.jpg";
import React, { useState } from "react";

import {
    Container,
    Row,
    Col,
    Card,
    Collapse, Button
} from 'react-bootstrap';

function LAFGallery() {

    // collapse functions
    const [openDays, setOpenDays] = useState(false);
    const [openSicily, setOpenSicily] = useState(false);
    const [openFlowers, setOpenFlowers] = useState(false);

    return (
        <div className="lafg-container">
            <Container>

                <Row>
                    <Col lg={6} md={12} className="p-5">

                        <Card className="card">
                            <Card.Body>
                                <Card.Img variant="top" className="days-image" src={Days} />
                                <Card.Title className="p-2 d-flex justify-content-center">On Days Like These</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Acrylic on Canvas<br />14" x 38"</Card.Subtitle>
                                <Button onClick={() => setOpenDays(!openDays)}
                                    aria-controls="days-collapse-details"
                                    className="btn btn-secondary"
                                    aria-expanded={openDays}>Details</Button>
                                <Collapse in={openDays}>
                                    <div id="days-collapse-details">
                                        Visiting friends in West Cork has influences this painting, in particular the relationship between the fisherman
                                        in his boat and the Irish Sea. The atmosphere that emerges from the scene, the warm Irish Summer light, playing on
                                        the surface of the water, evokes a certain timelessness, that marries well with the title.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col lg={6} md={12} className="p-5">

                        <Row>

                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={Flowers} />
                                    <Card.Title className="p-2 d-flex justify-content-center">Spring Flowers with Lemons</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Acrylic on Canvas<br />16" x 12"</Card.Subtitle>
                                    <Button onClick={() => setOpenFlowers(!openFlowers)}
                                        aria-controls="flowers-collapse-details"
                                        className="btn btn-secondary"
                                        aria-expanded={openFlowers}>Details</Button>
                                    <Collapse in={openFlowers}>
                                        <div id="flowers-collapse-details">
                                            This still life painting depicting a small blue bowel of lemons, an Irish ceramic jug and Irish spring flowers brings
                                            together influences from home and abroad, in this 'en plain air' painting.
                                        </div>
                                    </Collapse>
                                </Card.Body>
                            </Card>

                        </Row>

                        <Row>

                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={Sicily} />
                                    <Card.Title className="p-2 d-flex justify-content-center">Sunflower Hut, Sicily</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Mixed Media on Canvas<br />24" x 36"</Card.Subtitle>
                                    <Button onClick={() => setOpenSicily(!openSicily)}
                                        aria-controls="sicily-collapse-details"
                                        className="btn btn-secondary"
                                        aria-expanded={openSicily}>Details</Button>
                                    <Collapse in={openSicily}>
                                        <div id="sicily-collapse-details">
                                            During lockdown, having set up my studio in between my kitchen table and back garden, I looked at my drawings of Sicily and began to paint.
                                            Over the course of the last decade, my family and I travelled to Sicily. Here the light is very harsh/ strong, and the temperatures soar to 43&#8451; daily,
                                            so it was on our daily trips down the mountain, to swim in the Mediterranean Sea, that we would pull over and soak up the vistas;
                                            this vista being my favourite. It's my way of recording the intense heat, smells and colours of this beautiful coastline.
                                        </div>
                                    </Collapse>
                                </Card.Body>
                            </Card>

                        </Row>

                    </Col>
                </Row>
                {/* 
                <Row>
                    <Col lg={4} className="p-3">
                        <Card>
                            <Card.Body>
                                <Card.Img variant="top" src={Sicily} />
                                <Card.Title className="p-2 d-flex justify-content-center">Sunflower Hut, Sicily</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Mixed Media on Canvas<br />24" x 36"</Card.Subtitle>
                                <Button onClick={() => setOpenSicily(!openSicily)}
                                    aria-controls="sicily-collapse-details"
                                    className="btn btn-secondary"
                                    aria-expanded={openSicily}>Details</Button>
                                <Collapse in={openSicily}>
                                    <div id="sicily-collapse-details">
                                        During lockdown, having set up my studio in between my kitchen table and back garden, I looked at my drawings of Sicily and began to paint.
                                        Over the course of the last decade, my family and I travelled to Sicily. Here the light is very harsh/ strong, and the temperatures soar to 43&#8451; daily,
                                        so it was on our daily trips down the mountain, to swim in the Mediterranean Sea, that we would pull over and soak up the vistas;
                                        this vista being my favourite. It's my way of recording the intense heat, smells and colours of this beautiful coastline.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col lg={4} className="p-3">
                        <Card>
                            <Card.Body>
                                <Card.Img variant="top" src={Days} />
                                <Card.Title className="p-2 d-flex justify-content-center">On Days Like These</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Acrylic on Canvas<br />14" x 38"</Card.Subtitle>
                                <Button onClick={() => setOpenDays(!openDays)}
                                    aria-controls="days-collapse-details"
                                    className="btn btn-secondary"
                                    aria-expanded={openDays}>Details</Button>
                                <Collapse in={openDays}>
                                    <div id="days-collapse-details">
                                        Visiting friends in West Cork has influences this painting, in particular the relationship between the fisherman 
                                        in his boat and the Irish Sea. The atmosphere that emerges from the scene, the warm Irish Summer light, playing on 
                                        the surface of the water, evokes a certain timelessness, that marries well with the title.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} className="p-3">
                        <Card>
                            <Card.Body>
                                <Card.Img variant="top" src={Flowers} />
                                <Card.Title className="p-2 d-flex justify-content-center">Spring Flowers with Lemons</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Acrylic on Canvas<br />16" x 12"</Card.Subtitle>
                                <Button onClick={() => setOpenFlowers(!openFlowers)}
                                    aria-controls="flowers-collapse-details"
                                    className="btn btn-secondary"
                                    aria-expanded={openFlowers}>Details</Button>
                                <Collapse in={openFlowers}>
                                    <div id="flowers-collapse-details">
                                        This still life painting depicting a small blue bowel of lemons, an Irish ceramic jug and Irish spring flowers brings 
                                        together influences from home and abroad, in this 'en plain air' painting.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row> */}

            </Container>
        </div >
    )
}

export default LAFGallery