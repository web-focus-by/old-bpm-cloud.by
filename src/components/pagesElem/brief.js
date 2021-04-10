import React from "react"
import style from "./brief.module.scss"
import { Link } from "gatsby"
import ContactForm from "./contactFormTest"

const Brief = ({ text, cost }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.textWrapper}>
        <h2 className={style.title}>Заполните бриф</h2>
        <div className={style.subTitle}>
          Оставьте заявку, или свяжитесь с нами по контактному телефону
        </div>
        <a className={style.phone} href="tel:+375291234567">
          +375 (29) 123-45-67
        </a>
      </div>
      <div className={style.briefWrapper}>
        <ContactForm />
      </div>
    </div>
  )
}

export default Brief
