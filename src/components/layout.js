/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Footer from "./Footer"
import Header from "./header"
import styles from "./layout.module.css"
import Cirlce from "./main/Cirlce"
import "./styles.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.wrap}>
      <Header />
      <Cirlce />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
