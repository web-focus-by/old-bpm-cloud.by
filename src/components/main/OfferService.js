import React, { useState } from "react"
import classnames from "classnames"
import Animation from "./animation/Animation"

import styles from "./OfferService.module.css"

import { ButtonGreen } from "../buttons"

const numbers = [
  { number: "01", id: 1 },
  { number: "02", id: 2 },
  { number: "03", id: 3 },
  { number: "04", id: 4 },
  { number: "05", id: 5 },
  { number: "06", id: 6 },
  { number: "07", id: 7 },
  { number: "08", id: 8 },
  { number: "09", id: 9 },
]

/* const links = [
  { name: "SMM", url:'/smm/' },
  { name: "Разработка сайтов", url:'/razrabotka-sajtov/'  },
  { name: "Seo", url:'/seo/' },
  { name: "Главная", url:'/' },
  { name: "PPC", url:'/ppc/' },
  { name: "Брендинг и дизайн", url:'/brending-i-dizajn/' },
  { name: "Разработка приложений", url:'/razrabotka-prilozhenij/' },
] */

const text = [
  {
    text:
      "Веб-студия «BPM Cloud» создаст такой ресурс, который станет полноценным виртуальным офисом. Полный набор требуемых модулей, продуманная техническая сторона и т.д. Нужно только начать принимать заявки от потребителей;",
    id: 1,
  },
  {
    text:
      "Стройная структура, юзабилити, запоминающийся внешний облик – все это весьма значимо для интернет-ресурса. «BPM Cloud» – веб-студия Беларуси, которая знает, как понравиться клиентам, врезаться в память и побудить к приобретению. Доверьтесь профессионалам;",
    id: 2,
  },
  {
    text:
      "Кому нужен ресурс, о котором никто не знает? Оптимизация позволяет добиться признания не только поисковыми роботами, но и пользователями. Первые позиции в выдаче и броские сниппеты сделают свое дело. Непременно станут заказывать;",
    id: 3,
  },
  {
    text:
      "Наши авторы владеют технологиями привлечения внимания, могут писать в разных жанрах и стилях, способны создать соответствующую атмосферу. Наше интернет-агентство digital-маркетинга подготовит такие тексты, которые превратят простых потребителей в фанатов продукта;  ",
    id: 4,
  },
  {
    text:
      "Самый оперативный способ привлечения клиентов. Практически сразу приходят лиды. Грамотно настроим, добившись предельного КПД. Занимаются только сертифицированные специалисты;",
    id: 5,
  },
  {
    text:
      "Каждый проект непременно должен быть представлен в социальных сетях! Роль таких медиа слишком значима, чтобы оставлять без внимания. Создадим профиль, обеспечим контентом, настроим таргетированную рекламу и т.д. – сделаем все, чтобы бизнес клиента проявился в максимально выгодном свете;",
    id: 6,
  },
  {
    text:
      "Управление репутацией имеет острое значение для цифрового мира. Происки конкурентов, недовольные клиенты (всем нравиться невозможно) – все это негативно влияет на имидж. Как быть? Нужно только обратиться в нашу компанию. Остальное берем на себя;  ",
    id: 7,
  },
  {
    text:
      "К услугам заказчика передовые разработчики Беларуси. Этим сказано все! Не бросаем дело на половине пути. Доводим до результата! Наши возможности ограничены только пожеланиями клиента;",
    id: 8,
  },
  {
    text:
      "«BPM Cloud» – интернет-агентство полного цикла. Спланируем маркетинговую кампанию, которая будет полностью соответствовать заявленному бюджету. Не обещаем, что раскрутим за 50 рублей, но и многие тысячи не потребуются.",
    id: 9,
  },
]

const OfferService = () => {
  const [state, setState] = useState(1)
  const showNumber = () => {
    return numbers.map(i => {
      if (i.id === state) {
        return i.number
      }
    })
  }

  const showText = () => {
    return text.map(i => {
      if (i.id === state) {
        return i.text
      }
    })
  }

  /*   const getButtonLink = (state) =>{

  }
 */
  const handler = elem => setState(elem)
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <h2 className={styles.title}>Рады предложить свои услуги!</h2>
        <div className={styles.text}>
          Белорусское диджитал-пространство многогранно. Как раз поэтому
          предусмотрено внушительное количество векторов приложения усилий. Наши
          заказчики получают работу под ключ, а не разрозненный набор
          мероприятий, в котором нет смысла. Готовы взяться за следующие
          направления:
        </div>
        <div className={styles.animationAndPage}>
          <Animation state={state} />
          <div className={styles.boxTexts}>
            <div className={styles.number}>{showNumber()}</div>
            <div className={styles.changingText}>{showText()}</div>
            <ButtonGreen className={styles.button}>ПОДРОБНЕЕ</ButtonGreen>
          </div>
          <div className={styles.boxButtons}>
            <div
              className={classnames(styles.hoverText, {
                [styles.active]: 1 === state,
              })}
              onMouseOver={() => handler(1)}
            >
              <div>01</div> <span>разработка сайтов</span>
            </div>
            <div
              className={classnames(styles.hoverText, {
                [styles.active]: 2 === state,
              })}
              onMouseOver={() => handler(2)}
            >
              <div>02</div> <span>Дизайн и брендинг</span>
            </div>
            <div
              className={classnames(styles.hoverText, {
                [styles.active]: 3 === state,
              })}
              onMouseOver={() => handler(3)}
            >
              <div>03</div> <span>SEO-продвижение</span>
            </div>
            <div
              className={classnames(styles.hoverText, {
                [styles.active]: 4 === state,
              })}
              onMouseOver={() => handler(4)}
            >
              <div>04</div> <span>копирайтинг</span>
            </div>
            <div
              className={classnames(styles.hoverText, {
                [styles.active]: 5 === state,
              })}
              onMouseOver={() => handler(5)}
            >
              <div>05</div> <span>контекстная реклама</span>
            </div>
            <div
              className={classnames(styles.hoverText, {
                [styles.active]: 6 === state,
              })}
              onMouseOver={() => handler(6)}
            >
              <div>06</div>
              <span>SMM</span>
            </div>
            <div
              className={classnames(styles.hoverText, {
                [styles.active]: 7 === state,
              })}
              onMouseOver={() => handler(7)}
            >
              <div>07</div>
              <span>SERM</span>
            </div>
            <div
              className={classnames(styles.hoverText, {
                [styles.active]: 8 === state,
              })}
              onMouseOver={() => handler(8)}
            >
              <div>08</div>
              <span>Разработка приложений</span>
            </div>
            <div
              className={classnames(styles.hoverText, {
                [styles.active]: 9 === state,
              })}
              onMouseOver={() => handler(9)}
            >
              <div>09</div>
              <span>другие услуги</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferService
