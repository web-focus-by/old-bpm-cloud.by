import React from "react"
import style from "./otherPostsArea.module.scss"
import Tags from "./tags"
import { Link, useStaticQuery, graphql } from "gatsby"

const OtherPostsArea = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "news" } } } }
        }
        sort: { fields: date, order: DESC }
        limit: 3
      ) {
        nodes {
          id
          title
          author {
            node {
              name
            }
          }
          categories {
            nodes {
              name
            }
          }
          date(formatString: "L", locale: "ru")
          featuredImage {
            node {
              sourceUrl
            }
          }
          excerpt
          uri
          tags {
            nodes {
              name
              uri
              id
            }
          }
        }
      }
    }
  `)

  const OtherPostsAreaContent = data.allWpPost.nodes.map(item => {
    const backgroundImageUrl = `url(${item.featuredImage.node.sourceUrl})`
    return (
      <div key={item.id} className={style.itemWrapper}>
        <div
          className={style.postImage}
          style={{ backgroundImage: backgroundImageUrl }}
        >
          <Tags tagsArr={item.tags.nodes} />
        </div>
        <div className={style.textArea}>
          <Link to={item.uri}>
            <h3 className={style.title}>{item.title}</h3>
          </Link>
          <div
            dangerouslySetInnerHTML={{
              __html: item.excerpt.split("").slice(0, 110).join("") + "...",
            }}
            className={style.content}
          ></div>
          <div className={style.authorArea}>
            <div>Автор: {item.author.node.name}</div>
            <div>{item.date}</div>
          </div>
        </div>
      </div>
    )
  })
  return <div className={style.wrapper}>{OtherPostsAreaContent}</div>
}

export default OtherPostsArea
