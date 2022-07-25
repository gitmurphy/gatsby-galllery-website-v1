import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

const PaintingPage = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout>
      <Seo title="Painting" />

      <Container>
        <Row>
          <Col></Col>
          <Col lg={6} md={8}>
            <GatsbyImage image={image} alt={data.mdx.frontmatter.title} />
            <h4>{data.mdx.frontmatter.title}</h4>
            <i>{data.mdx.frontmatter.dimensions}</i>
            <p>{data.mdx.frontmatter.media}</p>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
  )
}

//query exported so that gatsby can see it
export const query = graphql`
  query PaintingQuery($slug: String) {
    mdx(slug: { eq: $slug }) {
      body
      id
      frontmatter {
        dimensions
        media
        title
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default PaintingPage
