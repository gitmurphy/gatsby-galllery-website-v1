import React from "react"

// styles
import "./LYLSGallery.css"

// image routes
import MidMack from "../../images/lyls-gallery/midsummer-mackerel.jpg"
import MackGlow from "../../images/lyls-gallery/mackerel-that-glow.jpg"
import ShaveIce from "../../images/lyls-gallery/shave-ice-shack.jpg"
import FranciniBros from "../../images/lyls-gallery/francini-brothers-plaster-works-in-mountjoy-square-studio.jpg"
import TurtlesComing from "../../images/lyls-gallery/turtles-coming-ashore.jpg"
import EvoSurf from "../../images/lyls-gallery/evolution-of-surfboards.jpg"
import PinkCloudMoher from "../../images/lyls-gallery/pink-clouds-over-the-cliffs-of-moher.jpg"
import OutRigSun from "../../images/lyls-gallery/outrigger-canoe-at-sunset.jpg"
import OutRigMoon from "../../images/lyls-gallery/outrigger-canoe-and-crescent-moon.jpg"
import MagTreeJKF from "../../images/lyls-gallery/magnolia-tree-in-kennedy-arboretum-co-wexford.jpg"
import StMull from "../../images/lyls-gallery/saint-mullins-morning.jpg"
import AtSwim2 from "../../images/lyls-gallery/at-swim-2-fish.jpg"
import CrossingOver from "../../images/lyls-gallery/crossing-over-west-cork.jpg"
import WaimeaBay from "../../images/lyls-gallery/waimea-bay-surf-hawaii.jpg"
import SicilianJug from "../../images/lyls-gallery/sicilian-jug-with-large-leaves.jpg"
import Mackerel from "../../images/lyls-gallery/mackerel.jpg"
import CompassJelly from "../../images/lyls-gallery/compass-jellyfish-co-wexford.jpg"
import ManAndDog from "../../images/lyls-gallery/a-man-and-his-dog-taking-some-shade.jpg"
import WindAndRain from "../../images/lyls-gallery/the-wind-and-rain-tossed-everything-about.jpg"
import RoseDawn from "../../images/lyls-gallery/rose-dawn-at-trinity-college-dublin.jpg"
import WorldOyster from "../../images/lyls-gallery/the-world-is-your-oyster.jpg"
import WildAtlantic from "../../images/lyls-gallery/wild-atlantic-jelly-fish.jpg"

// bootstrap components
import { Container, Row, Col, Card } from "react-bootstrap"

function LYLSGallery() {

  return (
    <div className="lyls-container">
      <Container>

        <Row className="heading-row">
          <h1>The Let Your Light Shine Collection</h1>
        </Row>

        <Row>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={MidMack} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Midsummer Mackerel
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={MackGlow} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Mackerel that glow
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={RoseDawn} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Rose dawn at Trinity College Dublin
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={StMull} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Saint Mullins morning
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={WildAtlantic} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Wild Atlantic jelly fish
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={CrossingOver} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Crossing over, west Cork
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={PinkCloudMoher} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Pink clouds over the cliffs of Moher
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={WaimeaBay} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Waimea bay surf, Hawaii
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={ManAndDog} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  A man and his dog, taking some shade
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={ShaveIce} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Shave ice shack
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={CompassJelly} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Compass jellyfish, Co Wexford
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={MagTreeJKF} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Magnolia tree in Kennedy arboretum, Co Wexford
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={OutRigSun} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Outrigger canoe at sunset
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={OutRigMoon} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Outrigger canoe and crescent moon
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={WindAndRain} />
                <Card.Title className="p-2 d-flex justify-content-center">
                The wind and rain tossed everything about
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={WildAtlantic} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Wild Atlantic jelly fish
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={Mackerel} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Mackerel
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={AtSwim2} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  At swim, 2 fish
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={WorldOyster} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  The World is your oyster
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={SicilianJug} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Sicilian jug with large leaves
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={EvoSurf} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Evolution of surfboards
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={FranciniBros} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Francini brothers plaster works in Mountjoy Square studio
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={12} className="p-5">
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={TurtlesComing} />
                <Card.Title className="p-2 d-flex justify-content-center">
                  Turtles coming ashore
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="p-5">
            {/* odd number of paintings in collection */}
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default LYLSGallery
