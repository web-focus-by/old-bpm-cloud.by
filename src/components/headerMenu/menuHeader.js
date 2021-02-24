import React, { useState } from "react"
import classnames from "classnames"
import {flatListToHierarchical} from "../utils/utils"
import { images } from "../../images"
import styles from "./menuHeader.module.css"
import {Link, useStaticQuery, graphql} from 'gatsby'
import MenuHeader from '../newHeaderMenu/menu'
import MenuTwo from "./MenuTwo"

const HeaderMenu = () => {
  const [showOne, setShowOne] = useState(false)

  const [active, setActive] = useState(0)

  const closeMenu = () => {
    document.querySelector('header').style.background = '#FBFAFA';
    document.querySelector('header>div:last-child').style.visibility = 'visible'
    setShowOne(false)
    setActive(0)
  }

  const getMenuData = useStaticQuery(graphql`{
    allWpMenuItem(
      sort: { fields: order, order: ASC }

    ) {
      nodes {
        id
        title: label
        path
        target
        parent: parentId
      }
    }
  }`)


let tree = flatListToHierarchical(getMenuData.allWpMenuItem.nodes, {
  idKey: "id",
  childrenKey: "routes",
  parentKey: "parent",
})
  console.log(tree)

  const handlerShowMenu = itemCase => {
    document.querySelector('header').style.background = 'white';
    document.querySelector('header>div:last-child').style.visibility = 'hidden'
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
        return <MenuHeader />
      default:
        return ""
    }
  }
  
  return (
    <div className={styles.menu}>
      <div className={styles.burgerMenu}>
        <img src={images.burgerMenu} alt="" />
      </div>
      <div
        onMouseOver={() => handlerShowMenu(1)}
        className={classnames(styles.item, { [styles.active]: active === 1 })}
      >
        Услуги
      </div>
      <div

        className={classnames(styles.item, { [styles.active]: active === 2 })}
      >
        Кейсы
      </div>
      <div

        className={classnames(styles.item, { [styles.active]: active === 3 })}
      >
        Цены
      </div>
      <div

        className={classnames(styles.item, { [styles.active]: active === 4 })}
      >
        О нас
      </div>
      <div

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
