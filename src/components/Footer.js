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
            <div className={styles.text}>+375 (ХХ) ХХХ-ХХ-ХХ</div>
            <div className={styles.text}>info@bpmcloud.by</div>
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
          <div className={styles.text}>Разработка сайтов</div>
          <div className={styles.text}>Seo</div>
          <div className={styles.text}>SMM</div>
          <div className={styles.text}>PPC</div>
          <div className={styles.text}>Брендинг и дизайн</div>
          <div className={styles.text}>Разработка приложений</div>
          <div className={styles.text}>Прочие услуги</div>
          <div className={styles.text}>О нас</div>
        </div>
        <div className={styles.bottom} style={{ margin: "0px" }}>
          © 2020 bpm-cloud.by
        </div>
      </div>
    </div>
  )
}

export default Footer
