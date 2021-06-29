import React, { useState } from "react"
import classnames from "classnames"
import Animation from "./animation/Animation"
import styles from "./OfferService.module.scss"
import { Link } from "gatsby"
import { ButtonGreen } from "../buttons"

const text = [
  {
    title: "разработка сайтов",
    text:
      "Веб-студия «BPM Cloud» создаст такой ресурс, который станет полноценным виртуальным офисом. Полный набор требуемых модулей, продуманная техническая сторона и т.д. Нужно только начать принимать заявки от потребителей;",
    id: 1,
    link: "/razrabotka-sajtov/",
  },
  {
    title: "Дизайн и брендинг",
    text:
      "Стройная структура, юзабилити, запоминающийся внешний облик – все это весьма значимо для интернет-ресурса. «BPM Cloud» – веб-студия Беларуси, которая знает, как понравиться клиентам, врезаться в память и побудить к приобретению. Доверьтесь профессионалам;",
    id: 2,
    link: "/brending-i-dizajn/",
  },
  {
    title: "SEO-продвижение",
    text:
      "Кому нужен ресурс, о котором никто не знает? Оптимизация позволяет добиться признания не только поисковыми роботами, но и пользователями. Первые позиции в выдаче и броские сниппеты сделают свое дело. Непременно станут заказывать;",
    id: 3,
    link: "/seo/",
  },
  {
    title: "копирайтинг",
    text:
      "Наши авторы владеют технологиями привлечения внимания, могут писать в разных жанрах и стилях, способны создать соответствующую атмосферу. Наше интернет-агентство digital-маркетинга подготовит такие тексты, которые превратят простых потребителей в фанатов продукта;  ",
    id: 4,
    link: "/kopirajting/",
  },
  {
    title: "контекстная реклама",
    text:
      "Самый оперативный способ привлечения клиентов. Практически сразу приходят лиды. Грамотно настроим, добившись предельного КПД. Занимаются только сертифицированные специалисты;",
    id: 5,
    link: "/ppc/",
  },
  {
    title: "SMM",
    text:
      "Каждый проект непременно должен быть представлен в социальных сетях! Роль таких медиа слишком значима, чтобы оставлять без внимания. Создадим профиль, обеспечим контентом, настроим таргетированную рекламу и т.д. – сделаем все, чтобы бизнес клиента проявился в максимально выгодном свете;",
    id: 6,
    link: "/smm/",
  },
  {
    title: "serm",
    text:
      "Управление репутацией имеет острое значение для цифрового мира. Происки конкурентов, недовольные клиенты (всем нравиться невозможно) – все это негативно влияет на имидж. Как быть? Нужно только обратиться в нашу компанию. Остальное берем на себя;  ",
    id: 7,
    link: "/serm/",
  },
  {
    title: "Разработка приложений",
    text:
      "К услугам заказчика передовые разработчики Беларуси. Этим сказано все! Не бросаем дело на половине пути. Доводим до результата! Наши возможности ограничены только пожеланиями клиента;",
    id: 8,
    link: "/razrabotka-prilozhenij/",
  },
  {
    title: "другие услуги",
    text:
      "«BPM Cloud» – интернет-агентство полного цикла. Спланируем маркетинговую кампанию, которая будет полностью соответствовать заявленному бюджету. Не обещаем, что раскрутим за 50 рублей, но и многие тысячи не потребуются.",
    id: 9,
    link: "/prochie-uslugi/",
  },
]

const OfferService = () => {
  const [state, setState] = useState(1)
  const showNumber = () => {
    return text.map(i => {
      if (i.id === state) {
        return `0${i.id}`
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
            <Link to={text[state - 1].link} className={styles.buttonWrapper}>
              <ButtonGreen className={styles.button}>ПОДРОБНЕЕ</ButtonGreen>
            </Link>
          </div>
          <div className={styles.boxButtons}>
            {text.map((elem, i) => {
              return (
                <div
                  key={i}
                  className={classnames(styles.hoverText, {
                    [styles.active]: elem.id === state,
                  })}
                  onMouseOver={() => handler(elem.id)}
                >
                  <div>0{elem.id}</div> <span>{elem.title}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferService
