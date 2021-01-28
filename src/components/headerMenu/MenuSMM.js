import React, { useState } from "react"
import classnames from "classnames"

import styles from "./MenuSMM.module.css"

const MenuSMM = () => {
  const [active, setActive] = useState(0)

  const handlerShowMenu = itemCase => {
    setActive(itemCase)
  }

  const getMenu = active => {
    switch (active) {
      case 1:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div>
                Анализ и разработка контент-стратегии Instagram (Инстаграм)
              </div>
              <div> Создание дизайн-концепции Instagram (Инстаграм)</div>
              <div> Таргетированная реклама Instagram (Инстаграм)</div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div>Анализ и разработка контент-стратегии Вконтакте</div>
              <div> Создание дизайн-концепции Вконтакте </div>
              <div> Таргетированная реклама Вконтакте </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div>
                Анализ и разработка контент-стратегии Facebook (Фейсбук)
              </div>
              <div> Создание дизайн-концепции Facebook (Фейсбук)</div>
              <div> Таргетированная реклама Facebook (Фейсбук)</div>
            </div>
          </div>
        )
      case 4:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div>Анализ и разработка контент-стратегии Twitter (Твиттер)</div>
              <div> Создание дизайн-концепции Twitter (Твиттер)</div>
              <div> Таргетированная реклама Twitter (Твиттер)</div>
            </div>
          </div>
        )
      case 5:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div>Анализ и разработка контент-стратегии Одноклассники</div>
              <div> Создание дизайн-концепции Одноклассники</div>
              <div> Таргетированная реклама Одноклассники</div>
            </div>
          </div>
        )
      case 6:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div>Анализ и разработка контент-стратегии Youtube (Ютуб)</div>
              <div> Создание дизайн-концепции Youtube (Ютуб)</div>
              <div> Таргетированная реклама Youtube (Ютуб)</div>
            </div>
          </div>
        )
      case 7:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div>
                Анализ и разработка контент-стратегии Telegram (Телеграм)
              </div>
              <div> Создание дизайн-концепции Telegram (Телеграм)</div>
              <div> Таргетированная реклама Telegram (Телеграм)</div>
            </div>
          </div>
        )
      case 8:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div>
                Анализ и разработка контент-стратегии Pinterest (Пинтерест)
              </div>
              <div> Создание дизайн-концепции Pinterest (Пинтерест)</div>
              <div> Таргетированная реклама Pinterest (Пинтерест)</div>
            </div>
          </div>
        )
      case 9:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div>
                Анализ и разработка контент-стратегии inkedin (Линкедин)
              </div>
              <div> Создание дизайн-концепции inkedin (Линкедин)</div>
              <div> Таргетированная реклама inkedin (Линкедин)</div>
            </div>
          </div>
        )

      default:
        return ""
    }
  }

  return (
    <div className={styles.menuSMM}>
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
          Продвижение Вконтакте
        </div>
        <div
          onMouseOver={() => handlerShowMenu(3)}
          className={classnames(styles.item, {
            [styles.active]: active === 3,
          })}
        >
          Продвижение Facebook (Фейсбук)
        </div>
        <div
          onMouseOver={() => handlerShowMenu(4)}
          className={classnames(styles.item, {
            [styles.active]: active === 4,
          })}
        >
          Продвижение Twitter (Твиттер)
        </div>
      </div>
      <div className={styles.box}>
        <div
          onMouseOver={() => handlerShowMenu(5)}
          className={classnames(styles.item, {
            [styles.active]: active === 5,
          })}
        >
          Продвижение Одноклассники
        </div>
        <div
          onMouseOver={() => handlerShowMenu(6)}
          className={classnames(styles.item, {
            [styles.active]: active === 6,
          })}
        >
          Продвижение Youtube (Ютуб)
        </div>
        <div
          onMouseOver={() => handlerShowMenu(7)}
          className={classnames(styles.item, {
            [styles.active]: active === 7,
          })}
        >
          Продвижение Telegram (Телеграм)
        </div>
        <div
          onMouseOver={() => handlerShowMenu(8)}
          className={classnames(styles.item, {
            [styles.active]: active === 8,
          })}
        >
          Продвижение Pinterest (Пинтерест)
        </div>
        <div
          onMouseOver={() => handlerShowMenu(9)}
          className={classnames(styles.item, {
            [styles.active]: active === 9,
          })}
        >
          Продвижение Linkedin (Линкедин)
        </div>
      </div>
      {getMenu(active)}
    </div>
  )
}

export default MenuSMM
