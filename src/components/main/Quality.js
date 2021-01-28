import React, { useState } from "react"
import Five from "./castomNumbers/Five"
import Four from "./castomNumbers/Four"
import One from "./castomNumbers/One"
import Six from "./castomNumbers/Six"
import Three from "./castomNumbers/Three"
import Two from "./castomNumbers/Two"

import styles from "./Quality.module.css"

const String = ({ title, text, number }) => {
  const [color, setColor] = useState(false)

  return (
    <div
      onMouseOver={() => setColor(!color)}
      onMouseOut={() => setColor(!color)}
      className={styles.string}
    >
      <>{number}</>
      <div className={styles.boxString}>
        <div className={styles.titleElem}>{title}</div>
        <div className={styles.textElem}>{text}</div>
      </div>
    </div>
  )
}

const Quality = () => {
  return (
    <div className={styles.wrapperQuality}>
      <div className={styles.box}>
        <div className={styles.title}>6:0 в пользу «BPM Cloud»!</div>
        <div className={styles.desc}>
          Веб-судия в Минске – не редкость, но почему стоит обратиться
          непосредственно в нашу компанию? Список положительных сторон такого
          решения весьма пространен. Приведем только 5 плюсов:
        </div>
        <div className={styles.strings}>
          <String
            color={"red"}
            title="Отменная квалификация"
            text="Некоторые сотрудники начинали на заре Байнета и имеют опыт
                работы за рубежом;"
            number={<One />}
          />
          <String
            title="Своевременность воплощения проектов в жизнь"
            text="Не обещаем, что сделаем за пару дней, но заранее уведомим о сроках. Не потратим даже лишнего дня;"
            number={<Four />}
          />
          <String
            title="Работа на результат"
            text="Наше digital-агентство полного цикла избегает бюрократии, предпочитая демонстрировать плоды сотрудничества, а не кипу отчетов (хотя предоставим все необходимое);"
            number={<Two />}
          />
          <String
            title="Разумная ценовая политика"
            text="Прайс понравится даже собственнику стартапа, вынужденному считать каждую копейку. Бесплатно не сделаем, но обещаем, что это будет ниже рыночной стоимости;"
            number={<Five />}
          />
          <String
            title="Комплексный подход"
            text="К услугам клиента студия веб-дизайна, копирайтинга, SEO-продвижения, разработки сайтов и т.д. Все в одном месте!"
            number={<Three />}
          />
          <String
            title="Понимание особенностей бизнеса"
            text="Не станем навязывать службе такси сайт-визитку. Только то, что поможет конкретно Вам повысить доход!"
            number={<Six />}
          />
        </div>
      </div>
    </div>
  )
}

export default Quality
