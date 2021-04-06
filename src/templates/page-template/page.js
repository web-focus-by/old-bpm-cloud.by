 import React, { Component } from "react"
 import { images } from "../../images"
 import Layout from "../../components/layout"
 import style from '../post-tempate/post.module.scss'
 import Content from "../../components/posts/content"
import Aside from "../../components/posts/aside"

 import { graphql } from "gatsby"
 

 class PageTemplate extends Component {
    render() {
      const StaticPage = this.props.data.wpPage
      console.log(StaticPage)
      return (
        <Layout>
            <div className={style.wrapper}>
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

