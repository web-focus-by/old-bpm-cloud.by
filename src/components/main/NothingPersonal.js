import React from "react"

import { images } from "../../images"
import { useMediaQuery } from 'react-responsive'
import styles from "./NothingPersonal.module.css"

function PparagraphList(props){
  const paragpaph = props.paragpaph;
  const paragList = paragpaph.map((parag, i) => {
    return(
      <p key={i}>{parag}</p>
    )
  });

  return (
    <div className={styles.text}>{paragList}</div>
  )
}

const content = ["«Ничего личного» – не про нас 100%! Агентство интернет-маркетинга «BPM Cloud» представляет собой сообщество прогрессивных людей, которые не первый год увлечены профессиональным самосовершенствованием. Мы проявляем себя в проектах заказчиков. За каждой площадкой стоят творческие поиски и математический расчет.",
"Только такой подход позволяет добиться желаемых результатов. Важно не только придумать броские решения, но и уметь грамотно и вовремя внедрить их. Рейтинг клиента в сети – показатель нашего профессионализма.",
"Ставим человеческие отношения выше финансовой стороны: заказчик для нас — не источник дохода, а человек, который обратился за помощью. К нам приходят с конкретными проблемами, которые мы решаем всем коллективом.",
"Мы не только стремимся подружиться с клиентом, но и принести предельную пользу, ведь наша репутация напрямую зависит от результата. В веб-студии «BPM Cloud» царит атмосфера нирваны."]

const NothingPersonal = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 500px)'
  })
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <div className={styles.title}>«Ничего личного»</div>
            <div className={styles.text}>
              <p>{content[0]}</p>
              {isMobile && <img className={styles.photo} src={images.PhotoYuri} alt="photo" />}
              <p>{content[1]}</p>
              {isMobile && (
                <details>
                  <summary>Читать далее</summary>
                  <p>{content[2]}</p>
                  <p>{content[3]}</p>
                </details>
              )}
              {!isMobile && (
                  <p>{content[2]}</p>
              )}
              {!isMobile && (
                  <p>{content[3]}</p>
              )}
            </div>
        </div>
        {!isMobile && <img className={styles.photo} src={images.PhotoYuri} alt="photo" />}
      </div>
    </div>
  )
}

export default NothingPersonal
