import React, { Component } from "react"
import { images } from "../../images"
import Layout from "../../components/layout"
import style from "../post-tempate/post.module.scss"
import Content from "../../components/posts/content"
import Aside from "../../components/posts/aside"
import SEO from "../../components/seo"
import Breadcrumbs from "../../components/posts/breadcrumbs"

import { graphql } from "gatsby"
import Feedback from "../../components/main/Feedback"

class PageTemplate extends Component {
  render() {
    const StaticPage = this.props.data.wpPage
    return (
      <Layout pageInfo={StaticPage}>
        <SEO
          title={StaticPage.seo.title}
          description={StaticPage.seo.opengraphDescription}
        />
        <div className={style.wrapper}>
          <Breadcrumbs breadcrumbsArr={StaticPage.seo.breadcrumbs} />
          <div className={style.contentArea}>
            <div className={style.post}>
              <h1 dangerouslySetInnerHTML={{ __html: StaticPage.title }} />
              <Content content={StaticPage.content} />
            </div>
            <Aside />
          </div>
        </div>
        <Feedback />
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
      slug
      seo {
        breadcrumbs {
          text
          url
        }
        title
        opengraphDescription
      }
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
