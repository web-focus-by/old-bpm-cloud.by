import React, { useState } from "react"
import classnames from "classnames"

import { images } from "../../images"
import styles from "./menuHeader.module.css"

import MenuTwo from "./MenuTwo"

const HeaderMenu = () => {
  const [showOne, setShowOne] = useState(false)

  const [active, setActive] = useState(0)

  const closeMenu = () => {
    setShowOne(false)
    setActive(0)
  }

  const handlerShowMenu = itemCase => {
    if (showOne === false) {
      setShowOne(!showOne)
      setActive(itemCase)
    }
    if (showOne === true) {
      return setActive(itemCase)
    }
  }

  const getMenuOne = active => {
    switch (active) {
      case 1:
        return <MenuTwo />
      case 2:
        return <div>2</div>
      case 3:
        return <div>3</div>
      case 4:
        return <div>4</div>
      case 5:
        return <div>5</div>
      default:
        return ""
    }
  }

  return (
    <div className={styles.menu}>
      <div
        onMouseOver={() => handlerShowMenu(1)}
        className={classnames(styles.item, { [styles.active]: active === 1 })}
      >
        Услуги
      </div>
      <div
        onMouseOver={() => handlerShowMenu(2)}
        className={classnames(styles.item, { [styles.active]: active === 2 })}
      >
        Кейсы
      </div>
      <div
        onMouseOver={() => handlerShowMenu(3)}
        className={classnames(styles.item, { [styles.active]: active === 3 })}
      >
        Цены
      </div>
      <div
        onMouseOver={() => handlerShowMenu(4)}
        className={classnames(styles.item, { [styles.active]: active === 4 })}
      >
        О нас
      </div>
      <div
        onMouseOver={() => handlerShowMenu(5)}
        className={classnames(styles.item, { [styles.active]: active === 5 })}
      >
        Интересное
      </div>
      {showOne && (
        <div className={styles.wrapper}>
          {getMenuOne(active)}
          <div className={styles.close}>
            <img
              onClick={closeMenu}
              src={images.CloseMenuHeader}
              alt=""
              height="25.8px"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default HeaderMenu
