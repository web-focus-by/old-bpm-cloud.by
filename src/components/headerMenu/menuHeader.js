import React, { useState } from "react"
import { useMediaQuery } from 'react-responsive'
import classnames from "classnames"
import {flatListToHierarchical} from "../utils/utils"
import { images } from "../../images"
import styles from "./menuHeader.module.scss"
import {Link, useStaticQuery, graphql} from 'gatsby'
import MenuHeader from '../newHeaderMenu/menu'
import MobileMenu from './mobileMenu/mobileMenu'

const HeaderMenu = () => {
  const [showOne, setShowOne] = useState(false)
  const [isMobileMenuOpen, setShowMobileMenu] = useState(false)
  const [active, setActive] = useState(0)

  const closeMenu = () => {
    document.querySelector('header').style.background = '#FBFAFA';
    document.querySelector('header').style.minHeight = 'auto';
    document.querySelector('header>div:last-child').style.visibility = 'visible'
    setShowOne(false)
    setActive(0)
    isMobileMenuOpen && setShowMobileMenu(false);
  }

  const isDesckpotOrLaptop = useMediaQuery({
    query: '(min-width: 1050px)'
  })

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

  
  const handlerShowMenu = itemCase => {
    document.querySelector('header').style.background = 'white';
    document.querySelector('header').style.minHeight = '840px';
    document.querySelector('header>div:last-child').style.visibility = 'hidden'
    if (showOne === false) {
      setShowOne(!showOne)
      setActive(itemCase)
    }
    if (showOne === true) {

      return setActive(itemCase)
    }
  }

  const ShowMenu = ()=>{
    return(<div className={styles.menuTitleWrapper}>
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
    </div>)
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
      <div className={styles.burgerMenu} onMouseDown={() => setShowMobileMenu(!isMobileMenuOpen)}>
        {/* <img src={images.burgerMenu} alt="" /> */}
      </div>
      <ShowMenu />
      {!isDesckpotOrLaptop && (
        <div className={classnames(styles.mobileMenuWrapper, {[styles.showMobileMenu]: isMobileMenuOpen})}>
          {showOne && closeMenu()}
          <MobileMenu parantState = {isMobileMenuOpen} />
        </div>
      )}
      {showOne && (
        <div className={styles.wrapper}>
          {getMenuOne(active)}
          <div className={styles.close} onClick={closeMenu}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.335938" y="2.12109" width="3" height="33" transform="rotate(-45 0.335938 2.12109)" fill="#D1D9E3"/>
            <rect x="23.3359" y="0.121094" width="3" height="33" transform="rotate(45 23.3359 0.121094)" fill="#D1D9E3"/>
          </svg>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeaderMenu
