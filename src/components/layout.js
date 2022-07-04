import * as React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import CopyrightSection from "./CopyrightSection"

import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CopyrightSection />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
