import React, { useState } from "react"
import classnames from "classnames"

import styles from "./MenuSeo.module.css"

const MenuSeo = () => {
  const [active, setActive] = useState(0)

  const handlerShowMenu = itemCase => {
    setActive(itemCase)
  }

  const getMenuThree = active => {
    switch (active) {
      case 1:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}></div>
            <div className={styles.column}></div>
            <div className={styles.column}></div>
          </div>
        )
      case 2:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}> </div>
            <div className={styles.column}></div>
            <div className={styles.column}></div>
          </div>
        )
      case 3:
        return <div className={styles.menuFour}></div>
      case 4:
        return <div className={styles.menuFour}></div>
      case 5:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div> Технический аудит сайта</div>
              <div> sabiliti-аудит</div>
              <div> Комплексный аудит сайта</div>
            </div>
          </div>
        )
      case 6:
        return <div className={styles.menuFour}></div>
      case 7:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div>Продвижение сайта в Бресте</div>
              <div>Продвижение сайта в Витебске</div>
              <div>Продвижение сайта в Гомеле</div>
            </div>
            <div className={styles.column}>
              <div>Продвижение сайта в Гродно</div>
              <div>Продвижение сайта в Могилеве</div>
            </div>
          </div>
        )
      case 8:
        return <div className={styles.menuFour}></div>
      case 7:
        return <div className={styles.menuFour}></div>
      case 9:
        return <div className={styles.menuFour}></div>
      case 10:
        return <div className={styles.menuFour}></div>
      case 11:
        return <div className={styles.menuFour}></div>
      case 12:
        return <div className={styles.menuFour}></div>
      case 13:
        return <div className={styles.menuFour}></div>

      default:
        return ""
    }
  }

  return (
    <div className={styles.menuSeo}>
      <div className={styles.box}>
        <div
          onMouseOver={() => handlerShowMenu(1)}
          className={classnames(styles.item, {
            [styles.active]: active === 1,
          })}
        >
          Продвижение молодого сайта
        </div>
        <div
          onMouseOver={() => handlerShowMenu(2)}
          className={classnames(styles.item, {
            [styles.active]: active === 2,
          })}
        >
          Продвижение сайта по позициям
        </div>
        <div
          onMouseOver={() => handlerShowMenu(3)}
          className={classnames(styles.item, {
            [styles.active]: active === 3,
          })}
        >
          Продвижение сайта по трафику
        </div>
        <div
          onMouseOver={() => handlerShowMenu(4)}
          className={classnames(styles.item, {
            [styles.active]: active === 4,
          })}
        >
          Разовое SEO продвижение
        </div>
      </div>
      <div className={styles.box}>
        <div
          onMouseOver={() => handlerShowMenu(6)}
          className={classnames(styles.item, {
            [styles.active]: active === 6,
          })}
        >
          SEO поддержка сайта
        </div>

        <div
          onMouseOver={() => handlerShowMenu(8)}
          className={classnames(styles.item, {
            [styles.active]: active === 8,
          })}
        >
          Продвижение сайта в Яндекс
        </div>
        <div
          onMouseOver={() => handlerShowMenu(9)}
          className={classnames(styles.item, {
            [styles.active]: active === 9,
          })}
        >
          Продвижение сайта в Google
        </div>
        <div
          onMouseOver={() => handlerShowMenu(10)}
          className={classnames(styles.item, {
            [styles.active]: active === 10,
          })}
        >
          Составление семантического ядра
        </div>
      </div>
      <div className={styles.box}>
        <div
          onMouseOver={() => handlerShowMenu(11)}
          className={classnames(styles.item, {
            [styles.active]: active === 11,
          })}
        >
          Продвижение лендинга
        </div>
        <div
          onMouseOver={() => handlerShowMenu(12)}
          className={classnames(styles.item, {
            [styles.active]: active === 12,
          })}
        >
          Разработка контент-стратегии
        </div>
        <div
          onMouseOver={() => handlerShowMenu(13)}
          className={classnames(styles.item, {
            [styles.active]: active === 13,
          })}
        >
          Анализ конкурентов
        </div>
        <div
          onMouseOver={() => handlerShowMenu(5)}
          className={classnames(styles.item, {
            [styles.active]: active === 5,
          })}
        >
          SEO-аудит сайта
        </div>
        <div
          onMouseOver={() => handlerShowMenu(7)}
          className={classnames(styles.item, {
            [styles.active]: active === 7,
          })}
        >
          Региональное продвижение сайта
        </div>
      </div>
      {getMenuThree(active)}
    </div>
  )
}

export default MenuSeo
