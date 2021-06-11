import React from "react"
import style from "./tags.module.scss"
import { Link } from "gatsby"

const Tags = ({ tagsArr }) => {
  const TagsArea = tagsArr.slice(0, 3).map(tag => {
    let { name, uri, id } = tag
    return (
      <Link to={uri} key={id}>
        <div>
          <span>{name}</span>
        </div>
      </Link>
    )
  })

  return <div className={style.wrapper}>{TagsArea}</div>
}

export default Tags
