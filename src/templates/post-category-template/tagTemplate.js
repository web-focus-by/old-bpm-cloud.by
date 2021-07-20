import React, { Component } from "react"
import PropTypes from "prop-types"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Breadcrumbs from "../../components/posts/breadcrumbs"
import SearchArea from "../../components/posts/searchArea"
import Aside from "../../components/posts/aside"
import Category from "../../components/categoryComponent/Category"

import styles from "./category.module.scss"

class TagTemplate extends Component {
  render() {
    console.log()
    const category = this.props.data.wpTag
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
          <div className={styles.someText}>
            <h2>
              Полезные статьи про digital для всех, кто работает и ищет клиентов
              в Интернете
            </h2>
            <div className={styles.textWrapper}>
              <p>
                Агентство онлайн-маркетинга «БПМ Клауд» – не просто замкнутый
                коллектив. Мы — сплоченная команда, и нам известно, что успех
                приходит только к тем, кто постоянно развивается и стремится
                узнать что-то новое.
              </p>
              <p>
                Мы охотно обмениваемся друг с другом советами и лайфаками из
                собственной профессиональной области. А еще мы готовы делиться
                знаниями и нужной информацией с нашими клиентами, партнерами и
                всеми, кто посещает наш сайт.
              </p>
              <p>
                В этом разделе мы регулярно публикуем полезные статьи на темы
                онлайн-продвижения, написанные понятным языком. Понравится даже
                тем, кто еще только начинает знакомство с миром
                интернет-маркетинга. Полюбите digital так, как любим его мы!{" "}
              </p>
              <p>
                Наша цель — помогать клиентам, делать контент Байнета лучше и
                содержательнее. Здесь мы раскрываем нашим читателям базовые
                принципы и особенности различных инструментов
                интернет-маркетинга и секреты результативной работы с сайтами,
                социальными сетями, и сервисами, которые будут полезны каждому
                бизнесу.{" "}
              </p>
              <p>
                Заходите в раздел «Статьи» и узнайте больше о том, как работают
                различные инструменты. Обещаем регулярно радовать Вас
                интересными публикациями на актуальные темы.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default TagTemplate

export const CategoryQuery = graphql`
  query($id: String!) {
    wpTag(id: { eq: $id }) {
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
