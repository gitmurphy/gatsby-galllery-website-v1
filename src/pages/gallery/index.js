// 1 : MDX QUERY VERSION

import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo";
import { graphql, Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"
import Masonry from "react-masonry-css"
import { Container } from "react-bootstrap"
import "./style/gallery-masonry.css"

const GalleryPage = ({ data }) => {

  const breakpointColumnsObj = {
    default: 4,
    //for large displays
    1200: 6,
    //for laptops
    750: 4,
    //for tablets
    600: 3,
    //for phones
    576: 2
  };

  return (
    <Layout>
      <Seo title="Gallery" />
      <Container className="gallery-container">
        {/* Masonry Gallery Grid */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {/* array of JSX items */}
          {data.allMdx.edges.map(({ node }) => (
            <div key={node.id} className="py-1">
              <Link to={node.slug}>
                <GatsbyImage
                  image={
                    node.frontmatter.hero_image.childImageSharp.gatsbyImageData
                  }
                  alt={node.frontmatter.title}
                />
              </Link>
            </div>
          ))}
        </Masonry>
      </Container>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            hero_image {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  transformOptions: { fit: COVER }
                  webpOptions: { quality: 50 }
                )
              }
            }
            title
          }
          slug
        }
      }
    }
  }
`

export default GalleryPage

// 2 : FILE QUERY VERSION

// import * as React from "react";
// import Layout from "../../components/layout";
// import Seo from "../../components/seo";

// import Masonry from "react-masonry-css";
// import { graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";
// import { Container } from "react-bootstrap";
// import "./style/gallery-masonry.css";

// const Gallery = ({ data }) => (

//   <Layout>
//     <Seo title="Gallery" />
//     <Container className="gallery-container">

//       {/* Masonry Gallery Grid */}

//       <Masonry
//         breakpointCols={2}
//         className="my-masonry-grid"
//         columnClassName="my-masonry-grid_column">
//         {/* array of JSX items */}
//         {data.gallery.edges.map(({ node }) => (
//           <div key={node.id} className="py-3">
//             <a href={node.publicURL}>
//               <GatsbyImage image={node.childImageSharp.gatsbyImageData}
//                 alt={node.base.split('_').join(' ').split('.')[0]} />
//             </a>
//           </div>
//         ))}
//       </Masonry>

//     </Container>
//   </Layout>
// )

// export default Gallery

// export const pageQuery = graphql`
//   query {
//     gallery: allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
//     edges {
//       node {
//         id
//         base
//         publicURL
//         childImageSharp {
//           gatsbyImageData(
//             placeholder: BLURRED
//             transformOptions: {fit: COVER}
//             webpOptions: {quality: 50}
//           )
//         }
//       }
//     }
//   }
//   }
// `
