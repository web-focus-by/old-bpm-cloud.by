import React, { Component } from "react"
import { images } from "../../../images"
import Layout from "../../../components/layout"
import commonStyle from '../../post-tempate/post.module.scss'
import style from './developPage.module.scss'

import Content from "../../../components/posts/content"
import Aside from "../../../components/posts/aside"
import SEO from "../../../components/seo"
import Breadcrumbs from "../../../components/posts/breadcrumbs"


import { graphql } from "gatsby"
import KeysBoxs from "../../../components/main/KeysBoxs"
import classNames from "classnames"
import Prise from "../../../components/pagesElem/prise"
import SubSubsectionItems from "../../../components/pagesElem/subSubsectionItems"
import { fractionContent } from "../../../components/utils/fractionContent"


class PageTemplate extends Component {
   render() {
    //  console.log(this.props.data.wpPage)
     const StaticPage = this.props.data.wpPage;
     fractionContent(StaticPage.content)
     return (
       <Layout>
         <SEO title={StaticPage.seo.title} description={StaticPage.seo.opengraphDescription} />
          <KeysBoxs casesNumber={3} />
           <div className={classNames(commonStyle.wrapper, style.wrapper)}>
            <div className={style.breadcrumbsAndPriseWrapper}> 
              <Breadcrumbs breadcrumbsArr={StaticPage.seo.breadcrumbs} />
              <div className={style.priseAreaWrapper}>
                <Prise text={StaticPage.title} cost={600}/>
                <button  className={style.bottom}>заказать</button>
              </div>
            </div>
            <SubSubsectionItems title={StaticPage.title}/>
            <div className={commonStyle.contentArea}>
              <div className={commonStyle.post}> 
                <h1 dangerouslySetInnerHTML={{ __html: StaticPage.title }} />
                <Content  content={StaticPage.content}/>
              </div>
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