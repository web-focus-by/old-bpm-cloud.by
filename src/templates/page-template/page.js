 import React, { Component } from "react"
 import { images } from "../../images"
 import Layout from "../../components/layout"
 import style from '../post-tempate/post.module.scss'
 import Content from "../../components/posts/content"
 import Aside from "../../components/posts/aside"
 import SEO from "../../components/seo"
import Breadcrumbs from "../../components/posts/breadcrumbs"


 import { graphql } from "gatsby"
 

 class PageTemplate extends Component {
    render() {
      console.log(this.props.data.wpPage)
      const StaticPage = this.props.data.wpPage
      return (
        <Layout>
          <SEO title={StaticPage.title} description={StaticPage.seo.opengraphDescription} />
            <div className={style.wrapper}>
            <Breadcrumbs breadcrumbsArr={StaticPage.seo.breadcrumbs} />
                <div className={style.contentArea}>
                  <div className={style.post}> 
                    <h1 dangerouslySetInnerHTML={{ __html: StaticPage.title }} />
                    <Content  content={StaticPage.content}/>
                  </div>
                  <Aside /> 
                </div>
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

