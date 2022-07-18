import React from "react";
import Layout from "../components/layout"
import { graphql } from "gatsby";

function PaintingDetails(props) {
    const post = props.data.markdownRemark
    return (
        <Layout>
            <div>
                <h2>Title</h2>
                <h4>{post.frontmatter.title}</h4>
            </div>
        </Layout>
    )
}

export default PaintingDetails

export const pageQuery = graphql`
  query MyQuery {
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
      }
    }
  }
}
`


