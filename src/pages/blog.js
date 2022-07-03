import * as React from "react"
import BlogSection from "../components/BlogSection"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = () => (
  <Layout>
    <Seo title="Blog" />
    <BlogSection />
  </Layout>
)

export default BlogPage
