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

const KeysBoxs = ({casesNumber}) => {
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
  // console.log(casesNumber)
  return (
    <div className={styles.wrapperKeys}>
      {data.allWpPost.nodes.map((item, index) => {
        const divStyle = {
          backgroundImage: `url(${item.featuredImage.node.sourceUrl})`, //sourceUrl url(https://wp-server.bpm-cloud.by/${item.featuredImage.node.uri})
        }
        return (
          <Link to={item.uri}
            key={item.id}
            className={classnames(styles.box, {[styles.blockNone]: casesNumber && casesNumber > index})}
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
          </Link>
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

