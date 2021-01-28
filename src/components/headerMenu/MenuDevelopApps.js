import React, { useState } from "react"
import classnames from "classnames"

import styles from "./MenuDevelopApps.module.css"

const MenuDevelopApps = () => {
  const [active, setActive] = useState(0)

  const handlerShowMenu = itemCase => {
    setActive(itemCase)
  }

  const getMenu = active => {
    switch (active) {
      default:
        return ""
    }
  }

  return (
    <div className={styles.menuDevelopApps}>
      <div className={styles.box}>
        <div
          onMouseOver={() => handlerShowMenu(1)}
          className={classnames(styles.item, {
            [styles.active]: active === 1,
          })}
        >
          Разработка приложений на Android
        </div>
        <div
          onMouseOver={() => handlerShowMenu(2)}
          className={classnames(styles.item, {
            [styles.active]: active === 2,
          })}
        >
          Разработка приложений на IOS
        </div>
      </div>
      {getMenu(active)}
    </div>
  )
}

export default MenuDevelopApps
