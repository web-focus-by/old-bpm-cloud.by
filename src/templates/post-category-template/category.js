import React, { Component } from "react"
import PropTypes from "prop-types"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Breadcrumbs from "../../components/posts/breadcrumbs"
import SearchArea from "../../components/posts/searchArea"
import Aside from "../../components/posts/aside"
import Category from "../../components/categoryComponent/Category"

import styles from "./category.module.scss"

class CategoryTemplate extends Component {
  render() {
    console.log()
    const category = this.props.data.wpCategory
    return (
      <Layout>
        <SEO
          title={category.seo.title}
          description={category.seo.opengraphDescription}
        />
        <div className={styles.wrapper}>
          <Breadcrumbs breadcrumbsArr={category.seo.breadcrumbs} />
          <div className={styles.headerAndSearchWrapper}>
            <h1
              dangerouslySetInnerHTML={{
                __html: category.name,
              }}
              className={styles.mainTitle}
            />
            <SearchArea />
          </div>
          <div className={styles.categoryWrapper}>
            <Category posts={category.posts} />
            <Aside />
          </div>
        </div>
      </Layout>
    )
  }
}

export default CategoryTemplate

export const CategoryQuery = graphql`
  query($id: String!) {
    wpCategory(id: { eq: $id }) {
      databaseId
      link
      name
      seo {
        title
        opengraphDescription
        breadcrumbs {
          text
          url
        }
      }
      posts {
        nodes {
          id
          databaseId
          date(formatString: "L", locale: "ru")
          uri
          author {
            node {
              name
              uri
              firstName
              lastName
            }
          }
          title
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          tags {
            nodes {
              name
              uri
            }
          }
        }
      }
    }
  }
`
