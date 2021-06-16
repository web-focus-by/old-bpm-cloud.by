import React, { Component } from "react"
import { images } from "../../images"
import Layout from "../../components/layout"
import style from "./page.module.scss"
import Content from "../../components/posts/content"
import Aside from "../../components/posts/aside"
import SEO from "../../components/seo"
import Breadcrumbs from "../../components/posts/breadcrumbs"

import { graphql } from "gatsby"
import Feedback from "../../components/main/Feedback"
import Prise from "../../components/pagesElem/prise"
import classNames from "classnames"
import SubSubsectionItems from "../../components/pagesElem/subSubsectionItems"
import KeysBoxs from "../../components/main/KeysBoxs"
import { fractionContent } from "../../components/utils/fractionContent"
import Brief from "../../components/pagesElem/brief"

class PageTemplate extends Component {
  render() {
    const StaticPage = this.props.data.wpPage
    console.log(StaticPage)
    const content = fractionContent(StaticPage.content)
    console.log(content)
    return (
      <Layout pageInfo={StaticPage}>
        <SEO
          title={StaticPage.seo.title}
          description={StaticPage.seo.opengraphDescription}
        />
        <div className={style.wrapper}>
          <div className={classNames(style.breadcrumbsAndPriseWrapper)}>
            <Breadcrumbs breadcrumbsArr={StaticPage.seo.breadcrumbs} />
            <div className={style.priseAreaWrapper}>
              <Prise
                text={
                  StaticPage.costService.serviceName !== null
                    ? StaticPage.costService.serviceName
                    : StaticPage.title
                }
                cost={
                  StaticPage.costService.cost !== null
                    ? StaticPage.costService.cost
                    : "350"
                }
              />
              <button className={style.bottom}>заказать</button>
            </div>
          </div>
          <SubSubsectionItems title={StaticPage.title} />
        </div>
        <section className={classNames(style.wrapper, style.textWrapper)}>
          <div
            className={style.h2Wrapper}
            dangerouslySetInnerHTML={{ __html: content[1].title }}
          ></div>
          <div
            className={style.firstParagraphWrapper}
            dangerouslySetInnerHTML={{ __html: content[1].content.join("") }}
          ></div>
        </section>
        <KeysBoxs casesNumber={3} />
        <section className={style.wrapper}>
          <Brief />
        </section>
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
      parentId
      title
      content
      slug
      costService {
        cost
        serviceName
      }
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
