import React, { useState } from "react"
import classnames from "classnames"
import { Link, useStaticQuery, graphql } from "gatsby"
import { flatListToHierarchical } from "../utils/utils"
import style from "./mainBlock.module.scss"
import { images } from "../../images"
import { element } from "prop-types"

const MainBlock = ({ currentPage }) => {
  let customArr = [
    { name: "Разработка сайтов", url: "/razrabotka-sajtov/" },
    { name: "SEO-продвижение", url: "/seo/" },
    { name: "Брендинг и дизайн", url: "/brending-i-dizajn/" },
    { name: "Контекстная реклама", url: "/ppc/" },
    { name: "SMM-продвижение", url: "/smm/" },
    { name: "Разработка приложений", url: "/razrabotka-prilozhenij/" },
  ]
  console.log(currentPage)
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
