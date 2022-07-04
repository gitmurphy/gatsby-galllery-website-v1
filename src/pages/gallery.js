import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Masonry from "react-masonry-css";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap";
import "./gallery-masonry.css"

const Gallery = ({ data }) => (

  <Layout>
    <Seo title="Gallery" />
    <Container className="gallery-container">

      {/* Masonry Gallery Grid */}
      
      <Masonry
        breakpointCols={2}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {/* array of JSX items */}
        {data.gallery.edges.map(({ node }) => (
          <div key={node.id} className="py-3">
            <a href={node.publicURL}>
              <GatsbyImage image={node.childImageSharp.gatsbyImageData}
                alt={node.base.split('_').join(' ').split('.')[0]} />
            </a>
          </div>
        ))}
      </Masonry>

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
