import React from "react"
import { ButtonGreen, ButtonSmall } from "../buttons"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useMediaQuery } from "react-responsive"
import styles from "./Articles.module.scss"
import _ from "lodash"

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
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { name: { in: ["Статьи", "news"] } } }
          }
        }
        sort: { fields: date, order: DESC }
        limit: 3
      ) {
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
              sourceUrl
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
  const divStyle = {
    backgroundImage: `url(${data?.allWpPost?.nodes[count]?.featuredImage?.node?.sourceUrl ?? 'https://wp-server-bpm-cloud.webfocus.by/wp-content/uploads/2021/02/Frame206.svg'})`, // url(https://wp-server.bpm-cloud.by/${data.allWpPost.nodes[count].featuredImage.node.uri})
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }

  const isDesktop = useMediaQuery({
    query: "(max-width: 950px)",
  })

  const tag =
    data.allWpPost.nodes[count].tags.nodes.length !== 0
      ? data.allWpPost.nodes[count].tags.nodes[0].name
      : "#интересное"

  let postExcerpt = data.allWpPost.nodes[count].excerpt.split("p>")
  // console.log(postExcerpt[1])
  // postExcerpt[1] = _.concat(
  //   _.dropRight(postExcerpt[1].split(" "), 30),
  //   postExcerpt[1]
  //     .split(" ")
  //     .slice(
  //       postExcerpt[1].split(" ").length - 2,
  //       postExcerpt[1].split(" ").length
  //     )
  // ).join(" ")
  // console.log(postExcerpt[1])
  return (
    <div className={styles.wrapArticle}>
      <div className={styles.BoxImg} style={divStyle}>
      </div>
      <div className={styles.descArticle}>
        <Link
          className={styles.titleArticle}
          to={data.allWpPost.nodes[count].uri}
        >
          {data.allWpPost.nodes[count].title}
        </Link>
        <ButtonSmall grey className={styles.buttonImg} displayNone>
          {tag}
        </ButtonSmall>
        <div
          className={styles.textArticle}
          dangerouslySetInnerHTML={{
            __html: postExcerpt.join("p>"),
          }}
        ></div>
        <div className={styles.footerArticle}>
          <div className={styles.avtor}>
            Автор: {data.allWpPost.nodes[count].author.node.name}
          </div>
          <div className={styles.date}>{data.allWpPost.nodes[count].date}</div>
        </div>
      </div>
      {isDesktop && (
        <Link
          to={data.allWpPost.nodes[count].uri}
          className={styles.laptopAndMobileLink}
        ></Link>
      )}
    </div>
  )
}

const Articles = () => {
  return (
    <div className={styles.wrapperArticles}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h2 className={styles.title}>Интересное</h2>
          <ButtonSmall red className={styles.bittonTitle}>
            <Link to={"/category/stati/"}>все статьи и новости</Link>
          </ButtonSmall>
        </div>
        <div className={styles.Articles}>
          {(data || []).map((i, index) => (
            <Article key={index} title={i.title} text={i.text} count={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Articles
