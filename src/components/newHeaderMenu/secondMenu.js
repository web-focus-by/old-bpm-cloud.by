import React, { useState } from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import ThirdMenuItem from "./tirdMenuItem"
import style from "./secondMenu.module.scss"

const SecondMenu = ({ itemIndex, contetnArr, isShow }) => {
  const [isShowTirdMenu, setShowItems] = useState(isShow)
  const [active, setActive] = useState(0)

  const setShowActiveItems = (state, index) => {
    setShowItems(state)
    setActive(index)
  }

  const childernItems = (elem, index) => {
    return (
      <div
        onMouseOver={() => setShowActiveItems(true, index)}
        className={classnames(style.listItem, {
          [style.active]: active === index,
        })}
        key={elem.id}
      >
        <Link to={elem.path}>{elem.title}</Link>
      </div>
    )
  }

  const secondMenuContentTitle =
    itemIndex !== undefined && isShow ? (
      <div className={style.title}>{contetnArr[itemIndex].title}</div>
    ) : (
      false
    )
  const secondMenuContent =
    itemIndex !== undefined && isShow
      ? contetnArr[itemIndex].routes.map((item, index) =>
          childernItems(item, index)
        )
      : false

  return (
    <div className={style.wrapper}>
      <div className={style.secondMenuItems}>
        {secondMenuContentTitle}
        {secondMenuContent}
      </div>
      <ThirdMenuItem
        isShowTirdMenu={isShowTirdMenu}
        index={active}
        contetnArr={contetnArr[itemIndex].routes[active]}
        isShow={isShow}
      />
    </div>
  )
}

export default SecondMenu

//          {isShow && (active == index) && (<div>{elem.routes.map(item => childernItems(item))}</div>)}
