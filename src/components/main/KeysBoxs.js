import React from "react"
import classnames from "classnames"
import { ButtonGreen, ButtonSmall } from "../buttons"
import styles from "./KeysBoxs.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"

function tagsArea(arr) {
  const tags = arr.length > 3 ? arr.slice(0, 3) : arr
  return tags.map(tag => {
    return (
      <ButtonSmall
        grey
        className={classnames(styles.buttonItem, styles.button)}
        key={tag.id}
      >
        <Link to={tag.uri}>{tag.name}</Link>
      </ButtonSmall>
    )
  })
}
const customGradient = {
  cG9zdDoyMjMy: {
    background: `linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 46.35%)`,
  },
  cG9zdDoyMjUy: {
    background: `linear-gradient(180deg, #262626 0%, rgba(0, 0, 0, 0) 46.35%)`,
  },
}
const customBG = {
  cG9zdDoyMjYw: {
    backgroundColor: `var(--greenBG-background)`,
  },
}
const customImgSettings = {
  cG9zdDoyMjYw: {
    right: `20%`,
    bottom: `20%`,
    top: `unset`,
    left: `unset`,
    width: `50%`,
    height: `50%`,
  },
}

const KeysBoxs = ({ casesNumber }) => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "cases" } } } }
        }
        sort: { order: DESC, fields: date }
        limit: 8
      ) {
        nodes {
          id
          uri
          tags {
            nodes {
              id
              name
              uri
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
        let gradientStyle
        let bgStyle
        let ImgSettings
        if (Object.keys(customGradient).includes(item.id)) {
          gradientStyle = customGradient[item.id]
        }
        if (Object.keys(customBG).includes(item.id)) {
          ImgSettings = customImgSettings[item.id]
          bgStyle = customBG[item.id]
        }
        // const divStyle = {
        //   backgroundImage: `url(${item.featuredImage.node.sourceUrl})`, //sourceUrl url(https://wp-server.bpm-cloud.by/${item.featuredImage.node.uri})
        // }
        return (
          <div
            className={classnames(styles.caseWrapper, {
              [styles.blockNone]: casesNumber && casesNumber > index,
            })}
            key={item.id}
            style={bgStyle}
          >
            <Link to={item.uri} className={classnames(styles.box)}>
              <div className={styles.gradient} style={gradientStyle}></div>
              <img
                className={styles.caseBgImg}
                src={item.featuredImage.node.sourceUrl}
                style={ImgSettings}
              />
              <div className={classnames(styles.title, styles.text)}>Кейсы</div>
              <h3 className={classnames(styles.maneCase, styles.text)}>
                {item.title}
              </h3>
            </Link>
            <div className={styles.tagAreaWrapper}>
              {tagsArea(item.tags.nodes)}
            </div>
          </div>
        )
      })}

      <div className={classnames(styles.caseWrapper, styles.boxLast)}>
        <div className={classnames(styles.titleLast)}>Все кейсы</div>
        <ButtonGreen className={classnames(styles.button, styles.lastButton)}>
          смотреть все
        </ButtonGreen>
      </div>
    </div>
  )
}

export default KeysBoxs
