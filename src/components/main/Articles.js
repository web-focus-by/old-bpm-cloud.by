import React from "react"
import { ButtonGreen, ButtonSmall } from "../buttons"

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

const Article = ({ title, text }) => {
  return (
    <div className={styles.wrapArticle}>
      <div className={styles.BoxImg}>
        <ButtonSmall grey className={styles.buttonImg}>
          #новости
        </ButtonSmall>
      </div>
      <div className={styles.descArticle}>
        <div className={styles.titleArticle}>{title}</div>
        <div className={styles.textArticle}>{text}</div>
        <div className={styles.footerArticle}>
          <div className={styles.avtor}>Автор:</div>
          <div className={styles.date}>21.01.19</div>
          <ButtonSmall red>подробнее</ButtonSmall>
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
            height="36px"
            width="250px"
          >
            все статьи и новости
          </ButtonGreen>
        </div>
        <div className={styles.Articles}>
          {(data || []).map((i, index) => (
            <Article key={index} title={i.title} text={i.text} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Articles
