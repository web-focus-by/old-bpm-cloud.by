import React, { useState } from "react"
import classnames from "classnames"

import styles from "./MenuPPC.module.css"

const MenuPPC = () => {
  const [active, setActive] = useState(0)

  const handlerShowMenu = itemCase => {
    setActive(itemCase)
  }

  const getMenu = active => {
    switch (active) {
      case 12:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div> Смарт-баннеры в Яндекс Директ</div>
              <div> Баннеры на поиске в Яндекс Директ</div>
              <div> Аудиореклама на Яндекс.Музыке и Яндекс.Радио</div>
            </div>
          </div>
        )
      default:
        return ""
    }
  }

  return (
    <div className={styles.menuPPC}>
      <div className={styles.box}>
        <div
          onMouseOver={() => handlerShowMenu(1)}
          className={classnames(styles.item, {
            [styles.active]: active === 1,
          })}
        >
          Контекстная реклама в Google Ads
        </div>
        <div
          onMouseOver={() => handlerShowMenu(2)}
          className={classnames(styles.item, {
            [styles.active]: active === 2,
          })}
        >
          Контекстная реклама в Яндекс Директ{" "}
        </div>
        <div
          onMouseOver={() => handlerShowMenu(3)}
          className={classnames(styles.item, {
            [styles.active]: active === 3,
          })}
        >
          Разовая настройка контекстной рекламы
        </div>
        <div
          onMouseOver={() => handlerShowMenu(4)}
          className={classnames(styles.item, {
            [styles.active]: active === 4,
          })}
        >
          Ремаркетинг и ретаргетинг
        </div>
      </div>
      <div className={styles.box}>
        <div
          onMouseOver={() => handlerShowMenu(5)}
          className={classnames(styles.item, {
            [styles.active]: active === 5,
          })}
        >
          Аудит контекстной рекламы
        </div>
        <div
          onMouseOver={() => handlerShowMenu(6)}
          className={classnames(styles.item, {
            [styles.active]: active === 6,
          })}
        >
          Настройка веб-аналитики
        </div>
        <div
          onMouseOver={() => handlerShowMenu(7)}
          className={classnames(styles.item, {
            [styles.active]: active === 7,
          })}
        >
          Составление семантического ядра{" "}
        </div>
        <div
          onMouseOver={() => handlerShowMenu(8)}
          className={classnames(styles.item, {
            [styles.active]: active === 8,
          })}
        >
          Разработка рекламной стратегии
        </div>
      </div>
      <div className={styles.box}>
        <div
          onMouseOver={() => handlerShowMenu(9)}
          className={classnames(styles.item, {
            [styles.active]: active === 9,
          })}
        >
          Динамические объявления в Яндекс{" "}
        </div>
        <div
          onMouseOver={() => handlerShowMenu(10)}
          className={classnames(styles.item, {
            [styles.active]: active === 10,
          })}
        >
          Реклама в Gmail
        </div>
        <div
          onMouseOver={() => handlerShowMenu(11)}
          className={classnames(styles.item, {
            [styles.active]: active === 11,
          })}
        >
          Реклама в мобильных приложениях
        </div>
        <div
          onMouseOver={() => handlerShowMenu(12)}
          className={classnames(styles.item, {
            [styles.active]: active === 12,
          })}
        >
          Медийная реклама
        </div>
      </div>
      {getMenu(active)}
    </div>
  )
}

export default MenuPPC
