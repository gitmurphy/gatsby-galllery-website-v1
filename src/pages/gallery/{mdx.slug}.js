import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col, Table } from "react-bootstrap"

const PaintingPage = ({ data }) => {
  
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout>
      <Seo title="Painting" />

      <Container>
        <Row>
          <Col></Col>
          <Col lg={6} md={8}>
            <br />
            <GatsbyImage image={image} alt={data.mdx.frontmatter.title} />
            <Table>
                                <tbody>
                                    <tr>
                                        <td>Title</td>
                                        <td>{data.mdx.frontmatter.title}</td>
                                    </tr>
                                    <tr>
                                        <td>Dimensions</td>
                                        <td>{data.mdx.frontmatter.dimensions}</td>
                                    </tr>
                                    <tr>
                                        <td>Media</td>
                                        <td>{data.mdx.frontmatter.media}</td>
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        <td>{data.mdx.frontmatter.sale_status}</td>
                                    </tr>
                                </tbody>
            </Table>
            <br />
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
        sale_status
      }
    }
  }
`

export default PaintingPage
