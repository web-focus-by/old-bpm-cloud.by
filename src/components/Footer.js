import React from "react"

import { images } from ".././images"

import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.wrapperFooter}>
      <div className={styles.container}>
        <div className={styles.boxOne}>
          <img
            src={images.BpmFooter}
            className={styles.bpmIcon}
            alt=""
            width="443px"
            height="169px"
          />
          <div className={styles.wrapContacts}>
            <div className={styles.title}>Контакты</div>
            <div className={styles.text}><a href='tel:+375293244000'>+375 (29) 32-44-000</a></div>
            <div className={styles.text}><a href='mailto:info@bpm-cloud.by'>info@bpm-cloud.by</a></div>
            <div className={styles.text}>
              Пр-т Независимости, дом 77, офис 53
            </div>
            <div className={styles.text}>
              Время работы пн-пт: с 9:00 до 19:00
            </div>
            <div className={styles.text}>
              Приём звоноков ежедневно с 8:00 до 22:00
            </div>
          </div>
        </div>
        <div className={styles.boxTwo}>
          <div className={styles.text}><a>Разработка сайтов</a></div>
          <div className={styles.text}><a>SEO</a></div>
          <div className={styles.text}><a>SMM</a></div>
          <div className={styles.text}><a>PPC</a></div>
          <div className={styles.text}><a>Брендинг и дизайн</a></div>
          <div className={styles.text}><a>Разработка приложений</a></div>
          <div className={styles.text}><a>Прочие услуги</a></div>
          <div className={styles.text}><a>О нас</a></div>
        </div>
        <div className={styles.bottom}>
          <span>© 2010-2021 bpm-cloud.by</span>
          <span><a>Политика конфиденциальности</a></span>
        </div>
      </div>
    </div>
  )
}

export default Footer
