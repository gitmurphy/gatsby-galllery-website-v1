import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroSection from "../components/HeroSection";
import LAFGallery from "../components/LAFGallery";
import LYLSGallery from "../components/LYLSGallery";

const IndexPage = () => (
  <Layout>
      <Seo title="Home" />
      <HeroSection/>
      <LAFGallery/>
      <LYLSGallery/>
  </Layout>
)

export default IndexPage
