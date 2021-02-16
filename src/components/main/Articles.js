import React from "react"
import { ButtonGreen, ButtonSmall } from "../buttons"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "./Articles.module.css"

const data = [
  {
    title: "НАЗВАНИЕ СТАТЬИ",
    text:
      "Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я. ",
  },
  {
    title: "НАЗВАНИЕ СТАТЬИ",
    text:
      "Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я.",
  },
  {
    title: "НАЗВАНИЕ СТАТЬИ",
    text:
      "Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я. ",
  },
]


const Article = ({ title, text, count }) => {
  const data = useStaticQuery(graphql`
  {
    allWpPost(filter: {categories: {nodes: {elemMatch: {name: {in:["Статьи", "news"]}}}}}, sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        id
        author {
          node {
            name
          }
        }
        date(formatString: "L", locale: "ru")
        featuredImage {
          node {
            uri
          }
        }
        title
        excerpt
        uri
        tags {
          nodes {
            name
          }
        }
      }
    }
  }
  `)
  console.log(data.allWpPost.nodes[count].featuredImage.node.uri)
  const divStyle = {
    backgroundImage: `url(https://wp-server.bpm-cloud.by/${data.allWpPost.nodes[count].featuredImage.node.uri})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  
  const tag = data.allWpPost.nodes[count].tags.nodes.length !== 0 ? data.allWpPost.nodes[count].tags.nodes[0].name : '#интересное'
  return (
    <div className={styles.wrapArticle}>
      <div className={styles.BoxImg} style={divStyle}>
        <ButtonSmall grey className={styles.buttonImg} displayNone>
          {tag}
        </ButtonSmall>
      </div>
      <div className={styles.descArticle}>
        <div className={styles.titleArticle}>{data.allWpPost.nodes[count].title}</div>
        <div className={styles.textArticle} dangerouslySetInnerHTML={{ __html: data.allWpPost.nodes[count].excerpt }}></div>
        <div className={styles.footerArticle}>
          <div className={styles.avtor}>Автор: {data.allWpPost.nodes[count].author.node.name}</div>
          <div className={styles.date}>{data.allWpPost.nodes[count].date}</div>
          <Link to={`${data.allWpPost.nodes[count].uri}`}><ButtonSmall red className={styles.buttonDetailed}>подробнее</ButtonSmall></Link>
        </div>
      </div>
    </div>
  )
}

const Articles = () => {
  return (
    <div className={styles.wrapperArticles}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.title}>Интересное</div>
          <ButtonGreen
            className={styles.bittonTitle}
          >
            все статьи и новости
          </ButtonGreen>
        </div>
        <div className={styles.Articles}>
          {(data || []).map((i, index) => (
            <Article key={index} title={i.title} text={i.text} count={index}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Articles
