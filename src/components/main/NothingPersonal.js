import React from "react"

import { images } from "../../images"

import styles from "./NothingPersonal.module.css"

function PparagraphList(props){
  const paragpaph = props.paragpaph;
  const paragList = paragpaph.map((parag, i) => <p key={i}>{parag}</p>);
  return (
    <div className={styles.text}>{paragList}</div>
  )
}

const content = ["«Ничего личного» – не про нас 100%! Агентство интернет-маркетинга «BPM Cloud» представляет собой сообщество прогрессивных людей, которые не первый год увлечены профессиональным самосовершенствованием. Мы проявляем себя в проектах заказчиков. За каждой площадкой стоят творческие поиски и математический расчет.\n\n",
"Только такой подход позволяет добиться желаемых результатов. Важно не только придумать броские решения, но и уметь грамотно и вовремя внедрить их. Рейтинг клиента в сети – показатель нашего профессионализма.\n\n",
"Ставим человеческие отношения выше финансовой стороны: заказчик для нас — не источник дохода, а человек, который обратился за помощью. К нам приходят с конкретными проблемами, которые мы решаем всем коллективом.\n\n",
"Мы не только стремимся подружиться с клиентом, но и принести предельную пользу, ведь наша репутация напрямую зависит от результата. В веб-студии «BPM Cloud» царит атмосфера нирваны."]

const NothingPersonal = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <div className={styles.title}>«Ничего личного»</div>
            <PparagraphList paragpaph={content} />
        </div>
        <img className={styles.photo} src={images.PhotoYuri} alt="photo" />
      </div>
    </div>
  )
}

export default NothingPersonal
