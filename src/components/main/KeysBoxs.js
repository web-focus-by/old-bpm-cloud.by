import React from "react"
import classnames from "classnames"
import { ButtonGreen, ButtonSmall } from "../buttons"
import styles from "./KeysBoxs.module.css"
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
        console.log(item.tags.nodes)
        const divStyle = {
          backgroundImage: `url(https://wp-server.bpm-cloud.by/${item.featuredImage.node.uri})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }
        return (

          <div
            key={item.id}
            className={classnames(styles.box)}
            style={divStyle}
          >
          <Link to={`${item.uri}`}>
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

