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
import MenuHeader from "./newHeaderMenu/menu"
import "./styles.css"
import Feedback from "./main/Feedback"

const Layout = ({ pageInfo, children }) => {
  return (
    <div className={styles.wrap}>
      <Header pageInfo={pageInfo} />
      <Cirlce />
      <main>{children}</main>
      <Feedback />
      <Footer />
    </div>
  )
}

export default Layout
