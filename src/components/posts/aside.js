import React from "react"
import style from "./aside.module.scss"
import AsideArticle from "./asideArticle"
import AsideNews from "./asideNews"
import TagsArea from "./tagsArea"
import { useStaticQuery, qraphql, Link } from "gatsby"

const Aside = ({}) => {
  const data = useStaticQuery(graphql`
    {
      allWpCategory(filter: { name: { in: ["Статьи", "news"] } }) {
        nodes {
          name
          posts {
            nodes {
              tags {
                nodes {
                  name
                  id
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <aside className={style.wrapper}>
      <div className={style.title}>Статьи</div>
      <div className={style.tagsArea}>
        <TagsArea tagsArr={data.allWpCategory.nodes[1]} />
      </div>
      <div className={style.articleArea}>
        <AsideArticle />
      </div>
      <div className={style.title}>Новости</div>
      <div className={style.tagsArea}>
        <TagsArea tagsArr={data.allWpCategory.nodes[0]} isNews={true} />
      </div>
      <div className={style.articleArea}>
        <AsideNews />
      </div>
    </aside>
  )
}

export default Aside
