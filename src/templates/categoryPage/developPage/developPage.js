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
import AnimateModule from "../../../components/pagesElem/animateModule"
import GraphicSection from "../../../components/pagesElem/graphicSection"
import AnimationList from "../../../components/pagesElem/animationList"
import Сontact from "../../../components/main/Сontact"
import SomePersons from "../../../components/pagesElem/somePersons"
import Brief from "../../../components/pagesElem/brief"
import ThreeColumn from "../../../components/pagesElem/threeColumn"
import TwoRows from "../../../components/pagesElem/twoRows"
import Reviews from "../../../components/main/Reviews"
import Articles from "../../../components/main/Articles"
import Feedback from "../../../components/main/Feedback"


class PageTemplate extends Component {
   render() {
    //  console.log(this.props.data.wpPage)
     const StaticPage = this.props.data.wpPage;
     const content = fractionContent(StaticPage.content)
     console.log(content)
     return (
       <Layout>
         <SEO title={StaticPage.seo.title} description={StaticPage.seo.opengraphDescription} />
          <KeysBoxs casesNumber={3} />
            <div className={classNames(style.breadcrumbsAndPriseWrapper, style.wrapper)}> 
              <Breadcrumbs breadcrumbsArr={StaticPage.seo.breadcrumbs} />
              <div className={style.priseAreaWrapper}>
                <Prise text={StaticPage.title} cost={600}/>
                <button  className={style.bottom}>заказать</button>
              </div>
            </div>
              <SubSubsectionItems title={StaticPage.title}/>
              <section className={classNames(style.mainSection,  style.wrapper)}> 
                <h1 dangerouslySetInnerHTML={{ __html: StaticPage.title }} />
                <AnimateModule content={content[0]} title={StaticPage.title} />
              </section>
              <section  className={classNames(style.secondSection, style.section)}>
                <div className={style.wrapper}>
                <GraphicSection />
                </div>
              </section>
              <section className={classNames(style.thirdSection, style.wrapper, style.section)}>
                <AnimationList content={content[1]}/>
              </section>
              <section>
                <Сontact />
              </section>
              <section className={classNames(style.wrapper, style.section)}>
                <SomePersons content={content[2]}/>
              </section>
              <section className={classNames(style.section, style.secondSection)}>
                <div className={style.wrapper}>
                  <Brief />
                </div>
              </section>
              <section className={classNames(style.wrapper, style.section)}>
                  <ThreeColumn content={content[3]}/>
                  <TwoRows content={content[4]}/>
              </section>
              <section>
                <Reviews />
              </section>
              <section>
                <Articles />
              </section>
              <section>
                <Feedback content={content[4].content[15]} />
              </section>
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