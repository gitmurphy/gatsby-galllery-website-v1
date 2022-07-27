import React, { useState } from "react"
// styles
import "./LAFGallery.css"
// image routes
import FlowersWithLemons from "../../images/laf-gallery/spring_flowers_with_lemons.jpg"
import SunflowerHutSicily from "../../images/laf-gallery/sunflower_hut_in_sicily.jpg"
import LotusAndFish from "../../images/laf-gallery/lotus_and_fish.jpg"
import FrillyTailCarp from "../../images/laf-gallery/frilly_tail_koi_karp.jpg"
import NuuanuTemple from "../../images/laf-gallery/nuuanu_temple.jpg"
import PandP from "../../images/laf-gallery/pomegranates_and_pears.jpg"
import PinkTulips from "../../images/laf-gallery/pink_wild_tulips.jpg"
import FrillyLilies from "../../images/laf-gallery/creamy_frilly_lillies.jpg"
import CarpDownstream from "../../images/laf-gallery/koi_carp_swimming_downstream.jpg"
import Clementines from "../../images/laf-gallery/north_african_clementines.jpg"
import OrangeBlossoms from "../../images/laf-gallery/frilly_orange_blossoms.jpg"
import RedTulips from "../../images/laf-gallery/wild_red_tulips.jpg"
import Days from "../../images/laf-gallery/on_days_like_these.jpg"

// bootstrap components
import { Container, Row, Col, Card, Collapse, Button } from "react-bootstrap"

function LAFGallery() {
  // collapse functions
  const [openDays, setOpenDays] = useState(false)
  const [openSicily, setOpenSicily] = useState(false)
  const [openFlowers, setOpenFlowers] = useState(false)

  return (
    <div className="lafg-container">
      <Container>
        <Row className="heading-row">
          <h1>The Lost and Found Collection</h1>
        </Row>
        <Row>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" className="days-image" src={Days} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  On Days Like These
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted d-flex justify-content-center">
                  Acrylic on Canvas 14" x 38"
                </Card.Subtitle>
                <div className="d-grid gap-2">
                  <Button
                    onClick={() => setOpenDays(!openDays)}
                    aria-controls="days-collapse-details"
                    variant="outline-primary"
                    aria-expanded={openDays}
                  >
                    Read More
                  </Button>
                </div>

                <Collapse in={openDays}>
                  <div id="days-collapse-details">
                    Visiting friends in West Cork has influenced this painting,
                    in particular the relationship between the fisherman in his
                    boat and the Irish Sea. The atmosphere that emerges from the
                    scene, the warm Irish summer light, playing on the surface
                    of the water, evokes a certain timelessness, that marries
                    well with the title.
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="p-5">
            <Row>
              <Card>
                <Card.Body>
                  <Card.Img variant="top" src={FlowersWithLemons} />
                  <Card.Title className="p-2 d-flex justify-content-center">
                    Spring Flowers with Lemons
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted d-flex justify-content-center">
                    Acrylic on Canvas 16" x 12"
                  </Card.Subtitle>
                  <div className="d-grid gap-2">
                    <Button
                      onClick={() => setOpenFlowers(!openFlowers)}
                      aria-controls="flowers-collapse-details"
                      variant="outline-primary"
                      aria-expanded={openFlowers}
                    >
                      Read More
                    </Button>
                  </div>
                  <Collapse in={openFlowers}>
                    <div id="flowers-collapse-details">
                      This still life painting depicting a small blue bowl of
                      lemons, an Irish ceramic jug and Irish spring flowers
                      brings together influences from home and abroad, in this
                      'en plain air' painting.
                    </div>
                  </Collapse>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Card>
                <Card.Body>
                  <Card.Img variant="top" src={SunflowerHutSicily} />
                  <Card.Title className="p-2 d-flex justify-content-center">
                    Sunflower Hut, Sicily
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted d-flex justify-content-center">
                    Mixed Media on Canvas 24" x 36"
                  </Card.Subtitle>
                  <div className="d-grid gap-2">
                    <Button
                      onClick={() => setOpenSicily(!openSicily)}
                      aria-controls="sicily-collapse-details"
                      variant="outline-primary"
                      aria-expanded={openSicily}
                    >
                      Read More
                    </Button>
                  </div>
                  <Collapse in={openSicily}>
                    <div id="sicily-collapse-details">
                      During lockdown, having set up my studio in between my
                      kitchen table and back garden, I looked at my drawings of
                      Sicily and began to paint. Over the course of the last
                      decade, my family and I travelled to Sicily. Here the
                      light is very harsh/ strong, and the temperatures soar to
                      43&#8451; daily, so it was on our daily trips down the
                      mountain, to swim in the Mediterranean Sea, that we would
                      pull over and soak up the vistas, this vista being my
                      favourite. It's my way of recording the intense heat,
                      smells and colours of this beautiful coastline.
                    </div>
                  </Collapse>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={LotusAndFish} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Lotus and Fish
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted d-flex justify-content-center">
                  Acrylic on Canvas 18” x 26”
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={FrillyTailCarp} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Frilly Tail Koi Carp
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted d-flex justify-content-center">
                  Acrylic on Canvas 18” x 26”
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={PandP} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Pomegranates and Pears
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted d-flex justify-content-center">
                  Acrylic on Canvas 18” x 26”
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={Clementines} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  North African Clementines
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted d-flex justify-content-center">
                  Acrylic on Canvas 18” x 26”
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={PinkTulips} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Wild Pink Tulips
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted d-flex justify-content-center">
                  Acrylic on Canvas 18” x 26”
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={OrangeBlossoms} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Frilly Orange Blossoms
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted d-flex justify-content-center">
                  Acrylic on Canvas 18” x 26”
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={RedTulips} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Wild Red Tulips
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted d-flex justify-content-center">
                  Acrylic on Canvas 18” x 26”
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={NuuanuTemple} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Nu'uanu Temple, Honolulu
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted d-flex justify-content-center">
                  Acrylic on Canvas 8” x 10”
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={FrillyLilies} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Creamy Frilly Lilies
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted d-flex justify-content-center">
                  Acrylic on Canvas 18” x 15”
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={CarpDownstream} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Koi Carp Swimming Downstream
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted d-flex justify-content-center">
                  Acrylic on Canvas 18” x 26”
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LAFGallery
