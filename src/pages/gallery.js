import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
//import 'bootstrap/dist/css/bootstrap.min.css';

import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap";

const Gallery = ({ data }) => (

  <Layout>
    <Seo title="Gallery" />
    <Container className="gallery-container">
      <Row>
        {data.gallery.edges.map(({ node }) => (
          <Col lg={4} md={6} key={node.id} className="py-3">
            <a href={node.publicURL}>
              <GatsbyImage image={node.childImageSharp.gatsbyImageData}
                alt={node.base.split('_').join(' ').split('.')[0]} />
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  </Layout>
)

export default Gallery

export const pageQuery = graphql`
  query {
    gallery: allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
    edges {
      node {
        id
        base
        publicURL
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            transformOptions: {fit: COVER}
            webpOptions: {quality: 50}
          )
        }
      }
    }
  }
  }
`
