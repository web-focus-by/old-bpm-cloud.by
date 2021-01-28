import React, { useState } from "react"
import classnames from "classnames"

import styles from "./MenuBrendingAndDisign.module.css"

const MenuBrendingAndDisign = () => {
  const [active, setActive] = useState(0)

  const handlerShowMenu = itemCase => {
    setActive(itemCase)
  }

  const getMenu = active => {
    switch (active) {
      case 6:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div> Разработка фирменного стиля</div>
              <div> Разработка логотипа и брендбука</div>
              <div> Дизайн коммерческих предложений</div>
              <div> Дизайн полиграфии</div>
              <div> Дизайн визитки</div>
            </div>
            <div className={styles.column}>
              <div> Дизайн флаера</div>
              <div> Дизайн буклета</div>
              <div> Дизайн раздаточного материала</div>
              <div> Дизайн каталога товаров</div>
            </div>
          </div>
        )
      case 7:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div> Дизайн отдельной страницы сайта</div>
              <div> Редизайн сайта</div>
              <div> Дизайн сайта-каталога</div>
              <div> Дизайн интерфейсов</div>
            </div>
            <div className={styles.column}>
              <div> Дизайн мобильной версии</div>
              <div> Прототипирование сайта</div>
              <div> Разработка дизайна иконок</div>
            </div>
          </div>
        )
      case 8:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div> Оформление Youtube</div>
              <div> Оформление Facebook</div>
              <div> Оформление Twitter</div>
            </div>
            <div className={styles.column}>
              <div> Оформление Instagram</div>
              <div> Оформление Вконтакте</div>
              <div> Оформление Одноклассников</div>
            </div>
          </div>
        )
      default:
        return ""
    }
  }

  return (
    <div className={styles.menuBrendingAndDisign}>
      <div className={styles.box}>
        <div
          onMouseOver={() => handlerShowMenu(1)}
          className={classnames(styles.item, {
            [styles.active]: active === 1,
          })}
        >
          Баннеры для рекламы
        </div>
        <div
          onMouseOver={() => handlerShowMenu(2)}
          className={classnames(styles.item, {
            [styles.active]: active === 2,
          })}
        >
          Дизайн презентаций
        </div>
        <div
          onMouseOver={() => handlerShowMenu(3)}
          className={classnames(styles.item, {
            [styles.active]: active === 3,
          })}
        >
          Дизайн иллюстрации
        </div>
        <div
          onMouseOver={() => handlerShowMenu(4)}
          className={classnames(styles.item, {
            [styles.active]: active === 4,
          })}
        >
          Ретушь фотографий
        </div>
      </div>
      <div className={styles.box}>
        <div
          onMouseOver={() => handlerShowMenu(5)}
          className={classnames(styles.item, {
            [styles.active]: active === 5,
          })}
        >
          Можтаж видео
        </div>
        <div
          onMouseOver={() => handlerShowMenu(6)}
          className={classnames(styles.item, {
            [styles.active]: active === 6,
          })}
        >
          Графический дизайн
        </div>
        <div
          onMouseOver={() => handlerShowMenu(7)}
          className={classnames(styles.item, {
            [styles.active]: active === 7,
          })}
        >
          Дизайн сайта
        </div>
        <div
          onMouseOver={() => handlerShowMenu(8)}
          className={classnames(styles.item, {
            [styles.active]: active === 8,
          })}
        >
          Дизайн социальных сетей
        </div>
      </div>
      {getMenu(active)}
    </div>
  )
}

export default MenuBrendingAndDisign
