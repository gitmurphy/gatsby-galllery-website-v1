import * as React from "react"
import GallerySection from "../components/GallerySection"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Gallery = () => (
  <Layout>
    <Seo title="Gallery" />
    <GallerySection />
  </Layout>
)
export default Gallery
