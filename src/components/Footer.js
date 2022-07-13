import { Link } from "gatsby"
import React from "react"

import { images } from ".././images"

import styles from "./Footer.module.css"

const Footer = () => {
  const footerMenuItems = [
    { name: "Разработка сайтов", url: "/razrabotka-sajtov/" },
    { name: "SEO", url: "/seo/" },
    { name: "SMM", url: "/smm/" },
    { name: "PPC", url: "/ppc/" },
    { name: "Брендинг и дизайн", url: "/brending-i-dizajn/" },
    { name: "Разработка приложений", url: "/razrabotka-prilozhenij/" },
    { name: "Прочие услуги", url: "/prochie-uslugi/" },
    { name: "О нас", url: "/o-nas/" },
  ]
  const itemsFooter = footerMenuItems.map((footerItems, index) => {
    return (
      <div key={index} className={styles.text}>
        <Link to={footerItems.url}>{footerItems.name}</Link>
      </div>
    )
  })

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
            <div className={styles.text}>
              <a href="tel:+375333244000">+375 (33) 32-44-000</a>
            </div>
            <div className={styles.text}>
              <a href="mailto:info@bpm-cloud.by">info@bpm-cloud.by</a>
            </div>
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
        <div className={styles.boxTwo}>{itemsFooter}</div>
        <div className={styles.bottom}>
          <span>© 2010-2021 bpm-cloud.by</span>
          <span>
            <a>Политика конфиденциальности</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
