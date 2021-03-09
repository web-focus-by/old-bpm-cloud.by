 import React, { Component } from "react"
 import Layout from "../components/layout"
 import { graphql } from "gatsby"
 

 class PageTemplate extends Component {
    render() {
      const StaticPage = this.props.data.wpPage
      return (
        <Layout>
            <div>
            <h1 dangerouslySetInnerHTML={{ __html: StaticPage.title }} />
            <div dangerouslySetInnerHTML={{ __html: StaticPage.content }} />
            <p dangerouslySetInnerHTML={{ __html: StaticPage.date }} />
            <p dangerouslySetInnerHTML={{ __html: StaticPage.slug }} />
            </div>
        </Layout>
      )
    }
  }

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      slug
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`

