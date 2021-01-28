import React, { useState } from "react"
import classnames from "classnames"

import styles from "./menuThree.module.css"

const MenuThree = () => {
  const [active, setActive] = useState(0)

  const handlerShowMenu = itemCase => {
    setActive(itemCase)
  }

  const getMenuThree = active => {
    switch (active) {
      case 1:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div>Лендинг пейдж</div>
              <div>Сайт-визитка</div>
              <div>Корпоративный сайт</div>
              <div>Сайт-каталог</div>
              <div>Интернет-магазин</div>
              <div>Информационный сайт</div>
              <div>Сайт “Эконом”</div>
              <div>Сайта-портал</div>
              <div>Шаблонный онлайн-магазин</div>
            </div>
            <div className={styles.column}>
              <div>Разработка сайта на Битрикс</div>
              <div>Разработка сайта на WordPress</div>
              <div>Разработка сайта на OpenCart</div>
              <div>Разработка сайта на Joomla</div>
              <div>Разработка сайта на Drupal</div>
              <div>Разработка сайта на Wix</div>
              <div>Разработка сайта на Tilda</div>
            </div>
            <div className={styles.column}>
              <div>Адаптивная (мобильная версия)</div>
              <div>Модернизация сайта</div>
              <div>Перенос сайта на другую CMS</div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div>Онлайн-калькулятор</div>
              <div>Интеграция сайта с 1С</div>
              <div>Разработка формы обратной связи</div>
              <div>Разработка формы оставить заявку</div>
              <div>Разработка блока для комментариев</div>
            </div>
            <div className={styles.column}>
              <div>Разработка фотогалереи</div>
              <div>Разработка новостного блока</div>
              <div>Разработка блока с отзывами клиентов</div>
              <div>Разработка подписки и рассылки материалов</div>
              <div>Разработка специализированных блоков</div>
            </div>
            <div className={styles.column}>
              <div></div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div>Лицензия на 1С Битрикс</div>
            </div>
            <div className={styles.column}>
              <div>Лицензия на Битрикс24</div>
            </div>
            <div className={styles.column}>
              <div>Лицензия на AmoCRM</div>
            </div>
          </div>
        )
      case 4:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div>Готовые сайты на Битрикс</div>
              <div>Готовые сайты на OpenCart</div>
              <div>Готовые сайты на WordPress</div>
              <div>Готовые сайты на Joomla</div>
              <div>Готовые сайты на ModX</div>
            </div>
            <div className={styles.column}>
              <div>Готовый блог</div>
              <div>Готовый интернет-магазин</div>
              <div>Интернет-магазин одежды</div>
              <div> Интернет-магазин игрушек</div>
              <div> Интернет-магазин автозапчастей</div>
            </div>
            <div className={styles.column}>
              <div></div>
            </div>
          </div>
        )
      default:
        return ""
    }
  }

  return (
    <div className={styles.menuThree}>
      <div className={styles.box}>
        <div
          onMouseOver={() => handlerShowMenu(1)}
          className={classnames(styles.item, {
            [styles.active]: active === 1,
          })}
        >
          Создание сайта “под ключ”
        </div>
        <div
          onMouseOver={() => handlerShowMenu(2)}
          className={classnames(styles.item, {
            [styles.active]: active === 2,
          })}
        >
          Разработка програмного модуля для сайта
        </div>
        <div
          onMouseOver={() => handlerShowMenu(3)}
          className={classnames(styles.item, {
            [styles.active]: active === 3,
          })}
        >
          Лицензирование
        </div>
        <div
          onMouseOver={() => handlerShowMenu(4)}
          className={classnames(styles.item, {
            [styles.active]: active === 4,
          })}
        >
          Готовые сайты
        </div>
      </div>
      {getMenuThree(active)}
    </div>
  )
}

export default MenuThree
