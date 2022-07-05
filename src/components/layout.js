import * as React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Navbar from "./Navbar"
import Foot from "./Foot"
import ContactBar from "./ContactBar"

import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  return (
    <>
      <ContactBar />
      <Navbar />
      <main>{children}</main>
      <Foot />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
