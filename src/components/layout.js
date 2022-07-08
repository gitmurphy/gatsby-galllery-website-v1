import * as React from "react"
import PropTypes from "prop-types"
// styles
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// react components
import Navbar from "./Navbar"
import Foot from "./Foot"
import ContactBar from "./ContactBar"

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
