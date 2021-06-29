import React from "react"
import classnames from "classnames"
import { Link } from "gatsby"
import style from "./mainBlock.module.scss"

const MainBlock = ({ currentPage }) => {
  let customArr = [
    { name: "Разработка сайтов", url: "/razrabotka-sajtov/" },
    { name: "SEO-продвижение", url: "/seo/" },
    { name: "Брендинг и дизайн", url: "/brending-i-dizajn/" },
    { name: "Контекстная реклама", url: "/ppc/" },
    { name: "SMM-продвижение", url: "/smm/" },
    { name: "Разработка приложений", url: "/razrabotka-prilozhenij/" },
  ]
  return (
    <div className={style.wrapper}>
      {customArr.map((e, i) => {
        return (
          <Link
            to={e.url}
            key={i}
            className={classnames(style.itemWrapper, {
              [style.active]: `/${currentPage}/` === e.url,
            })}
          >
            {e.name}
          </Link>
        )
      })}
    </div>
  )
}

export default MainBlock
