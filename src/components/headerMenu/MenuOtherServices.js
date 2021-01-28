import React, { useState } from "react"
import classnames from "classnames"

import styles from "./MenuOtherServices.module.css"

const MenuOtherServices = () => {
  const [active, setActive] = useState(0)

  const handlerShowMenu = itemCase => {
    setActive(itemCase)
  }

  const getMenu = active => {
    switch (active) {
      case 2:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div> Тестирование сайта</div>
              <div> Функциональное тестирование</div>
              <div> Тестирование удобства пользователей</div>
              <div> Тестирование производительности</div>
              <div> Тестирование интерфейса пользователя (UI testing)</div>
            </div>
            <div className={styles.column}>
              <div> Тестирование безопасности сайта</div>
              <div> Нагрузочное тестирование сайта</div>
              <div> Оптимизация скорости загрузки сайта</div>
              <div> Вирусы на сайте: поиск и удаление</div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div> Управление репутацией в поисковых системах</div>
              <div> Управление репутаций в социальных сетях</div>
              <div> Управление репутацией персоны</div>
            </div>
            <div className={styles.column}>
              <div> Управление репутацией бренда</div>
              <div> Управление репутацией компании</div>
              <div> Крауд-маркетинг</div>
            </div>
          </div>
        )
      case 4:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div>Рассылка в мессенджерах</div>
              <div>Настройка push-уведомлений</div>
            </div>
            <div className={styles.column}>
              <div>Рассылка e-mail писем</div>
              <div>Рассылка SMS-сообщений</div>
            </div>
          </div>
        )
      case 5:
        return (
          <div className={styles.menuFour}>
            <div className={styles.column}>
              <div> SEO-копирайтинг</div>
              <div>Рерайтинг</div>
              <div>Продающие тексты для сайтов</div>
              <div>Наполнение сайтов контентом</div>
              <div>LSI-копирайтинг</div>
              <div>Тексты для лендинг пейдж (landing page)</div>
            </div>
            <div className={styles.column}>
              <div>Тексты для E-mail рассылок</div>
              <div>Ньюсмейкинг – написание новостей</div>
              <div>Тексты для пресс-релизов</div>
              <div>Тексты для презентаций</div>
              <div>PR-статьи </div>
              <div>Создание слоганов</div>
            </div>
            <div className={styles.column}>
              <div>Сценарий для видеоролика </div>
              <div>Разработка УТП (уникального торгового предложения)</div>
              <div>Транскрибация текста</div>
              <div>Написание авторских текстов</div>
              <div>Написание обзоров</div>
              <div>Написание текстов «О компании»</div>
            </div>
          </div>
        )
      default:
        return ""
    }
  }

  return (
    <div className={styles.menuOtherServices}>
      <div className={styles.box}>
        <div
          onMouseOver={() => handlerShowMenu(1)}
          className={classnames(styles.item, {
            [styles.active]: active === 1,
          })}
        >
          Техническая поддержка сайта
        </div>
        <div
          onMouseOver={() => handlerShowMenu(2)}
          className={classnames(styles.item, {
            [styles.active]: active === 2,
          })}
        >
          Анализ и обслуживание сайта
        </div>
        <div
          onMouseOver={() => handlerShowMenu(3)}
          className={classnames(styles.item, {
            [styles.active]: active === 3,
          })}
        >
          SERM (Управление репутацией)
        </div>
        <div
          onMouseOver={() => handlerShowMenu(4)}
          className={classnames(styles.item, {
            [styles.active]: active === 4,
          })}
        >
          E-mail-маркетинг
        </div>
        <div
          onMouseOver={() => handlerShowMenu(5)}
          className={classnames(styles.item, {
            [styles.active]: active === 5,
          })}
        >
          Копирайтинг
        </div>
      </div>
      {getMenu(active)}
    </div>
  )
}

export default MenuOtherServices
