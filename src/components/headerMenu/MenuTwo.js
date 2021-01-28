import React, { useState } from "react"
import classnames from "classnames"

import styles from "./MenuTwo.module.css"
import MenuThree from "./menuThree"
import MenuSeo from "./MenuSeo"
import MenuSMM from "./MenuSMM"
import MenuPPC from "./MenuPPC"
import MenuBrendingAndDisign from "./MenuBrendingAndDisign"
import MenuOtherServices from "./MenuOtherServices"
import MenuDevelopApps from "./MenuDevelopApps"

const MenuTwo = () => {
  const [active, setActive] = useState(0)

  const handlerShowMenu = itemCase => {
    setActive(itemCase)
  }

  const getMenuTwo = active => {
    switch (active) {
      case 1:
        return <MenuThree />
      case 2:
        return <MenuSeo />
      case 3:
        return <MenuSMM />
      case 4:
        return <MenuPPC />
      case 5:
        return <MenuBrendingAndDisign />
      case 6:
        return <MenuDevelopApps />
      case 7:
        return <MenuOtherServices />
      default:
        return ""
    }
  }
  return (
    <div>
      <div className={styles.boxOne}>
        <div
          onMouseOver={() => handlerShowMenu(1)}
          className={classnames(styles.item, { [styles.active]: active === 1 })}
        >
          Разработка сайтов
        </div>
        <div
          onMouseOver={() => handlerShowMenu(2)}
          className={classnames(styles.item, { [styles.active]: active === 2 })}
        >
          SEO
        </div>
        <div
          onMouseOver={() => handlerShowMenu(3)}
          className={classnames(styles.item, { [styles.active]: active === 3 })}
        >
          SMM
        </div>
        <div
          onMouseOver={() => handlerShowMenu(4)}
          className={classnames(styles.item, { [styles.active]: active === 4 })}
        >
          PPC
        </div>
        <div
          onMouseOver={() => handlerShowMenu(5)}
          className={classnames(styles.item, { [styles.active]: active === 5 })}
        >
          Брендинг и дизайн
        </div>
        <div
          onMouseOver={() => handlerShowMenu(6)}
          className={classnames(styles.item, { [styles.active]: active === 6 })}
        >
          Разработка приложений
        </div>
        <div
          onMouseOver={() => handlerShowMenu(7)}
          className={classnames(styles.item, { [styles.active]: active === 7 })}
        >
          Прочие услуги
        </div>
      </div>
      {getMenuTwo(active)}
    </div>
  )
}

export default MenuTwo
