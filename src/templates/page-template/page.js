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
import GraphicSection from "../../components/pagesElem/graphicSection"
import Contact from "../../components/main/Contact"
import Reviews from "../../components/main/Reviews"
import Articles from "../../components/main/Articles"
import PopularServices from "../../components/pagesElem/popularServices"

class PageTemplate extends Component {
  render() {
    const StaticPage = this.props.data.wpPage
    console.log(StaticPage)
    const content =
      StaticPage.content !== null ? fractionContent(StaticPage.content) : false
    const constantTemplatePart = [
      <section className={style.wrapperWithPaddingButton200}>
        <KeysBoxs casesNumber={3} />
      </section>,
      <section
        className={classNames(style.wrapperWithPaddingButton200, style.wrapper)}
      >
        <Brief />
      </section>,
      <section
        className={classNames(style.wrapperWithPaddingButton200, style.grayBg)}
      >
        <div className={style.wrapper}>
          <GraphicSection />
        </div>
      </section>,
      <section
        className={classNames(style.wrapperWithPaddingButton200, style.grayBg)}
      >
        <PopularServices />
      </section>,
      <section className={classNames(style.grayBg)}>
        <div className={style.wrapper}>
          <Contact />
        </div>
      </section>,
    ]
    if (content) {
      content.splice(1, 0, constantTemplatePart[0], constantTemplatePart[1])
      content.splice(4, 0, constantTemplatePart[2])
      content.splice(6, 0, constantTemplatePart[3], constantTemplatePart[4])
    }
    console.log(StaticPage.id)
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
          <SubSubsectionItems uri={StaticPage.uri} />
        </div>
        {content ? (
          content.map((elem, index) => {
            if (elem.title !== undefined) {
              return (
                <section
                  className={classNames(
                    style.wrapperWithPaddingButton200,
                    {
                      [style.grayBg]: index >= 3,
                    },
                    { [style.wrapperWithPaddingTop200]: index == 3 }
                  )}
                  key={index}
                >
                  <div className={classNames(style.wrapper)}>
                    <div
                      className={style.h2Wrapper}
                      dangerouslySetInnerHTML={{ __html: elem.title }}
                    ></div>
                    <div
                      className={style.firstParagraphWrapper}
                      dangerouslySetInnerHTML={{
                        __html: elem.content.join(""),
                      }}
                    ></div>
                  </div>
                </section>
              )
            } else {
              return <div key={index}>{elem}</div>
            }
          })
        ) : (
          <section className={style.wrapper}>
            К сожалению, тут пока ничего нету(
          </section>
        )}
        <Articles />
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
      uri
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
