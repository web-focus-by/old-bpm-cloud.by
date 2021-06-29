import React from "react"

import { images } from "../../images"

import styles from "./AboutUs.module.scss"

const AboutUs = () => {
  return (
    <div className={styles.wrapperAboutUs}>
      <div className={styles.photo}>
        <img src={images.DSC_0290} alt="" />
        <img src={images.DSC_0394} alt="" />
        <img src={images.DSC_0356} alt="" />
        <img src={images.DSC_0442} alt="" />
        <img src={images.DSC_0466} alt="" />
        <img src={images.DSC_0379} alt="" />
      </div>
      <div className={styles.description}>
        <h2 className={styles.title}>О нас</h2>
        <div className={styles.box}>
          <div className={styles.text}>
            Digital-агентство «BPM Cloud» – это комплексный подход к
            интернет-маркетингу. Под знаменем компании собрались специалисты
            различных направлений, что позволяет с успехом справляться даже с
            проектами повышенной сложности. Мы работаем с представителями сферы
            услуг, риелторами, строителями и т.д. У нас накоплен бесценный опыт,
            который мы готовы использовать на Ваше благо.
          </div>
          <div>{"\n"}</div>
          <div className={styles.text}>
            Создание сайта – только первый шаг в онлайн-мире. Важно организовать
            действенное продвижение продукта в Глобальной сети. Предоставляем
            услуги бизнесу так, чтобы был ощутим осязаемый результат. Никогда не
            подходим шаблонно, что позволяет добиваться хороших показателей.
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
