import React from "react"
import style from "./decsrptionContent.module.scss"
import { Link, animateScroll as scroll } from "react-scroll"

const DescriptionContent = ({ content }) => {
  let counter = 0

  const DescriptionContentItem = content.split("\n").map((elem, i) => {
    let content = elem.includes("<h2>") ? elem : "false"

    if (content !== "false") {
      counter++
      return (
        <div key={i} className={style.listItem}>
          <Link to={`${counter}`}>
            {counter + ". " + content.replace(/<\/?[^>]+>/g, "")}
          </Link>
        </div>
      )
    }
  })
  const filteredDescriptionContentArr = DescriptionContentItem.filter(function (
    x
  ) {
    return x !== undefined && x !== null
  })

  const additionalStyle =
    filteredDescriptionContentArr.length !== 0
      ? {
          display: "block",
        }
      : {
          display: "none",
        }

  return (
    <div className={style.wrapper} style={additionalStyle}>
      <div className={style.content}>
        <h3>Содержание:</h3>
        {filteredDescriptionContentArr}
      </div>
    </div>
  )
}

export default DescriptionContent
