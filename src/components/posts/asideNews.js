import React from "react"
import style from'./asideArticle.module.scss'
import {Link, useStaticQuery, graphql} from 'gatsby'

const  AsideNews = ({})=>{
    const data = useStaticQuery(graphql`
    {
        allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "news"}}}}}, sort: {fields: date, order: DESC}, limit: 10) {
          nodes {
            id
            author {
              node {
                name
              }
            }
            date(formatString: "L", locale: "ru")
            title
            uri
            tags {
              nodes {
                name
              }
            }
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
      
    `)
    const AsideNewsContent = data.allWpPost.nodes.map((post) => {
        let {date, uri, id, title} = post
        let author = post.author.node.name
        return(
            <div key={id} className={style.itemWrapper}>
                <div className={style.title}><Link to={uri}>{title}</Link></div>
                <div className={style.authorArea}>
                    <span>Автор: {author}</span>
                    <span>{date}</span>
                </div>
            </div>
        )
    })

    return(
        <div className={style.wrapper}>
            {AsideNewsContent}
        </div>
    )
}

export default AsideNews