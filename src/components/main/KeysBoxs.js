import React from "react"
import classnames from "classnames"
import { ButtonGreen, ButtonSmall } from "../buttons"
import styles from "./KeysBoxs.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"

function tagsArea(arr){
  const tags = arr.length>2?arr.slpice(0, 2):arr;
  const tegsArr = tags.map(tag => {
    
  })
} 

const KeysBoxs = () => {
  const data = useStaticQuery(graphql`
  {
    allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "cases"}}}}}, sort: {order: DESC, fields: date}, limit: 8) {
      nodes {
        id
        uri
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            link
            sourceUrl
            id
            uri
          }
        }
        title
        categories {
          nodes {
            id
            name
          }
        }
      }
    }
  }
  `)
  return (
    <div className={styles.wrapperKeys}>
      {data.allWpPost.nodes.map((item) => {
        const divStyle = {
          backgroundImage: `url(${item.featuredImage.node.sourceUrl})`, //sourceUrl url(https://wp-server.bpm-cloud.by/${item.featuredImage.node.uri})
        }
        return (

          <div
            key={item.id}
            className={classnames(styles.box)}
          >
            <div
              className={styles.caseBgImg}
              style={divStyle}></div>
            <div className={styles.title}>Кейсы</div>
              <div
                className={classnames(styles.nameKeys)}
              >
                {item.title}
              </div>
              <ButtonSmall
                grey
                className={classnames(styles.button)}
              >
                {item.tags.nodes[0].name}
              </ButtonSmall>
              <div className={styles.linkWrapper}>
                <Link to={`${item.uri}`}>
                  <div className={styles.linkArrowWrapper}>
                    <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.0469 1.7002L53.0469 28.7002L26.0469 55.7002" stroke="white" strokeWidth="3"/>
                        <path d="M52.0469 28.7002L0.0468764 28.7002" stroke="white" strokeWidth="3"/>
                    </svg>
                  </div>
                </Link>
              </div>
          </div>
          
        )
      })}

      <div className={styles.boxLast}>
        <div className={classnames(styles.titleLast)}>Все кейсы</div>
        <ButtonGreen className={classnames(styles.button, styles.lastButton)}>смотреть все</ButtonGreen>
      </div>
    </div>
  )
}

export default KeysBoxs

